// models/Contact.js
const mongoose = require("mongoose");

// Contact schema define pannrom
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
}, { timestamps: true }); // createdAt, updatedAt auto add aagum

// Model export pannrom
module.exports = mongoose.model("Contact", ContactSchema);
