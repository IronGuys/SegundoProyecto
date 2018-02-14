const express = require('express');
const router = express.Router();
const Product = require('../models/products');

//  CRUD -> READ ALL 
router.get('/', (req, res, next) => {
    res.render("product-page")
});


module.exports = router
