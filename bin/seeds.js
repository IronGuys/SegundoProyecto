const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const User = require("../models/user");
const Products = require("../models/products");

mongoose.connect("mongodb://localhost/HipStore");
var salt = bcrypt.genSaltSync(bcryptSalt);
const password = "ironguys";
var encryptedPass = bcrypt.hashSync(password, salt);

const boss = new User({
  username: "admin",
  name: "HipStore",
  password: encryptedPass,
  role: "admin"
});
const Products = [
    {
        name: String,
        description: String,
        price: Number,
        images: url

    }
]