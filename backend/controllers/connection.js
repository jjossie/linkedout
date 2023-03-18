const {ConnectionModel, UserModel} = require("../models");

const isAConnection = async (userId, otherUserId) => {
  const existingConnection = await ConnectionModel
    .find()
    .and([
      {userIds: userId},
      {userIds: otherUserId},
    ]);
  return (existingConnection?.length > 0);
};

const suggestedConnections = async (userId) => {
  const connections = await connectionsAndRequestsForUserId(userId);
  const uniqueConnectionIds = new Set(
    connections?.map?.(connection => {
      return connection.userIds.filter(id => id.toString() !== userId.toString())[0].toString();
    })
  );
  const excludeList = [userId, ...uniqueConnectionIds];
  return UserModel.find({_id: {$nin: excludeList}});
};


const requestConnection = async (userId, otherUserId) => {
  // Can't connect with self
  if (userId.toString() === otherUserId.toString())
    throw new Error("Cannot connect with yourself 🤡");

  // Do not allow duplicates
  if (await isAConnection(userId, otherUserId))
    return null;

  const newConnection = new ConnectionModel({
    senderId: userId,
    receiverId: otherUserId,
    isAccepted: false,
    userIds: [userId, otherUserId]
  });
  return await newConnection.save();
};

const connectionRequestsForUserId = async (userId) => {
  const connectionRequests = await ConnectionModel
    .find({
      receiverId: userId,
      isAccepted: false
    })
    .populate({
      path: "senderId",
      model: UserModel
    });

  return connectionRequests?.map?.(conn => {
    return {
      connectionId: conn._id,
      userId: conn.senderId._id.toString(),
      firstName: conn.senderId.firstName,
      lastName: conn.senderId.lastName,
    };
  });
};

const connectionsForUserId = (userId) => {
  return ConnectionModel.find({userIds: userId}).where("isAccepted", true); // userId contained in list
};

const connectionsAndRequestsForUserId = async (userId) => {
  return ConnectionModel.find({userIds: userId}); // userId contained in list
};

module.exports = {
  isAConnection,
  suggestedConnections,
  requestConnection,
  connectionsAndRequestsForUserId,
  connectionRequestsForUserId,
  connectionsForUserId,
};