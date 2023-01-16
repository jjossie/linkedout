import express from "express";
import Database from "./database.mjs";

const app = express();
const db = Database();

/****************************************
 * User Endpoints
 ****************************************/
app.get("/user/:userId", (request, response) => {
    const userId = request.params.userId;
    const user = db.userById(userId);
    return response.status(200).json(user);
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
    return response.status(200);
});



/****************************************
 * ConnectionRequest Endpoints
 ****************************************/

