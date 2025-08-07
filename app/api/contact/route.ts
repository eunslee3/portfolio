import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { token, formData } = body;

  // console.log('token: ', token)
  console.log('formData: ', formData)
  console.log('token: ', token)

  if (!token) {
    return NextResponse.json({ error: "Token is required" }, { status: 400 });
  }

  const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    method: "POST",
    body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
  })

  const verification = await verifyRes.json();

  console.log('verification: ', verification)

  if (!verification.success || verification.score < 0.5) {
    return NextResponse.json({ error: "Invalid reCAPTCHA token" }, { status: 400 });
  }
  
  const { name, email, subject, message } = formData;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    subject: "Contact Form - Portfolio",
    text: `Name: ${name}\nEmail: ${email}\Subject: ${subject}\nMessage: ${message}`,
  };
  
  await transporter.sendMail(mailOptions);

  return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
}
