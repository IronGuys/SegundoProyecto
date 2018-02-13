const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const ProductSchema = new Schema({
  name: String,
  description: String,
  price: Number
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Product = mongoose.model("Products", ProductSchema);

module.exports = Product;
