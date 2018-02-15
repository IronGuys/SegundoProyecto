const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");
const Cart = require("../models/Cart");

router.get("/", (req, res, next) => {
  Cart.findOne({ ownerId: req.user._id })
    .populate("products")
    .then(cart => {
      if(cart != null&&cart.products.length){
        let cartObject;
        let pricesArray = cart.products.map(e => e.price);
        console.log(pricesArray.reduce((a, b) => a + b));
      }
      if (cart != null) cartObject = cart;
      else cartObject = undefined;
      res.render("myCart", { cart: cartObject, ownerId: req.user._id });
    })
    .catch(err => console.log(err));
});

router.post("/", (req, res, next) => {
  new Cart({ ownerId: req.user._id })
    .save()
    .then(newCart => console.log(newCart))
    .catch(err => console.log(err));
  res.redirect("/cart");
});
router.post("/addProduct", (req, res, next) => {
  Cart.findOneAndUpdate(
    { ownerId: req.body.userid },
    { $push: { products: req.body.productid } },
    { new: true }
  ).then(cart => {
    res.redirect("/cart");
  });
});

router.post("/deleteProduct", (req,res,next) =>{
  Cart.findOneAndUpdate({ ownerId: req.body.userid }, { $pull: { products: req.body.productid } }, { new: true })
    .then(cart => {
      Cart.findOne({ _id: cart._id })
      .populate('products')
      .then(populatedCart => {
        res.render("myCart", {
          cart: populatedCart,
          ownerId: req.user._id
        });
      })
    })
    .catch(err => console.log(err));
});

module.exports = router;
