const express = require("express");
const routes = require("./routes");
const {mongoose} = require("mongoose");

const app = express();
const port = 3430;

app.use(express.json());

app.use('/', routes);

/****************************************
 * Listener
 ****************************************/
mongoose.connect(
  "mongodb+srv://students:RILnPuIPTo92RCu4@winter2023.inr9f0r.mongodb.net/Joel?retryWrites=true&w=majority"
).then(() => {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });
}).catch(() => console.log("Failed to connect to database"));
