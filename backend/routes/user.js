const {Router} = require("express");
const uc = require("../controllers/userController.js");
const routes = Router();

/****************************************
 * User Endpoints
 ****************************************/

routes.get("/:userId", async (request, response) => {
  const userId = request.params.userId;
  try {
    const user = await uc.userById(userId);
    return response.status(200).json(user);
  } catch (e) {
    return response.sendStatus(400);
  }
});

routes.post("", (request, response) => {
  const newUserData = request.body;
  const newUserResult = uc.createUser(newUserData);
  if (newUserResult)
    return response.status(201).json(newUserResult);
  else
    return response.sendStatus(400);
});

routes.put("/:userId", (request, response) => {
  const userId = request.params.userId;
  const newUserData = request.body;
  const updatedUserResult = uc.updateUser(userId, newUserData);
  if (updatedUserResult)
    return response.status(200).json(updatedUserResult);
  else
    return response.sendStatus(400);
});

routes.delete("/:userId", (request, response) => {
  const userId = request.params.userId;
  uc.deleteUser(userId);
  return response.sendStatus(200);
});


/****************************************
 * Feed and other extras from Topic 5
 ****************************************/

routes.get("/:userId/feed", async (req, res) => {
  const userId = req.params.userId;
  try {
    const feed = await uc.feedForUserId(userId);
    return res.status(200).json(feed);
  } catch (e) {
    return res.status(400).json(e);
  }
});

/****************************************
 * Additional GET Endpoints
 ****************************************/
routes.get("/:userId/connectionRequests", async (req, res) => {
  const userId = req.params.userId;
  const connectionRequests = await uc.connectionRequestsForUserId(userId);
  res.status(200).json(connectionRequests ?? {});
});

routes.get("/:userId/connections", async (req, res) => {
  const userId = req.params.userId;
  const connections = await uc.connectionsForUserId(userId);
  if (connections)
    res.status(200).json(connections);
  else
    res.status(404);
});

routes.get("/:userId/chats", (req, res) => {
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

routes.get("/:userId/posts", async (req, res) => {
  const userId = req.params.userId;
  const posts = await uc.postsForUserId(userId);
  if (posts)
    res.status(200).json(posts);
  else
    res.status(404);
});







module.exports = routes;