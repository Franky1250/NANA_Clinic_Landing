require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors({
    origin: "https://nana-clinic-prateek-page.vercel.app", // Frontend URL
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
}));

// Nodemailer Transport
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // Use TLS
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, 
    },
    tls: {
        rejectUnauthorized: false, // Fix potential TLS issues
    }
});

// API to send email
app.post("/send-email", async (req, res) => {
    const { name, mobile, explanation, address } = req.body;

    if (!name || !mobile || !explanation || !address) {
        console.error("Missing fields in request body:", req.body);
        return res.status(400).json({ error: "All fields are required" });
    }

    const mailOptions = {
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: "New Appointment Request",
        text: `Name: ${name}\nMobile: ${mobile}\nAddress: ${address}\nExplanation: ${explanation}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send email" });
    }
});

app.listen(5000, () => console.log("✅ Server running on http://localhost:5000"));