import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "thrishankkalluru@gmail.com",
      pass: "fhtb cmcz mgus rlxz",
    },
    secure: true,
  });
  const html_data = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Information</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 0;
                padding: 20px;
                background-color: #f4f4f4;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #fff;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                border-radius: 8px;
            }
            h2 {
                text-align: center;
                margin-bottom: 20px;
                color: #333;
            }
            .info-block {
                margin-bottom: 20px;
                padding: 15px;
                border: 1px solid #ddd;
                border-radius: 8px;
                background-color: #fafafa;
            }
            .info-block:last-child {
                margin-bottom: 0;
            }
            .info-title {
                font-weight: bold;
                margin-bottom: 5px;
                color: #555;
            }
            .info-text {
                font-size: 16px;
                color: #333;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h2>Contact Information</h2>
            <div class="info-block">
                <div class="info-title">Name:</div>
                <div class="info-text" id="name">${data.name}</div>
            </div>
            <div class="info-block">
                <div class="info-title">Email:</div>
                <div class="info-text" id="email">${data.email}</div>
            </div>
            <div class="info-block">
                <div class="info-title">Phone Number:</div>
                <div class="info-text" id="number">${data.number}</div>
            </div>
            <div class="info-block">
                <div class="info-title">Message:</div>
                <div class="info-text" id="msg">${data.msg}</div>
            </div>
        </div>
    </body>
</html>
`;
  const mailData = {
    to: "thrishankkalluru16@gmail.com",
    subject: `Message From cityrents`,
    html: html_data,
  };
  try {
    const result = await transporter.sendMail(mailData);
    return NextResponse.json(
      { message: "Message Sent Successfully. We will reach out to you ASAP" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Message Failed to Send. Please reach out directly" },
      { status: 400 }
    );
  }
}
