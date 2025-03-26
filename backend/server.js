require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());

// Enhanced CORS configuration
app.use(cors({
  origin: [
    "https://nanahearing.com",
    "https://www.nanahearing.com",
    "https://nana-clinic-prateek-page.vercel.app"
  ],
  methods: ["GET", "POST", "OPTIONS"], // Added OPTIONS for preflight
  allowedHeaders: ["Content-Type"],
  credentials: true
}));

// Handle preflight requests
app.options("*", cors());

// Enhanced transporter configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === 'true', // Convert string to boolean
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
  logger: true, // Enable logging
  debug: true   // Enable debug output
});

// Enhanced email endpoint
app.post("/send-email", async (req, res) => {
  console.log("Received request:", req.body); // Log incoming request
  
  const { name, mobile, explanation, address } = req.body;

  // Validate required fields
  if (!name || !mobile || !explanation || !address) {
    const error = "All fields are required";
    console.error(error);
    return res.status(400).json({ 
      error,
      receivedData: req.body // Include received data for debugging
    });
  }

  // Validate mobile number format
  if (!/^\d{10}$/.test(mobile)) {
    return res.status(400).json({ error: "Mobile number must be 10 digits" });
  }

  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    subject: "New Appointment Request from Nana Hearing Clinic",
    html: `
      <h2>New Appointment Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Mobile:</strong> ${mobile}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Problem Description:</strong></p>
      <p>${explanation}</p>
    `,
    text: `Name: ${name}\nMobile: ${mobile}\nAddress: ${address}\nProblem: ${explanation}`
  };

  try {
    console.log("Attempting to send email:", mailOptions);
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
    
    res.status(200).json({ 
      message: "Email sent successfully",
      messageId: info.messageId 
    });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ 
      error: "Failed to send email",
      details: error.message 
    });
  }
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
  console.log(`Allowed origins: ${process.env.ALLOWED_ORIGINS}`);
});