const {Router} = require("express");
const {createUser, loginUser, getProfile} = require("../controllers/auth");
const routes = Router();

routes.post('/register', createUser);
routes.post('/login', loginUser);
routes.get('/profile', getProfile);

module.exports = routes;