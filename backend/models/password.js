const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Password = new Schema({
  userId: String,
  hash: String
});

const PasswordModel = mongoose.model('password', Password);
module.exports = PasswordModel;
