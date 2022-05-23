const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require('../models/User');


exports.list = () => {
  // on interroge la base de donnée
  return User.find();
}




// pas plus que 15 !!!
const SALT_ROUNDS = 10;

exports.hashPassword = async (plainTextPassword) => {
  return bcrypt.hash(plainTextPassword, SALT_ROUNDS);
}

exports.comparePasswords = async (plainTextPassword, hash) => {
  return bcrypt.compare(plainTextPassword, hash);
}

exports.createToken = (data) => {
  return jwt.sign({ data }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
}

exports.verifyToken = (data) => {
  return jwt.verify( { data }, process.env.JWT_SECRET);
}

