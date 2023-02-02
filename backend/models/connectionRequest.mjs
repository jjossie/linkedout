import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ConnectionRequestSchema = new Schema({
  senderId: {type: String, required: true},
  receiverId: {type: String, required: true},
});

const ConnectionRequestModel = mongoose.model("connectionRequest", ConnectionRequestSchema);

export default ConnectionRequestModel;