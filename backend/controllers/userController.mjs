import ConnectionRequestModel from "../models/connectionRequest.mjs";
import ConnectionModel from "../models/connection.mjs";
import PrivateChatModel from "../models/privateChat.mjs";
import PostModel from "../models/post.mjs";

const connectionRequestsForUserId = (userId) => {
  return ConnectionRequestModel.find({receiverId: userId});
};

const connectionsForUserId = (userId) => {
  return ConnectionModel.find({userIds: userId}); // userId contained in list
};


const privateChatsForUserId = (userId) => {
  return PrivateChatModel.find({userIds: userId}); // userId contained in list
};

const postsForUserId = (userId) => {
  return PostModel.find({userId: userId});
};

export default {
  connectionRequestsForUserId,
  connectionsForUserId,
  privateChatsForUserId,
  postsForUserId,
};