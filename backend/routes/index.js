const {Router} = require("express");
const uc = require("../controllers/userController.js");
const routes = Router();

/****************************************
 * User Endpoints
 ****************************************/
routes.get("/user/:userId", async (request, response) => {
  const userId = request.params.userId;
  try {
    const user = await uc.userById(userId);
    return response.status(200).json(user);
  } catch (e) {
    return response.sendStatus(400);
  }
});

routes.post("/user", (request, response) => {
  const newUserData = request.body;
  const newUserResult = uc.createUser(newUserData);
  if (newUserResult)
    return response.status(201).json(newUserResult);
  else
    return response.sendStatus(400);
});

routes.put("/user/:userId", (request, response) => {
  const userId = request.params.userId;
  const newUserData = request.body;
  const updatedUserResult = uc.updateUser(userId, newUserData);
  if (updatedUserResult)
    return response.status(200).json(updatedUserResult);
  else
    return response.sendStatus(400);
});

routes.delete("/user/:userId", (request, response) => {
  const userId = request.params.userId;
  uc.deleteUser(userId);
  return response.sendStatus(200);
});


/****************************************
 * ConnectionRequest Endpoints
 ****************************************/

routes.get("/connectionRequest/:connectionRequestId", (request, response) => {
  const connectionRequestId = request.params.connectionRequestId;
  const connectionRequest = uc.connectionRequestById(connectionRequestId);
  if (connectionRequest)
    return response.status(200).json(connectionRequest);
  else
    return response.sendStatus(400);
});

routes.post("/connectionRequest", (request, response) => {
  const connectionRequestData = request.body;
  const newConnectionRequestResult = uc.createConnectionRequest(connectionRequestData);
  if (newConnectionRequestResult)
    return response.status(201).json(newConnectionRequestResult);
  else
    return response.sendStatus(400);
});

routes.put("/connectionRequest/:connectionRequestId", (request, response) => {
  const connectionRequestId = request.params.connectionRequestId;
  const newConnectionRequestData = request.body;
  const updatedConnectionRequestResult = uc.updateConnectionRequest(connectionRequestId, newConnectionRequestData);
  if (updatedConnectionRequestResult)
    return response.status(200).json(updatedConnectionRequestResult);
  else
    return response.sendStatus(400);
});

routes.delete("/connectionRequest/:connectionRequestId", (request, response) => {
  const connectionRequestId = request.params.connectionRequestId;
  uc.deleteConnectionRequest(connectionRequestId);
  return response.sendStatus(200);
});


/****************************************
 * Connection Endpoints
 ****************************************/

routes.get("/connection/:connectionId", (request, response) => {
  const connectionId = request.params.connectionId;
  const connection = uc.connectionById(connectionId);
  if (connection)
    return response.status(200).json(connection);
  else
    return response.sendStatus(400);
});

routes.post("/connection", (request, response) => {
  const connectionData = request.body;
  const newConnectionResult = uc.createConnection(connectionData);
  if (newConnectionResult)
    return response.status(201).json(newConnectionResult);
  else
    return response.sendStatus(400);
});

routes.put("/connection/:connectionId", (request, response) => {
  const connectionId = request.params.connectionId;
  const newConnectionData = request.body;
  const updatedConnectionResult = uc.updateConnection(connectionId, newConnectionData);
  if (updatedConnectionResult)
    return response.status(200).json(updatedConnectionResult);
  else
    return response.sendStatus(400);
});

routes.delete("/connection/:connectionId", (request, response) => {
  const connectionId = request.params.connectionId;
  uc.deleteConnection(connectionId);
  return response.sendStatus(200);
});


/****************************************
 * Post Endpoints
 ****************************************/

routes.get("/post/:postId", (request, response) => {
  const postId = request.params.postId;
  const post = uc.postById(postId);
  if (post)
    return response.status(200).json(post);
  else
    return response.sendStatus(400);
});

routes.post("/post", (request, response) => {
  const postData = request.body;
  const newPostResult = uc.createPost(postData);
  if (newPostResult)
    return response.status(201).json(newPostResult);
  else
    return response.sendStatus(400);
});

routes.put("/post/:postId", (request, response) => {
  const postId = request.params.postId;
  const newPostData = request.body;
  const updatedPostResult = uc.updatePost(postId, newPostData);
  if (updatedPostResult)
    return response.status(200).json(updatedPostResult);
  else
    return response.sendStatus(400);
});

routes.delete("/post/:postId", (request, response) => {
  const postId = request.params.postId;
  uc.deletePost(postId);
  return response.sendStatus(200);
});

