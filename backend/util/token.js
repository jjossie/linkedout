let JWT = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "ItsASecret";

// Generates a new JWT based on a userId
function generateJWT(userId) {
  return JWT.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
      data: {userId}
    },
    JWT_SECRET
  );
}

// Decrypts a JWT and returns a userId
// If the JWT is expired or invalid, returns null
async function userIdFromJWT(token) {
  try{
    const verifiedToken = await JWT.verify(token, JWT_SECRET);
    console.log("userIdFromJwt() called:\n\n\n %o\n\n extracted\n\n", verifiedToken)
    return verifiedToken.data.userId || null;
  } catch (e) {
    console.log("userIdFromJwt() called: something went wrong:\n%o", e);
    return null
  }
}

module.exports = {generateJWT, userIdFromJWT}