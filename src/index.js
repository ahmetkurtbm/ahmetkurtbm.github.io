import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

/*
// E-posta göndermek için gerekli bilgiler
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "ahmetkurtk2@gmail.com", // E-posta adresiniz
    pass: "Winner80.", // E-posta şifreniz
  },
});

// Formdan gelen bilgileri alıp e-posta gönderme işlemini gerçekleştirme
app.post("/send-email", (req, res) => {
  const mailOptions = {
    from: req.body.from, // Gönderici e-posta adresi
    to: "", // Alıcı e-posta adresi
    subject: "", // E-posta konusu
    text: req.body.text, // E-posta içeriği
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.send("E-posta gönderirken bir hata oluştu.");
    } else {
      console.log("E-posta gönderildi: " + info.response);
      res.send("E-posta başarıyla gönderildi.");
    }
  });
});*/

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
