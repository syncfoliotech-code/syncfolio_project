import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, service, comments, phone } = req.body;

    if (!name || !email || !service || !comments) {
        return res.status(400).json({ error: 'Required fields are missing.' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'abhishakejutur@gmail.com',
        pass: 'xiak bkhd yllz iwud',
      },
    });

    const mailOptions = {
      from: 'abhishakejutur@gmail.com',
      to: 'abhishakejutur@gmail.com',
      subject: `Syncfolio Tech - New Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #333;">New Message from ${name}</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr style="background-color: #f2f2f2;"><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Field</th><th style="border: 1px solid #ddd; padding: 8px; text-align: left;">Details</th></tr>
            <tr><td style="border: 1px solid #ddd; padding: 8px;">Name</td><td style="border: 1px solid #ddd; padding: 8px;">${name}</td></tr>
            <tr><td style="border: 1px solid #ddd; padding: 8px;">Email</td><td style="border: 1px solid #ddd; padding: 8px;">${email}</td></tr>
            <tr><td style="border: 1px solid #ddd; padding: 8px;">Phone</td><td style="border: 1px solid #ddd; padding: 8px;">${phone || 'Not provided'}</td></tr>
            <tr><td style="border: 1px solid #ddd; padding: 8px;">Service</td><td style="border: 1px solid #ddd; padding: 8px;">${service}</td></tr>
          </table>
          <div style="background-color: #f2f2f2; margin-top: 20px; padding: 15px; border-radius: 8px;">
            <h3 style="color: #333;">Message:</h3><p style="color: #555;">${comments}</p>
          </div>
        </div>
      `,
    };

    const autoReplyOptions = {
      from: 'abhishakejutur@gmail.com',
      to: email,
      subject: `Thank you for contacting Syncfolio Tech!`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; text-align: center;">
          <img src="https://syncfoliotech.vercel.app/sync2.png" style="max-width: 200px; height: auto;" alt="Syncfolio Tech Logo"/>
          <h2 style="color: #333;">Hey ${name},</h2>
          <p style="color: #555;">Thank you for reaching out to Syncfolio Tech. We have received your inquiry regarding our <strong>${service}</strong> services.</p>
          <p style="color: #555;">Our team is reviewing your message and we will get back to you as soon as possible, typically within 24 hours.</p>
          <p style="color: #555;">We are excited about the possibility of working with you.</p>
          <br/>
          <p style="color: #555;">Best regards,<br/><strong>The Syncfolio Tech Team</strong></p>
          <p style="color: #555;"><a href="https://syncfoliotech.vercel.app/">your-website-url.com</a></p>
        </div>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      await transporter.sendMail(autoReplyOptions);
      res.status(200).json({ message: 'Emails sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error sending emails' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}