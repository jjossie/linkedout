const {
  ConnectionModel,
  PrivateChatModel,
  PostModel,
  UserModel,
  PrivateChatMessageModel,
} = require("../models/index.js");
const {flatten} = require('lodash');

// User Methods
const createUser = (user) => {
  return UserModel.create(user);
}

const updateUser = (userId, updates) => {
  return UserModel.findByIdAndUpdate(userId, updates);
}

const deleteUser = (userId) => {
  return UserModel.findByIdAndDelete(userId);
}

const userById = (userId) => {
  return UserModel.findById(userId);
}

const allUsers = () => {
  return UserModel.find();
}
// End User Methods

// Connection Request Methods
// const createConnectionRequest = (request) => {
//   return ConnectionRequestModel.create(request);
// }
//
// const updateConnectionRequest = (requestId, updates) => {
//   return ConnectionRequestModel.findByIdAndUpdate(requestId, updates);
// }
//
// const deleteConnectionRequest = (requestId) => {
//   return ConnectionRequestModel.findByIdAndDelete(requestId);
// }
//
// const connectionRequestById = (requestId) => {
//   return ConnectionRequestModel.findById(requestId);
// }

const allConnectionRequests = () => {
  return ConnectionModel.find().where("isAccepted", false);
}
// End Connection Request Methods

// Connection Methods
const createConnection = (connection) => {
  return ConnectionModel.create(connection);
}

const updateConnection = (connectionId, updates) => {
  return ConnectionModel.findByIdAndUpdate(connectionId, updates);
}

const deleteConnection = (requestId) => {
  ConnectionModel.findByIdAndDelete(requestId);
}

const connectionById = (requestId) => {
  return ConnectionModel.findById(requestId);
}

const allConnections = () => {
  return ConnectionModel.find();
}
// End Connection Methods

// Post Methods
const createPost = (post) => {
  return PostModel.create(post);
}

const updatePost = (postId, updates) => {
  return PostModel.findByIdAndUpdate(postId, updates);
}

const deletePost = (postId) => {
  PostModel.findByIdAndDelete(postId);
}

const postById = (postId) => {
  return PostModel.findById(postId);
}

const allPosts = () => {
  return PostModel.find();
}
// End Post Methods

// Private Chat Methods
const createPrivateChat = (chat) => {
  return PrivateChatModel.create(chat);
}

const updatePrivateChat = (chatId, updates) => {
  return PrivateChatModel.findByIdAndUpdate(chatId, updates);
}

const deletePrivateChat = (chatId) => {
  PrivateChatModel.findByIdAndDelete(chatId);
}

const privateChatById = (chatId) => {
  return PrivateChatModel.findById(chatId);
}

const allPrivateChats = () => {
  return PrivateChatModel.find();
}
// End Private Chat Methods

// Private Chat Message Methods
const createPrivateChatMessage = (message) => {
  return PrivateChatMessageModel.create(message);
}

const updatePrivateChatMessage = (messageId, updates) => {
  return PrivateChatMessageModel.findByIdAndUpdate(messageId, updates);
}

const deletePrivateChatMessage = (messageId) => {
  PrivateChatMessageModel.findByIdAndDelete(messageId);
}

const privateChatMessageById = (messageId) => {
  return PrivateChatMessageModel.findById(messageId);
}

const allPrivateChatMessages = () => {
  return PrivateChatMessageModel.find();
}
// End Private Chat Message Methods


/*********************************
 * "Complex" Operations
 *********************************/
// const connectionRequestsForUserId = (userId) => {
//   return ConnectionRequestModel.find({receiverId: userId});
// };

const connectionsForUserId = (userId) => {
  return ConnectionModel.find({userIds: userId}).where("isAccepted", true); // userId contained in list
};

const connectionsAndRequestsForUserId = (userId) => {
  return ConnectionModel.find({userIds: userId}); // userId contained in list
};


const privateChatsForUserId = (userId) => {
  return PrivateChatModel.find({userIds: userId}); // userId contained in list
};

const postsForUserId = (userId) => {
  return PostModel.find({userId: userId}).populate({
    path: 'userId',
    model: UserModel
  });
};


const feedForUserId = async (userId) => {
  const connections = await connectionsForUserId(userId);
  const friendIds = connections.map(connection => {
    return connection.userIds.filter(id => (id !== userId))[0].toString();
  });

  const posts = await PostModel
    .find({
      'userId': {$in: friendIds}
    })
    .populate({
      path: 'userId',
      model: UserModel
    })
    .sort({createdAt: "desc"})
    .limit(10);

  const connectionRequests = await allConnectionRequests()
    .populate({
      path: 'receiverId',
      model: UserModel
    })
    .find({
      'receiverId': userId
    });
  console.log('\n\n\nconnectionRequests: \n')
  console.log(connectionRequests);

  return {posts, connectionRequests}
};

const isAConnection = async (userIdOne, userIdTwo) => {
  return !!(await ConnectionModel.find({userIds: {$all: [userIdOne, userIdTwo]}}));
}

const suggestedConnections = async (userId) => {
  const connections = await connectionsAndRequestsForUserId(userId);
  const uniqueConnectionIds = connections.map(connection => connection.userIds.filter(id => id !== userId)[0].toString());
  console.log(`Unique Connection IDs: ${uniqueConnectionIds}`);

  const users = await UserModel.find({_id: {$nin: [userId, ...uniqueConnectionIds]}});
  console.log(`Suggested Connections: ${users}`);
  return users;
}


module.exports = {
  // connectionRequestsForUserId,
  connectionsForUserId,
  privateChatsForUserId,
  postsForUserId,
  createUser,
  updateUser,
  deleteUser,
  userById,
  allUsers,
  // createConnectionRequest,
  // updateConnectionRequest,
  // deleteConnectionRequest,
  // connectionRequestById,
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
  isAConnection,
  suggestedConnections
};