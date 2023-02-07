const {
  ConnectionRequestModel,
  ConnectionModel,
  PrivateChatModel,
  PostModel,
  UserModel,
  PrivateChatMessageModel,
} = require("../models/index.js");


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
const createConnectionRequest = (request) => {
  return ConnectionRequestModel.create(request);
}

const updateConnectionRequest = (requestId, updates) => {
  return ConnectionRequestModel.findByIdAndUpdate(requestId, updates);
}

const deleteConnectionRequest = (requestId) => {
  return ConnectionRequestModel.findByIdAndDelete(requestId);
}

const connectionRequestById = (requestId) => {
  return ConnectionRequestModel.findById(requestId);
}

const allConnectionRequests = () => {
  return ConnectionRequestModel.find();
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


const feedForUserId = async (userId) => {
  const friends = await connectionsForUserId(userId);
  const friendIds = friends.map(connection => {
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

  const connectionRequests = await ConnectionRequestModel.find()
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


module.exports = {
  connectionRequestsForUserId,
  connectionsForUserId,
  privateChatsForUserId,
  postsForUserId,
  createUser,
  updateUser,
  deleteUser,
  userById,
  allUsers,
  createConnectionRequest,
  updateConnectionRequest,
  deleteConnectionRequest,
  connectionRequestById,
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