const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");
const Cart = require("../models/Cart");


router.get("/", (req, res, next) => {
    Cart.findOne({ "ownerId": req.user._id }).populate("products")
    .then(cart => {
        if(cart!=null&&cart.products.length!=0){
            let cartObject;
            let pricesArray = cart.products.map((e)=> e.price)
            let sumaProductos = (pricesArray.reduce((a,b)=>a+b))
        }
        if(cart!=null)cartObject = cart
        else cartObject = undefined;
        res.render("myCart", { cart: cartObject });
    }).catch(err=>console.log(err))
});

router.post("/", (req, res, next) => {
    let nuevoCarrito =  new Cart({ ownerId: req.user._id })
        .save()
        .then(newCart => console.log(newCart))
        .catch(err => console.log(err));
        res.redirect('/cart', {object: nuevoCarrito})
});
router.post("/addProduct", (req, res, next) => {

     Cart.findOneAndUpdate({ ownerId: req.body.userid }, { $push:{products:req.body.productid}}, {new: true})
     .then(cart => {
        res.redirect("/cart")
    });
});

module.exports = router;
