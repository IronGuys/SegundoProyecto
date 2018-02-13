const express = require('express');
const router = express.Router();
const isLoggedIn = require('../middlewares/isLoggedIn');
const onlyMe = require('../middlewares/onlyMe');
const Product = require("../models/products");
/* GET home page. */

router.get("/", function(req, res, next) {
  Product.find().then(obj => {
    var producto = []
    obj.forEach( e => {
      console.log(e.name)
      producto.push(e.name)
    })
    res.render("index", { producto: producto });
  });
});
router.get('/private', isLoggedIn, function(req, res, next) {
  res.render('private');
});


router.get('/onlyme', onlyMe, function(req, res, next) {
  res.render('private');
});


module.exports = router;
