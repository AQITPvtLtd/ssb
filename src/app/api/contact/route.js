import nodemailer from "nodemailer";
import pool from "@/helper/db";
import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

export async function POST(request) {
  try {
    const formData = await request.formData();

    const Fname = formData.get("Fname");
    const Email = formData.get("Email");
    const Phone = formData.get("Phone");
    const Location = formData.get("Location");
    const Message = formData.get("Message");
    const MedicalReport = formData.get("MedicalReport"); // File

    const unique_id = uuid();

    // Database Insert Query
    await pool.query(
      "INSERT INTO contact(id, name, email, phone, location, message,date) VALUES (?,?,?,?,?,?,?)",
      [unique_id, Fname, Email, Phone, Location, Message, new Date()]
    );

    // Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      secure: true,
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    // Admin Email with Attachment
    const mailOptionsAdmin = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: "SSB Hospital - New Contact Form Submission",
      html: `<html>
              <body>
                <h3>You've got a new mail from ${Fname}, their email is: ✉️${Email}, phone number is ${Phone}, and location is ${Location}</h3>
                <p>Message:</p>
                <p>${Message}</p>
              </body>
             </html>`,
      attachments: MedicalReport
        ? [{
          filename: MedicalReport.name, // File name
          content: Buffer.from(await MedicalReport.arrayBuffer()), // Convert file to buffer
        }]
        : [],
    };

    // Send Email to Admin
    await transporter.sendMail(mailOptionsAdmin);

    // User Confirmation Email
    const mailOptionsUser = {
      from: process.env.MY_EMAIL,
      to: Email,
      subject: "Thank You for contacting SSB Hospital",
      html: `<html>
              <body>
                <h2>Hey ${Fname}!</h2>
                <p>Thank you for reaching out to SSB Hospital. Your query has been noted, and our team will contact you at the earliest. For any immediate assistance, feel free to connect with us at <a href="tel:+919540114114">+91 9540114114</a>.</p>
                <p>For any immediate assistance, feel free to connect with us at <a href="tel:+919540114114">+91 9540114114</a>.</p>
                </body>
             </html>`,
    };

    // Send Email to User
    await transporter.sendMail(mailOptionsUser);

    return NextResponse.json({
      message: "Message Sent",
      success: true,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      message: "Failed to send query",
      success: false,
    });
  }
}
