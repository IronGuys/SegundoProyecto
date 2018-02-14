const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("/User")
const cartSchema = new Schema(

  {
    id: User.username,
    Arrayitems: []
    
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" }
  }
);
const cart = mongoose.model("cart", cartSchema);
const express = require("express");
const router = express.Router();

/* CRUD -> UPDATE REMOVE ITEM FROM CART */
router.get("/detail/:id/remove", (req, res) => {
  const productId = req.params.id;
  Product.findByIdAndRemove(productId, (err, product) => {
    if (err) {
      return next(err);
    }
    res.render("products/update", { cart:cart });
  });
});

/* CRUD -> UPDATE DATABASE */
router.post("/detail/:id/edit", (req, res) => {
  const productId = req.params.id;
  const { name, price, imageUrl, description } = req.body;
  const updates = { name, price, imageUrl, description };

  Product.findByIdAndUpdate(productId, updates, (err, product) => {
    if (err) {
      return next(err);
    }
    return res.redirect("/");
  });
});

/* CRUD -> CREATE FORM */
router.get("/new", (req, res) => {
  res.render("products/new");
});

/* CRUD -> CREATE CART IN DATABASE */
router.post("/new", (req, res) => {
  const { name, price, imageUrl, description } = req.body;
  const product = new Product({ name, price, imageUrl, description });
  product.save(err => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

/* CRUD -> DELETE PRODUCT FROM DATABASE */

router.get("/delete/:id", (req, res) => {
  const id = req.params.id;

  Product.findByIdAndRemove(id, (err, product) => {
    if (err) {
      return next(err);
    }
    return res.redirect("/");
  });
});

module.exports = cart;
