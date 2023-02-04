const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const PrivateChatMessageSchema = new Schema({
  chatId: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true, index: true}
});

const PrivateChatMessageModel = mongoose.model("privateChatMessage", PrivateChatMessageSchema);

module.exports =  PrivateChatMessageModel;