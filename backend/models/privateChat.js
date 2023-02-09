const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const PrivateChatSchema = new Schema({
  userIds: {type: [String], required: true, index: true}
});

const PrivateChatModel = mongoose.model("privateChat", PrivateChatSchema);

module.exports =  PrivateChatModel;