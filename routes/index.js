const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewares/isLoggedIn');
const onlyMe = require('../middlewares/onlyMe');
const Product = require("../models/products");
// const producto = requ
/* GET home page. */

router.get("/", function(req, res, next) {
  Product.find().then(productos => {
    res.render("index", { productos: productos });
  });
});

router.get("/display", function(req, res, next) {
  Product.find().then(productos => {
    res.render("Display", { productos });
  });
});

router.get('/private', isLoggedIn, function(req, res, next) {
  res.render('private');
});


router.get('/onlyme', onlyMe, function(req, res, next) {
  res.render('private');
});
router.get("/producto/:id", function(req, res, next) {
  Product.findOne({_id:req.params.id}).then(producto => {
    res.render("product-page", {
      producto: producto,
      userid: req.user._id
    });
  });
});
router.get("/product-page", (req, res, next) => {
  const productId = req.query.id;
});

module.exports = router;
