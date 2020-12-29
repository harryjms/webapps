import express from "express";
import nodemailer from "nodemailer";

const app = express();
app.use(express.json());

const { SMTP_HOST, SMTP_USER, SMTP_PASSWORD, SEND_MESSAGES_TO } = process.env;

app.get("/api/ping", (req, res, next) => {
  res.send("pong");
});

app.post("/api/contact", async (req, res, next) => {
  try {
    const { email, name, message } = req.body;
    let transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      from: email,
      to: SEND_MESSAGES_TO,
      envelope: {
        from: email,
        to: SEND_MESSAGES_TO,
      },
    });
    await transporter.sendMail({
      subject: "Message from website",
      text: message,
      from: `${name} <${email}>`,
    });
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

app.listen(3000);
