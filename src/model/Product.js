const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  SKU: {
    type: String,
    required: true,
    unique: true
  },
  quantity: {
    type: Number,
    required: true
  },
  productName: {
    type: String,
    required: true
  },
  images: {
    type: [String], // Array of strings to store image URLs
    required: true
  },
  productDescription: {
    type: String,
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
