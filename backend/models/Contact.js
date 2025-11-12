const mongoose = require("mongoose");

// Define schema
const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

// Export model
module.exports = mongoose.model("Contact", ContactSchema);





