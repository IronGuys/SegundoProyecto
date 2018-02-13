const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const User = require("../models/User");
const Product = require("../models/products");

mongoose
  .connect("mongodb://localhost/HipStore")
  .then(() => console.log("Conectado con Seeds!"));
var salt = bcrypt.genSaltSync(bcryptSalt);
const password = "ironguys";
var encryptedPass = bcrypt.hashSync(password, salt);

const admin = {
  username: "admin",
  name: "HipStore",
  password: encryptedPass,
  role: "admin"
};
const productsArray = [
  {
    name: "scissorsSet",
    description: "the perfect scissor set for your beard",
    price: 30
  },
  {
    name: "MacNotePro",
    description: "the perfect noteBOOK to design is mouse free :D",
    price: 100
  },
  {
    name: "beardWax",
    description: "you beard needs it and you know it",
    price: 10
  },
  {
    name: "HipGlasses",
    description: "the perfect choice if you cannot have beard",
    price: 60
  }
];
Product.collection.drop();

productsArray.forEach(product => {
  let newProduct = new Product(product);
  newProduct
    .save(product)
    .then(newSavedProduct => console.log(newSavedProduct))
    .catch(err => console.log(err));
});
