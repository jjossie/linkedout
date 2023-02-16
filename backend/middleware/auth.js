// If a token exists, uses the token to attach the user object on the request
// Otherwise, does nothing
const {userIdFromJWT} = require("../util/token");
const {getUserById} = require("../controllers/auth");

const getAuth = async (req, res, next) => {
  const userId = await extractToken(req);
  if (userId) {
    const userObj = await getUserById(userId);
    if (userObj)
      req.user = userObj;
  }

  next();
};

// Looks for an authentication header and extracts the Promise<token> if it exists
// Otherwise, returns null
const extractToken = (req) => {
  const header = req.get('Authorization');
  console.log(`extractToken(${req}) called: ${header} found`);
  if (header)
    return userIdFromJWT(header);
  else
    return null;
};

module.exports = {getAuth};