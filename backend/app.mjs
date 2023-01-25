import express from "express";
import {routes} from "./routes/index.mjs";

const app = express();
const port = 3430;

app.use(express.json());

app.use('/', routes);

/****************************************
 * Listener
 ****************************************/
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})