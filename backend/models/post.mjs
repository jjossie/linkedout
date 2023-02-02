import mongoose from "mongoose";
const Schema = mongoose.Schema;


const PostSchema = new Schema({
  userId: {type: String, required: true},
  createdAt: {type: String, required: true},
  content: {type: String, required: true, index: true}
});

const PostModel = mongoose.model("post", PostSchema);

export default PostModel;