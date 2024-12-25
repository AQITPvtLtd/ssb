import nodemailer from "nodemailer";
import pool from "@/helper/db";
import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

export async function POST(request) {
  try {
    const { Fname, Email, Phone, Message } = await request.json();
    const unique_id = uuid();
    // Use pool.query with async/await for promises

    const [results] = await pool.query(
      "INSERT INTO contact(id, name ,email ,phone , message) VALUES (?,?,?,?,?)",
      [unique_id, Fname, Email, Phone, Message]
    );

    // Send email using nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      secure: true,
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    // Send email to admin
    await transporter.sendMail({
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      subject: "SSB Hospital",
      html: `<html>
              <body>
                <h3>You've got a new mail from ${Fname}, their email is: ✉️${Email} And phone Number is ${Phone} </h3>
                <p>Message:</p>
                <p>${Message}</p>
              </body>
             </html>`,
    });

    // Send confirmation email to the user
    await transporter.sendMail({
      from: process.env.MY_EMAIL,
      to: Email,
      subject: "Thank You for contacting SSB Hospital",
      html: `<html>
              <body>
                <h2>Hey ${Fname}!</h2>
                <p>Your query is noted! Our team will contact you as soon as possible.</p>
              </body>
             </html>`,
    });

    // Return success response
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
