const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.post("https://ahmetkurtbm.github.io/send-email", (req, res) => {
  const from = req.body.from;
  const content = req.body.content;

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let mailOptions = {
    from: from,
    to: "recipient@example.com",
    subject: "E-posta Gönderme Formu",
    text: content,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("E-posta gönderilirken bir hata oluştu.");
    } else {
      console.log("E-posta gönderildi: " + info.response);
      res.send("E-posta başarıyla gönderildi.");
    }
  });
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});
