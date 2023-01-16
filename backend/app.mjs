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
    return response.status(201).json(newUserResult);
});

app.put("/user/:userId", (request, response) => {
    const userId = request.params.userId;
    const newUserData = request.body;
    const updatedUserResult = db.updateUser(userId, newUserData);
    return response.status(200).json(updatedUserResult);
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
    return response.status(201).json(newConnectionRequestResult);
});

app.put("/connectionRequest/:connectionRequestId", (request, response) => {
    const connectionRequestId = request.params.connectionRequestId;
    const newConnectionRequestData = request.body;
    const updatedConnectionRequestResult = db.updateConnectionRequest(connectionRequestId, newConnectionRequestData);
    return response.status(200).json(updatedConnectionRequestResult);
});

app.delete("/connectionRequest/:connectionRequestId", (request, response) => {
    const connectionRequestId = request.params.connectionRequestId;
    db.deleteConnectionRequest(connectionRequestId);
    return response.sendStatus(200);
});


/****************************************
 * Listener
 ****************************************/
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})