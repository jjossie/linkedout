const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const PostSchema = new Schema({
  userId: {type: String, required: true},
  createdAt: {type: Date, required: true},
  content: {type: String, required: true, index: true}
});

const PostModel = mongoose.model("post", PostSchema);

module.exports =  PostModel;