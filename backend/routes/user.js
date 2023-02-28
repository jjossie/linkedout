const {Router}    = require("express");
// const uc = require("../controllers/userController.js");
const {
        userById,
        createUser,
        updateUser,
        deleteUser,
        feedForUserId,
        connectionRequestsForUserId,
        connectionsForUserId,
        postsForUserId,
        allPrivateChats, isAConnection,
      }           = require("../controllers/userController");
const mongoose    = require("mongoose");
const {UserModel} = require("../models");
const routes      = Router();

/****************************************
 * Feed, Connections, & ConnectionRequests
 * for the currently logged-in user
 ****************************************/

routes.get("/feed", async (req, res) => {
  if (!req.user)
    return res.status(403).json({message: "Must be logged in."})

  try {
    const feed = await feedForUserId(req.user.userId);
    return res.status(200).json(feed);
  } catch (e) {
    return res.status(400).json({message: "Could not get feed", error: e});
  }
});


routes.get("/connectionRequests", async (req, res) => {
  if (!req.user)
    return res.status(403).json({message: "Must be logged in."})

  try {
    const connectionRequests = await connectionRequestsForUserId(req.user.userId);
    res.status(200).json(connectionRequests ?? {});
  } catch (e) {
    return res.status(400).json({message: "Could not get connection requests", error: e});
  }
});

routes.get("/connections", async (req, res) => {
  if (!req.user)
    return res.status(403).json({message: "Must be logged in."})

  try {
    const connectionRequests = await connectionsForUserId(req.user.userId);
    res.status(200).json(connectionRequests ?? {});
  } catch (e) {
    return res.status(400).json({message: "Could not get connection requests", error: e});
  }
});


/****************************************
 * Connections, Posts, & Chats for a
 * particular user
 ****************************************/

routes.get("/:userId/connections", async (req, res) => {
  try {
    const userId = req.params.userId;
    if (!req.user)
      return res.status(403).json({message: "Must be logged in to view connections for this user"});

    if (!await isAConnection(req.user.userId, userId))
      return res.status(403).json({message: "This user is not a connection of the logged in user"});

    const connections = await connectionsForUserId(userId);
    if (!connections)
      return res.status(404).json({message: "No connections found"});

    else
      return res.status(200).json(connections);
  } catch (e) {
    return res.status(400).json({message: "Failed to get Connections for user", error: e});
  }
});

routes.get("/:userId/posts", async (req, res) => {
  try {
    const userId = req.params.userId;
    if (!req.user)
      return res.status(403).json({message: "Must be logged in to view posts for this user"});

    if (!await isAConnection(req.user.userId, userId))
      return res.status(403).json({message: "This user is not a connection of the logged in user"});

    const posts = await postsForUserId(userId);
    if (!posts)
      return res.status(404).json({message: "No posts found"});

    else
      return res.status(200).json(posts);
  } catch (e) {
    return res.status(400).json({message: "Failed to get Connections for user", error: e});
  }
});

routes.get("/:userId/chats", (req, res) => {
  const userId = req.params.userId;
  const chats  = allPrivateChats()
    .filter(chat => {
      return (chat.includes(userId));
    });
  if (chats)
    res.status(200).json(chats);
  else
    res.status(404);
});



/****************************************
 * User Endpoints
 ****************************************/

routes.get("/", async (req, res) => {
  try {
    const users = await UserModel.find();
    return res.status(200).json({users});
  } catch (e) {
    return res.status(400).json({message: "ok"});
  }
})

routes.get("/:userId", async (request, response) => {
  const userId = request.params.userId;
  try {
    const user = await userById(userId);
    return response.status(200).json(user);
  } catch (e) {
    return response.sendStatus(400);
  }
});

routes.post("/", (request, response) => {
  const newUserData   = request.body;
  const newUserResult = createUser(newUserData);
  if (newUserResult)
    return response.status(201).json(newUserResult);
  else
    return response.sendStatus(400);
});

routes.put("/:userId", (request, response) => {
  const userId            = request.params.userId;
  const newUserData       = request.body;
  const updatedUserResult = updateUser(userId, newUserData);
  if (updatedUserResult)
    return response.status(200).json(updatedUserResult);
  else
    return response.sendStatus(400);
});

routes.delete("/:userId", (request, response) => {
  const userId = request.params.userId;
  deleteUser(userId);
  return response.sendStatus(200);
});




module.exports = routes;