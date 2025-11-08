// seed.js
require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error('MONGO_URI required in .env');
  process.exit(1);
}

const sample = [
  { name: 'Red T-Shirt', description: 'Comfortable cotton shirt', price: 299, tags: ['clothing','red'] },
  { name: 'Blue Jeans', description: 'Slim fit denim', price: 1299, tags: ['clothing','denim'] },
  { name: 'Wireless Mouse', description: 'Ergonomic bluetooth mouse', price: 799, tags: ['electronics','mouse'] },
  { name: 'Coffee Mug', description: 'Ceramic mug 350ml', price: 199, tags: ['home','kitchen'] },
];

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('connected, seeding...');
    await Product.deleteMany({});
    await Product.insertMany(sample);
    console.log('seed done');
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
