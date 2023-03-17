const {Router} = require("express");
const uc = require("../controllers/user.js");
const routes = Router();


/****************************************
 * PrivateChat Endpoints
 ****************************************/

routes.get("/:chatId", (request, response) => {
  const chatId = request.params.chatId;
  const chat = uc.privateChatById(chatId);
  if (chat)
    return response.status(200).json(chat);
  else
    return response.sendStatus(400);
});

routes.post("", (request, response) => {
  const chatData = request.body;
  const newPrivateChatResult = uc.createPrivateChat(chatData);
  if (newPrivateChatResult)
    return response.status(201).json(newPrivateChatResult);
  else
    return response.sendStatus(400);
});

routes.put("/:chatId", (request, response) => {
  const chatId = request.params.chatId;
  const newPrivateChatData = request.body;
  const updatedPrivateChatResult = uc.updatePrivateChat(chatId, newPrivateChatData);
  if (updatedPrivateChatResult)
    return response.status(200).json(updatedPrivateChatResult);
  else
    return response.sendStatus(400);
});

routes.delete("/:chatId", (request, response) => {
  const chatId = request.params.chatId;
  uc.deletePrivateChat(chatId);
  return response.sendStatus(200);
});

/****************************************
 * One More: Get all messages in a chat
 ****************************************/
routes.get(":chatId/messages", (res, req) => {
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

module.exports = routes;
