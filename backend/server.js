// server.js
require("dotenv").config(); // loads variables from .env
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Create app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected Successfully"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Example route
app.get("/", (req, res) => {
  res.send("🚀 Backend is running successfully!");
});

// Example POST route (for a contact form)
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("📩 New contact form submitted:", { name, email, message });
  res.json({ success: true, message: "Form received!" });
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
