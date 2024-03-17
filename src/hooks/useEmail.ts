import nodemailer from 'nodemailer'; // Import Nodemailer

import { errorMessage } from '../constants';

type EmailProps = {
    to: string,
    text: string,
    from: string,
    subject: string,
    html?: any
}

export default function useEmail () {

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com", // Use 'smtp.gmail.com' for Gmail SMTP
        port: 587,
        secure: false, // upgrade later with STARTTLS
        auth: {
          user: "claceey@gmail.com",
          pass: process.env.GMAIL_PASS,
        },
    });


    
    async function sendMail ({from="claceey@gmail.com", text, to, subject, html}: EmailProps) {

        try {
            const info = await transporter.sendMail({from, to, subject, text, html
            });
            return ({
                success: true,
                message: 'email sent successfully',
                data: info.messageId
            })
        } 
        catch (err: any) {
            errorMessage(err.message)
        }
    }
    return {sendMail}

}
