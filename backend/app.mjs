import express from "express";
import Database from "./database.mjs";

const app = express();
const db = new Database();
const port = 3430;

app.use(express.json());


/****************************************
 * User Endpoints
 ****************************************/
app.get("/user/:userId", (request, response) => {
    const userId = request.params.userId;
    const user = db.userById(userId);
    if (user)
        return response.status(200).json(user);
    else
        return response.sendStatus(400);
});

app.post("/user", (request, response) => {
    const newUserData = request.body;
    const newUserResult =  db.createUser(newUserData);
    if (newUserResult)
        return response.status(201).json(newUserResult);
    else
        return response.sendStatus(400);
});

app.put("/user/:userId", (request, response) => {
    const userId = request.params.userId;
    const newUserData = request.body;
    const updatedUserResult = db.updateUser(userId, newUserData);
    if (updatedUserResult)
        return response.status(200).json(updatedUserResult);
    else
        return response.sendStatus(400);
});

app.delete("/user/:userId", (request, response) => {
    const userId = request.params.userId;
    db.deleteUser(userId);
    return response.sendStatus(200);
});



/****************************************
 * ConnectionRequest Endpoints
 ****************************************/

app.get("/connectionRequest/:connectionRequestId", (request, response) => {
    const connectionRequestId = request.params.connectionRequestId;
    const connectionRequest = db.connectionRequestById(connectionRequestId);
    if (connectionRequest)
        return response.status(200).json(connectionRequest);
    else
        return response.sendStatus(400);
});

app.post("/connectionRequest", (request, response) => {
    const connectionRequestData = request.body;
    const newConnectionRequestResult =  db.createConnectionRequest(connectionRequestData);
    if (newConnectionRequestResult)
        return response.status(201).json(newConnectionRequestResult);
    else
        return response.sendStatus(400);
});

app.put("/connectionRequest/:connectionRequestId", (request, response) => {
    const connectionRequestId = request.params.connectionRequestId;
    const newConnectionRequestData = request.body;
    const updatedConnectionRequestResult = db.updateConnectionRequest(connectionRequestId, newConnectionRequestData);
    if (updatedConnectionRequestResult)
        return response.status(200).json(updatedConnectionRequestResult);
    else
        return response.sendStatus(400);
});

app.delete("/connectionRequest/:connectionRequestId", (request, response) => {
    const connectionRequestId = request.params.connectionRequestId;
    db.deleteConnectionRequest(connectionRequestId);
    return response.sendStatus(200);
});




/****************************************
 * Connection Endpoints
 ****************************************/

app.get("/connection/:connectionId", (request, response) => {
    const connectionId = request.params.connectionId;
    const connection = db.connectionById(connectionId);
    if (connection)
        return response.status(200).json(connection);
    else
        return response.sendStatus(400);
});

app.post("/connection", (request, response) => {
    const connectionData = request.body;
    const newConnectionResult =  db.createConnection(connectionData);
    if (newConnectionResult)
        return response.status(201).json(newConnectionResult);
    else
        return response.sendStatus(400);
});

app.put("/connection/:connectionId", (request, response) => {
    const connectionId = request.params.connectionId;
    const newConnectionData = request.body;
    const updatedConnectionResult = db.updateConnection(connectionId, newConnectionData);
    if (updatedConnectionResult)
        return response.status(200).json(updatedConnectionResult);
    else
        return response.sendStatus(400);
});

app.delete("/connection/:connectionId", (request, response) => {
    const connectionId = request.params.connectionId;
    db.deleteConnection(connectionId);
    return response.sendStatus(200);
});


/****************************************
 * Post Endpoints
 ****************************************/

app.get("/post/:postId", (request, response) => {
    const postId = request.params.postId;
    const post = db.postById(postId);
    if (post)
        return response.status(200).json(post);
    else
        return response.sendStatus(400);
});

app.post("/post", (request, response) => {
    const postData = request.body;
    const newPostResult =  db.createPost(postData);
    if (newPostResult)
        return response.status(201).json(newPostResult);
    else
        return response.sendStatus(400);
});

app.put("/post/:postId", (request, response) => {
    const postId = request.params.postId;
    const newPostData = request.body;
    const updatedPostResult = db.updatePost(postId, newPostData);
    if (updatedPostResult)
        return response.status(200).json(updatedPostResult);
    else
        return response.sendStatus(400);
});

app.delete("/post/:postId", (request, response) => {
    const postId = request.params.postId;
    db.deletePost(postId);
    return response.sendStatus(200);
});

/****************************************
 * PrivateChat Endpoints
 ****************************************/

app.get("/chat/:chatId", (request, response) => {
    const chatId = request.params.chatId;
    const chat = db.privateChatById(chatId);
    if (chat)
        return response.status(200).json(chat);
    else
        return response.sendStatus(400);
});

app.post("/chat", (request, response) => {
    const chatData = request.body;
    const newPrivateChatResult =  db.createPrivateChat(chatData);
    if (newPrivateChatResult)
        return response.status(201).json(newPrivateChatResult);
    else
        return response.sendStatus(400);
});

app.put("/chat/:chatId", (request, response) => {
    const chatId = request.params.chatId;
    const newPrivateChatData = request.body;
    const updatedPrivateChatResult = db.updatePrivateChat(chatId, newPrivateChatData);
    if (updatedPrivateChatResult)
        return response.status(200).json(updatedPrivateChatResult);
    else
        return response.sendStatus(400);
});

app.delete("/chat/:chatId", (request, response) => {
    const chatId = request.params.chatId;
    db.deletePrivateChat(chatId);
    return response.sendStatus(200);
});



/****************************************
 * PrivateChatMessage Endpoints
 ****************************************/

app.get("/chatMessage/:chatMessageId", (request, response) => {
    const chatMessageId = request.params.chatMessageId;
    const chatMessage = db.privateChatMessageById(chatMessageId);
    if (chatMessage)
        return response.status(200).json(chatMessage);
    else
        return response.sendStatus(400);
});

app.post("/chatMessage", (request, response) => {
    const chatMessageData = request.body;
    const newPrivateChatMessageResult =  db.createPrivateChatMessage(chatMessageData);
    if (newPrivateChatMessageResult)
        return response.status(201).json(newPrivateChatMessageResult);
    else
        return response.sendStatus(400);
});

app.put("/chatMessage/:chatMessageId", (request, response) => {
    const chatMessageId = request.params.chatMessageId;
    const newPrivateChatMessageData = request.body;
    const updatedPrivateChatMessageResult = db.updatePrivateChatMessage(chatMessageId, newPrivateChatMessageData);
    if (updatedPrivateChatMessageResult)
        return response.status(200).json(updatedPrivateChatMessageResult);
    else
        return response.sendStatus(400);
});

app.delete("/chatMessage/:chatMessageId", (request, response) => {
    const chatMessageId = request.params.chatMessageId;
    db.deletePrivateChatMessage(chatMessageId);
    return response.sendStatus(200);
});


/****************************************
 * Listener
 ****************************************/
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})