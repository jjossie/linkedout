const {Router} = require("express");
const uc = require("../controllers/userController.js");
const routes = Router();

routes.use('/user', require('./auth'));
routes.use('/user', require('./user'));
routes.use('/post', require('./post'));
routes.use('/connection', require('./connection'));
routes.use('/privateChat', require('./privateChat'));
routes.use('/privateChatMessage', require('./privateChatMessage'));

module.exports = routes;
