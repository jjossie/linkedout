const {Router} = require("express");
const uc = require("../controllers/userController.js");
const routes = Router();


/****************************************
 * ConnectionRequest Endpoints
 ****************************************/

routes.get("/:connectionRequestId", (request, response) => {
  const connectionRequestId = request.params.connectionRequestId;
  const connectionRequest = uc.connectionRequestById(connectionRequestId);
  if (connectionRequest)
    return response.status(200).json(connectionRequest);
  else
    return response.sendStatus(400);
});

routes.post("", (request, response) => {
  const connectionRequestData = request.body;
  const newConnectionRequestResult = uc.createConnectionRequest(connectionRequestData);
  if (newConnectionRequestResult)
    return response.status(201).json(newConnectionRequestResult);
  else
    return response.sendStatus(400);
});

routes.put("/:connectionRequestId", (request, response) => {
  const connectionRequestId = request.params.connectionRequestId;
  const newConnectionRequestData = request.body;
  const updatedConnectionRequestResult = uc.updateConnectionRequest(connectionRequestId, newConnectionRequestData);
  if (updatedConnectionRequestResult)
    return response.status(200).json(updatedConnectionRequestResult);
  else
    return response.sendStatus(400);
});

routes.delete("/:connectionRequestId", (request, response) => {
  const connectionRequestId = request.params.connectionRequestId;
  uc.deleteConnectionRequest(connectionRequestId);
  return response.sendStatus(200);
});



module.exports = routes;
