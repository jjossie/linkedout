const express = require("express");
const routes = require("./routes");
const {mongoose} = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const {getAuth} = require("./middleware/auth");
dotenv.config();

const app = express();
const port = 3430;

// Middleware
app.use(express.json());
app.use(getAuth);
app.use(cors());


// I'm not sure why this is here 🤨
app.options('/login', function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.end();
});
app.use('/', routes);

/****************************************
 * Listener
 ****************************************/
mongoose.set('strictQuery', true); // Suppress warning
mongoose.connect(
  process.env.MONGODB_URI
).then(() => {
  console.log("****************************************");
  console.log("* Connected to DB!")
  app.listen(port, () => {
    console.log(`* Listening on port ${port}`);
    console.log("****************************************");
  });
}).catch(() => console.log("Failed to connect to database"));

module.exports = app;
