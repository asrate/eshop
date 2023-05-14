const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  catagoty: {
    type: String,
  },
  price: {
    type: Number,
  },
  brand: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
  updated: {
    type: Date,
    default: Date.now(),
  },
});
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
