const express = require('express');
const router = express.Router();
const Product = require('../models/products');

//  CRUD -> READ ALL 
router.get('/', (req, res, next) => {
    res.render("product-page")
});
// CRUD -> READ DETAIL
router.get('/:id', (req, res) => {
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

module.exports = router
