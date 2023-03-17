const {Router} = require("express");
const {
        userById,
        createUser,
        updateUser,
        deleteUser,
        feedForUserId,
        postsForUserId,
        allPrivateChats,
        allUsers,
      } = require("../controllers/user");
const {
        connectionsForUserId,
        connectionRequestsForUserId,
        isAConnection,
        suggestedConnections,
        requestConnection,
      } = require("../controllers/connection")
const mongoose = require("mongoose");
const {UserModel} = require("../models");
const {requiresAuth} = require("../middleware/auth");
const routes = Router();

/****************************************
 * Feed, Connections, & ConnectionRequests
 * for the currently logged-in user
 ****************************************/

routes.get("/feed", requiresAuth, async (req, res) => {
  try {
    const feed = await feedForUserId(req.user.userId);
    return res.status(200).json(feed);
  } catch (e) {
    return res.status(400).json({message: "Could not get feed", error: e.message});
  }
});


routes.get("/connectionRequests", requiresAuth, async (req, res) => {
  try {
    const connectionRequests = await connectionRequestsForUserId(req.user._id);
    console.log(connectionRequests);
    res.status(200).json(connectionRequests ?? {});
  } catch (e) {
    return res.status(400).json({message: "Could not get connection requests", error: e.message});
  }
});

routes.post("/requestConnection", requiresAuth, async (req, res) => {
  try {
    const {userId} = req.body;
    if (!userId)
      return res.status(400).json({message: "userId not included in request body"});
    console.log(`Requesting Connection between logged in user ${req.user?._id} and ${userId}`)
    const result = await requestConnection(req.user?._id, userId);
    if (!result)
      return res.status(409).json({message: "Connection request already exists"});

    return res.status(201).json({message: "Request created", result});

  } catch (e) {
    return res.status(400).json({
      message: "Could not request connection",
      error: e.message,
    });
  }

});

routes.get("/connections", requiresAuth, async (req, res) => {
  try {
    const connectionRequests = await connectionsForUserId(req.user.userId);
    res.status(200).json(connectionRequests ?? {});
  } catch (e) {
    return res.status(400).json({message: "Could not get connection requests", error: e.message});
  }
});

routes.get("/suggestedConnections", requiresAuth, async (req, res) => {
  try {
    const users = await suggestedConnections(req.user._id);
    return res.json(users);
  } catch (e) {
    return res.status(400).json({message: "Could not get suggested users", error: e.message});
  }
})


/****************************************
 * Connections, Posts, & Chats for a
 * particular user
 ****************************************/

routes.get("/:userId/connections", requiresAuth, async (req, res) => {
  try {
    const userId = req.params.userId;

    if (!await isAConnection(req.user._id, userId))
      return res.status(403).json({message: "This user is not a connection of the logged in user"});

    const connections = await connectionsForUserId(userId);
    if (!connections)
      return res.status(404).json({message: "No connections found"});

    else
      return res.status(200).json(connections);
  } catch (e) {
    return res.status(400).json({message: "Failed to get Connections for user", error: e.message});
  }
});

routes.get("/:userId/posts", requiresAuth, async (req, res) => {
  try {
    const userId = req.params.userId;

    if (!await isAConnection(req.user.userId, userId))
      return res.status(403).json({message: "This user is not a connection of the logged in user"});

    const posts = await postsForUserId(userId);
    if (!posts)
      return res.status(404).json({message: "No posts found"});

    else
      return res.status(200).json(posts);
  } catch (e) {
    return res.status(400).json({message: "Failed to get Connections for user", error: e.message});
  }
});

routes.get("/:userId/chats", requiresAuth, (req, res) => {
  const userId = req.params.userId;
  const chats = allPrivateChats()
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

routes.get('/', async (req, res) => {
  if (req.user)
    return res.status(200).json(req.user);
  else
    return res.status(400).json({
      message: "No user object found, probably not logged in"
    });
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
  const newUserData = request.body;
  const newUserResult = createUser(newUserData);
  if (newUserResult)
    return response.status(201).json(newUserResult);
  else
    return response.sendStatus(400);
});

routes.put("/:userId", (request, response) => {
  const userId = request.params.userId;
  const newUserData = request.body;
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