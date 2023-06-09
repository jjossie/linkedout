const {Router} = require("express");
const uc = require("../controllers/user.js");
const {requiresAuth} = require("../middleware/auth");
const routes = Router();

/****************************************
 * Post Endpoints
 ****************************************/

routes.get("/:postId", (request, response) => {
  const postId = request.params.postId;
  const post = uc.postById(postId);
  if (post)
    return response.status(200).json(post);
  else
    return response.sendStatus(400);
});

routes.post("", requiresAuth, async (request, response) => {
  const postData = request.body;
  const newPostResult = await uc.createPost(postData, request.user._id);
  if (newPostResult)
    return response.status(201).json(newPostResult);
  else
    return response.sendStatus(400);
});

routes.put("/:postId", (request, response) => {
  const postId = request.params.postId;
  const newPostData = request.body;
  const updatedPostResult = uc.updatePost(postId, newPostData);
  if (updatedPostResult)
    return response.status(200).json(updatedPostResult);
  else
    return response.sendStatus(400);
});

routes.delete("/:postId", (request, response) => {
  const postId = request.params.postId;
  uc.deletePost(postId);
  return response.sendStatus(200);
});

module.exports = routes;
