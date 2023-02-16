const bcrypt = require("bcrypt");
const numberOfSaltRounds = 10;

/**
 * Generates a hash for a password that can be stored in the database
 * @param password
 * @returns {Promise<object>}
 */
function createPasswordHash(password) {
  return bcrypt.hash(password, numberOfSaltRounds)
}

// Checks a password against a password hash
// Returns true if the password and hash match
// Otherwise, returns false
function checkPassword(password, hash) {
  return bcrypt.compare(password, hash);
}

module.exports = {createPasswordHash, checkPassword}