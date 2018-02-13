const passport = require("passport");
require('./serialize');
require('./local-strategy');
var express = require("express");
var router = express.Router();

const passportConfig = (app) => {
    app.use(passport.initialize());
    app.use(passport.session());
}

/* GET Product page. */
router.get("/product-page", function(req, res, next) {
  res.render("product", { title: "this is the product page" });
});




module.exports = passportConfig;