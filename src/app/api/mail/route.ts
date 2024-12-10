import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const formData = await request.json();

  const config = {
    gmail: {
      user: process.env.GMAIL_USER,
      password: process.env.GMAIL_PASSWORD,
      toEmail: process.env.TO_EMAIL,
    },
  };
  console.log("config", config);

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: config.gmail.user,
      pass: config.gmail.password,
    },
  });

  const mailOptions = {
    from: config.gmail.user,
    to: config.gmail.toEmail,
    subject: formData.subject,
    text: `Name: ${formData.name}\nEmail: ${formData.email}\n\n body: ${formData.body}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
