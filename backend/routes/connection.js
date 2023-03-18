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

routes.put("/:connectionId", async (request, response) => {
  try {
    const connectionId = request.params.connectionId;
    const newConnectionData = request.body;
    const updatedConnectionResult = await uc.updateConnection(connectionId, newConnectionData);
    if (!updatedConnectionResult)
      return response.sendStatus(400);

    return response.status(200).json(updatedConnectionResult);
  } catch (e) {
    return response.status(400).json({message: "Failed to update connection", error: e.message});
  }
});

routes.delete("/:connectionId", async (request, response) => {
  try {
    const connectionId = request.params.connectionId;
    const result = await uc.deleteConnection(connectionId);
    console.log(result);
    return response.status(200).json({
      message: "Connection rejected successfully",
      connection: result
    });
  } catch (e) {
    return response.status(400).json({message: "Failed to delete connection", error: e.message});
  }
});

module.exports = routes;
