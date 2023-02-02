import mongoose from "mongoose";
const Schema = mongoose.Schema;


const ConnectionSchema = new Schema({
  userIds: {type: [String], required: true, index: true}
});

const ConnectionModel = mongoose.model("connection", ConnectionSchema);

export default ConnectionModel;