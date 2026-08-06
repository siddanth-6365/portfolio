import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const LIMITS = { name: 100, email: 200, message: 5000 };
const THROTTLE_MS = 30_000;

// ponytail: per-instance and resets on cold start — reach for Upstash only if
// real spam shows up. The honeypot below does most of the work.
const lastSeen = new Map<string, number>();

function clean(value: unknown, max: number) {
  if (typeof value !== "string") return null;
  // strip CR/LF so nothing can smuggle extra mail headers
  const trimmed = value.replace(/[\r\n]+/g, " ").trim();
  return trimmed.length > 0 && trimmed.length <= max ? trimmed : null;
}

export async function POST(request: Request) {
  const { user, password, toEmail } = {
    user: process.env.GMAIL_USER,
    password: process.env.GMAIL_PASSWORD,
    toEmail: process.env.TO_EMAIL,
  };

  if (!user || !password || !toEmail) {
    return NextResponse.json(
      { message: "Contact form is not configured. Please email me directly." },
      { status: 503 }
    );
  }

  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill every field they find. Humans never see this one.
  if (clean(payload.website, 200)) {
    return NextResponse.json({ message: "Thanks!" });
  }

  const name = clean(payload.name, LIMITS.name);
  const email = clean(payload.email, LIMITS.email);
  const message = clean(payload.message, LIMITS.message);

  if (!name || !email || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { message: "Please fill in your name, a valid email and a message." },
      { status: 400 }
    );
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
  const previous = lastSeen.get(ip);
  if (previous && Date.now() - previous < THROTTLE_MS) {
    return NextResponse.json(
      { message: "Just a moment — try again shortly." },
      { status: 429 }
    );
  }
  lastSeen.set(ip, Date.now());

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass: password },
  });

  try {
    await transporter.sendMail({
      from: user,
      to: toEmail,
      replyTo: email,
      subject: `Portfolio contact: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("mail send failed", error);
    return NextResponse.json(
      { message: "Something went wrong sending that. Please email me directly." },
      { status: 500 }
    );
  }
}
