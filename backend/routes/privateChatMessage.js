const {Router} = require("express");
const uc = require("../controllers/userController.js");
const routes = Router();



/****************************************
 * PrivateChatMessage Endpoints
 ****************************************/

routes.get("/:chatMessageId", (request, response) => {
  const chatMessageId = request.params.chatMessageId;
  const chatMessage = uc.privateChatMessageById(chatMessageId);
  if (chatMessage)
    return response.status(200).json(chatMessage);
  else
    return response.sendStatus(400);
});

routes.post("", (request, response) => {
  const chatMessageData = request.body;
  const newPrivateChatMessageResult = uc.createPrivateChatMessage(chatMessageData);
  if (newPrivateChatMessageResult)
    return response.status(201).json(newPrivateChatMessageResult);
  else
    return response.sendStatus(400);
});

routes.put("/:chatMessageId", (request, response) => {
  const chatMessageId = request.params.chatMessageId;
  const newPrivateChatMessageData = request.body;
  const updatedPrivateChatMessageResult = uc.updatePrivateChatMessage(chatMessageId, newPrivateChatMessageData);
  if (updatedPrivateChatMessageResult)
    return response.status(200).json(updatedPrivateChatMessageResult);
  else
    return response.sendStatus(400);
});

routes.delete("/:chatMessageId", (request, response) => {
  const chatMessageId = request.params.chatMessageId;
  uc.deletePrivateChatMessage(chatMessageId);
  return response.sendStatus(200);
});




module.exports = routes;
