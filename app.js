require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const nodemailer = require('nodemailer');
const PORT = process.env.PORT;

app.use(express.urlencoded({ extended: false }));
app.use(cors());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post('/post', async (req, res) => {
  let { name, email, message } = req.body;

  try {
    const mail = {
      from: email,
      to: process.env.SMTP_USER,
      subject: 'Nuevo contacto desde mi Portfolio',
      text: message,
    };
    await transporter.sendMail(mail);
  } catch (error) {
    console.log(error);
  }

  res.status(200).send('Recibido');
});

app.listen(PORT, () => console.log(`Runnig on port ${PORT}`));
