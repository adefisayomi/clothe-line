// pages/api/sendEmail.js

import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  if (method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { from, subject, message } = body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "claceey@gmail.com",
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    const info = await transporter.sendMail({ subject, html: message, replyTo: from, sender: from, to: process.env.GMAIL_EMAIL });
    res.status(200).json({ success: true, data: info.messageId, message: 'message sent successfuly' });
  } catch (error: any) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: error.message, data:null });
  }
}
