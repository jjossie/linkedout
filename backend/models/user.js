const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  bio: { type: String },
  imageUrl: { type: String },
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
