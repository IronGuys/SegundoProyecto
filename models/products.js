const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const ProductSchema = new Schema({
  productName: String,
  description: String,
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Product = mongoose.model("Products", ProductSchema);

module.exports = Product;
