import { NextApiRequest, NextApiResponse } from "next";
import nodemail from "nodemailer";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "POST") {
    res.send(404);
    return;
  }

  const { name, email, message } = req.body;
  const {
    EMAIL_SERVER,
    EMAIL_USERNAME,
    EMAIL_PASSWORD,
    EMAIL_SMTP_PORT,
  } = process.env;

  try {
    let transporter = nodemail.createTransport({
      // @ts-ignore
      host: EMAIL_SERVER,
      port: EMAIL_SMTP_PORT,
      secure: true,
      auth: {
        user: EMAIL_USERNAME,
        pass: EMAIL_PASSWORD,
      },
      tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false,
      },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `${name} <${email}>`,
      replyTo: email,
      to: "info@jbs-ltd.uk",
      subject: "Email from Website Contact Form",
      text: message,
      envelope: {
        from: `${name} <info@jbs-ltd.uk>`,
        to: "info@jbs-ltd.uk",
      },
    });

    console.log("Email sent");
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.json({ success: false });
  }
};
