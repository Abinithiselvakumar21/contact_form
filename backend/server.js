// server.js

// 🟢 Import dependencies
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// 🟢 Create express app
const app = express();

// 🟢 Middleware setup
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(bodyParser.json());

// 🟢 Import routes
const contactRouter = require('./routes/contact');
const searchRouter  = require('./routes/search');

// 🟢 Use routes
app.use('/api/contact', contactRouter);
app.use('/api/search', searchRouter);

// 🟢 Environment variables
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error('MONGO_URI missing in env');
  process.exit(1);
}

// 🟢 Connect to MongoDB and start server
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
