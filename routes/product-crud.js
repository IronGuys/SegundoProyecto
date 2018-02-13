
const express = require('express');
const router = express.Router();
const Product = require('../models/productS');

//  CRUD -> READ ALL 
router.get('/', (req, res, next) => {
    Product.find().exec((err, celebrities) => {
        res.render('Product /*product page*/', {
            Product: "image"
        });
    });
});
// CRUD -> READ DETAIL
router.get('/Product/:id', (req, res) => {
    const productId = req.params.id;
    Product.findById(productId, (err, product) => {
        if (err) {
            return next(err);
        }
        res.render('description', {
            product: product
        });
    });
})

module.exports = product-crud
