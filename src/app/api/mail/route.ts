import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import config from "./config.json";

export async function POST(request: Request) {
  const formData = await request.json();
  console.log(formData);

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
    to: "siddanth6365@gmail.com",
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
