const {Router} = require("express");
const uc = require("../controllers/user.js");
const routes = Router();

/****************************************
 * Connection Endpoints
 ****************************************/

routes.get("/:connectionId", (request, response) => {
  const connectionId = request.params.connectionId;
  const connection = uc.connectionById(connectionId);
  if (connection)
    return response.status(200).json(connection);
  else
    return response.sendStatus(400);
});

routes.post("", (request, response) => {
  const connectionData = request.body;
  const newConnectionResult = uc.createConnection(connectionData);
  if (newConnectionResult)
    return response.status(201).json(newConnectionResult);
  else
    return response.sendStatus(400);
});

routes.put("/:connectionId", (request, response) => {
  const connectionId = request.params.connectionId;
  const newConnectionData = request.body;
  const updatedConnectionResult = uc.updateConnection(connectionId, newConnectionData);
  if (updatedConnectionResult)
    return response.status(200).json(updatedConnectionResult);
  else
    return response.sendStatus(400);
});

routes.delete("/:connectionId", (request, response) => {
  const connectionId = request.params.connectionId;
  uc.deleteConnection(connectionId);
  return response.sendStatus(200);
});

module.exports = routes;
