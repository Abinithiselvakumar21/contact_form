// routes/search.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
  const q = (req.query.q || '').trim();
  if (!q) return res.json({ results: [] });

  // Simple case-insensitive regex search on name and description
  const regex = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i'); // escape user input
  try {
    const results = await Product.find({
      $or: [
        { name: regex },
        { description: regex },
        { tags: regex }
      ]
    }).limit(50).lean();
    res.json({ results });
  } catch (err) {
    console.error('Search error', err);
    res.status(500).json({ error: 'Search failed' });
  }
});

module.exports = router;
