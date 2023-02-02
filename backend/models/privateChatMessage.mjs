import mongoose from "mongoose";
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  chatId: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true, index: true}
});

const UserModel = mongoose.model("user", UserSchema);

export default UserModel;