const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const User = require("../models/User");
const Product = require("../models/Product");


mongoose
  .connect("mongodb://localhost/HipStore") .then(() => console.log("Conectado con Seeds!"));
;
var salt = bcrypt.genSaltSync(bcryptSalt);
const password = "ironguys";
var encryptedPass = bcrypt.hashSync(password, salt);

const admin = {
  username: "admin",
  name: "HipStore",
  password: encryptedPass,
  role: "admin"
};
const productsArray =[
    {
        name: "scissorsSet",
        description: "the perfect sciissor set for your beard" ,
        price: 30

    }
];
Product.collection.drop();

productsArray.forEach(product => {
  let newProduct = new Product(product);
  newProduct.save(product)
    .then(newSavedProduct => console.log(newSavedProduct))
    .catch(err=>console.log(err));
});