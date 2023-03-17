

async function logRequestInfo(req, res, next) {
  console.log(`\n****************************************`);
  console.log(`[${req.method}]: ${req.url}`);
  if (req.user){
    console.log(`Logged in as ${req.user.firstName}\n`);
  } else {
    console.log("Not logged in\n");
  }
  next();
}

module.exports = {logRequestInfo};