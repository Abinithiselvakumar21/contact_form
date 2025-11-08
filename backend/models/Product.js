// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true, index: true },
  description: String,
  price: Number,
  tags: [String],
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
