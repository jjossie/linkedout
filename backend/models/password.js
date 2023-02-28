const mongoose = require("mongoose");
const {Schema, ObjectId, model} = mongoose;

const PasswordSchema = new Schema({
  userId: {type: ObjectId, required: true, index: true},
  hash: {type: String, required: true}
});

const PasswordModel = model("password", PasswordSchema);

module.exports = PasswordModel;