/****************************************
 * PrivateChat Endpoints
 ****************************************/

routes.get("/chat/:chatId", (request, response) => {
  const chatId = request.params.chatId;
  const chat = uc.privateChatById(chatId);
  if (chat)
    return response.status(200).json(chat);
  else
    return response.sendStatus(400);
});

routes.post("/chat", (request, response) => {
  const chatData = request.body;
  const newPrivateChatResult = uc.createPrivateChat(chatData);
  if (newPrivateChatResult)
    return response.status(201).json(newPrivateChatResult);
  else
    return response.sendStatus(400);
});

routes.put("/chat/:chatId", (request, response) => {
  const chatId = request.params.chatId;
  const newPrivateChatData = request.body;
  const updatedPrivateChatResult = uc.updatePrivateChat(chatId, newPrivateChatData);
  if (updatedPrivateChatResult)
    return response.status(200).json(updatedPrivateChatResult);
  else
    return response.sendStatus(400);
});

routes.delete("/chat/:chatId", (request, response) => {
  const chatId = request.params.chatId;
  uc.deletePrivateChat(chatId);
  return response.sendStatus(200);
});


/****************************************
 * PrivateChatMessage Endpoints
 ****************************************/

routes.get("/chatMessage/:chatMessageId", (request, response) => {
  const chatMessageId = request.params.chatMessageId;
  const chatMessage = uc.privateChatMessageById(chatMessageId);
  if (chatMessage)
    return response.status(200).json(chatMessage);
  else
    return response.sendStatus(400);
});

routes.post("/chatMessage", (request, response) => {
  const chatMessageData = request.body;
  const newPrivateChatMessageResult = uc.createPrivateChatMessage(chatMessageData);
  if (newPrivateChatMessageResult)
    return response.status(201).json(newPrivateChatMessageResult);
  else
    return response.sendStatus(400);
});

routes.put("/chatMessage/:chatMessageId", (request, response) => {
  const chatMessageId = request.params.chatMessageId;
  const newPrivateChatMessageData = request.body;
  const updatedPrivateChatMessageResult = uc.updatePrivateChatMessage(chatMessageId, newPrivateChatMessageData);
  if (updatedPrivateChatMessageResult)
    return response.status(200).json(updatedPrivateChatMessageResult);
  else
    return response.sendStatus(400);
});

routes.delete("/chatMessage/:chatMessageId", (request, response) => {
  const chatMessageId = request.params.chatMessageId;
  uc.deletePrivateChatMessage(chatMessageId);
  return response.sendStatus(200);
});


/****************************************
 * Additional GET Endpoints
 ****************************************/
routes.get("/user/:userId/connectionRequests", async (req, res) => {
  const userId = req.params.userId;
  // const connectionRequests = uc
  //     .allConnectionRequests()
  //     .filter( connReq => {
  //         return (connReq.receiverId === userId);
  //     });
  const connectionRequests = await uc.connectionRequestsForUserId(userId);
  res.status(200).json(connectionRequests ?? {});
});

routes.get("/user/:userId/connections", async (req, res) => {
  const userId = req.params.userId;
  // const connections = uc
  //     .allConnections()
  //     .filter( conn => {
  //         return (conn.includes(userId));
  //     });
  const connections = await uc.connectionsForUserId(userId);
  if (connections)
    res.status(200).json(connections);
  else
    res.status(404);
});

routes.get("/user/:userId/chats", (req, res) => {
  const userId = req.params.userId;
  const chats = uc
    .allPrivateChats()
    .filter(chat => {
      return (chat.includes(userId));
    });
  if (chats)
    res.status(200).json(chats);
  else
    res.status(404);
});

routes.get("/user/:userId/posts", async (req, res) => {
  const userId = req.params.userId;
  const posts = await uc.postsForUserId(userId);
  if (posts)
    res.status(200).json(posts);
  else
    res.status(404);
});


/****************************************
 * One More: Get all messages in a chat
 ****************************************/
routes.get("/chat/:chatId/messages", (res, req) => {
  const chatId = res.params.chatId;
  const chatMessages = uc
    .allPrivateChatMessages()
    .filter(message => {
      return (message.chatId === chatId);
    });
  if (chatMessages)
    res.status(200).json(chatMessages);
  else
    res.status(404);
});


/****************************************
 * Feed and Other extras from Topic 5
 ****************************************/

routes.get("/user/:userId/feed", async (req, res) => {
  const userId = req.params.userId;
  try {
    const feed = await uc.feedForUserId(userId);
    return res.status(200).json(feed);
  } catch (e) {
    return res.status(400).json(e);
  }
});


module.exports = routes;
