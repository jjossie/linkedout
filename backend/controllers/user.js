const {
        ConnectionModel,
        PrivateChatModel,
        PostModel,
        UserModel,
        PrivateChatMessageModel,
      } = require("../models/index.js");
const {flatten} = require('lodash');
const {Connection} = require("mongoose");
const {connectionsForUserId, connectionRequestsForUserId} = require("./connection");

// User Methods
const createUser = (user) => {
  return UserModel.create(user);
};

const updateUser = (userId, updates) => {
  return UserModel.findByIdAndUpdate(userId, updates);
};

const deleteUser = (userId) => {
  return UserModel.findByIdAndDelete(userId);
};

const userById = (userId) => {
  return UserModel.findById(userId);
};

const allUsers = () => {
  return UserModel.find();
};
// End User Methods


const allConnectionRequests = () => {
  return ConnectionModel.find().where("isAccepted", false);
};
// End Connection Request Methods

// Connection Methods
const createConnection = (connection) => {
  return ConnectionModel.create(connection);
};

const updateConnection = (connectionId, updates) => {
  return ConnectionModel.findByIdAndUpdate(connectionId, updates);
};

const deleteConnection = (connectionId) => {
  return ConnectionModel.findByIdAndDelete(connectionId);
};

const connectionById = (requestId) => {
  return ConnectionModel.findById(requestId);
};

const allConnections = () => {
  return ConnectionModel.find();
};
// End Connection Methods

// Post Methods
const createPost = (post, userId) => {
  const newPost = {
    ...post,
    userId,
    createdAt: Date.now().toString()
  }
  return PostModel.create(newPost);
};

const updatePost = (postId, updates) => {
  return PostModel.findByIdAndUpdate(postId, updates);
};

const deletePost = (postId) => {
  PostModel.findByIdAndDelete(postId);
};

const postById = (postId) => {
  return PostModel.findById(postId);
};

const allPosts = () => {
  return PostModel.find();
};
// End Post Methods

// Private Chat Methods
const createPrivateChat = (chat) => {
  return PrivateChatModel.create(chat);
};

const updatePrivateChat = (chatId, updates) => {
  return PrivateChatModel.findByIdAndUpdate(chatId, updates);
};

const deletePrivateChat = (chatId) => {
  PrivateChatModel.findByIdAndDelete(chatId);
};

const privateChatById = (chatId) => {
  return PrivateChatModel.findById(chatId);
};

const allPrivateChats = () => {
  return PrivateChatModel.find();
};
// End Private Chat Methods

// Private Chat Message Methods
const createPrivateChatMessage = (message) => {
  return PrivateChatMessageModel.create(message);
};

const updatePrivateChatMessage = (messageId, updates) => {
  return PrivateChatMessageModel.findByIdAndUpdate(messageId, updates);
};

const deletePrivateChatMessage = (messageId) => {
  PrivateChatMessageModel.findByIdAndDelete(messageId);
};

const privateChatMessageById = (messageId) => {
  return PrivateChatMessageModel.findById(messageId);
};

const allPrivateChatMessages = () => {
  return PrivateChatMessageModel.find();
};
// End Private Chat Message Methods



const privateChatsForUserId = (userId) => {
  return PrivateChatModel.find({userIds: userId}); // userId contained in list
};

const postsForUserId = (userId) => {
  return PostModel.find({userId: userId}).populate({
    path: 'userId',
    model: UserModel
  });
};


/*********************************
 * Feed
 *********************************/
const feedForUserId = async (userId) => {
  const connectionUsers = await connectionsForUserId(userId);
  const connectionUserIds = connectionUsers.map(cu => cu._id);
  const posts = await PostModel
    .find({
      'userId': {$in: [...connectionUserIds, userId]}
    })
    .populate({
      path: 'userId',
      model: UserModel
    })
    .sort({createdAt: "desc"})
    .limit(10);
  const connectionRequests = await connectionRequestsForUserId(userId);
  return {posts, connectionRequests};
};




module.exports = {
  privateChatsForUserId,
  postsForUserId,
  createUser,
  updateUser,
  deleteUser,
  userById,
  allUsers,
  allConnectionRequests,
  createConnection,
  updateConnection,
  deleteConnection,
  connectionById,
  allConnections,
  createPost,
  updatePost,
  deletePost,
  postById,
  allPosts,
  createPrivateChat,
  updatePrivateChat,
  deletePrivateChat,
  privateChatById,
  allPrivateChats,
  createPrivateChatMessage,
  updatePrivateChatMessage,
  deletePrivateChatMessage,
  privateChatMessageById,
  allPrivateChatMessages,
  feedForUserId,
};