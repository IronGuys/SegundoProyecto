const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  ProductName: String,
  Description: String,
  Images: url
}, {
  timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
});

const Products = mongoose.model("Products", ProductSchema);

module.exports = Products;
