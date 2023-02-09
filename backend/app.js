const express = require("express");
const routes = require("./routes");
const {mongoose} = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const port = 3430;

app.use(express.json());
app.use(cors());
app.use('/', routes);

/****************************************
 * Listener
 ****************************************/
mongoose.connect(
  process.env.MONGODB_URI
).then(() => {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}).catch(() => console.log("Failed to connect to database"));

module.exports = {app};
