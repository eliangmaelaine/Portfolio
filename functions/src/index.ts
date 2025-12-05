const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

// Configure your email account
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your.email@gmail.com",
    pass: "your-app-password" // Use Gmail App Password
  }
});

// Trigger function when a new message is added to Firestore
exports.sendEmailOnNewMessage = functions.firestore
  .document("messages/{docId}")
  .onCreate(async (snap, context) => {
    const data = snap.data();

    const mailOptions = {
      from: "your.email@gmail.com",
      to: "recipient@example.com", // where you want to receive the message
      subject: `New message from ${data.name}`,
      text: `
        Name: ${data.name}
        Email: ${data.email}
        Message: ${data.message}
      `
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  });
