// routes/contact.js
const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact"); // ✅ Import model

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ success: false, error: "All fields are required" });
    }

    console.log("New contact received:", req.body);

    // ✅ Save to MongoDB
    await Contact.create({ name, email, message });

    res.json({ success: true });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ success: false, error: "Server error" });
  }
});

module.exports = router;
