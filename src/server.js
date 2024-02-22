import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
const port = process.env.PORT || 8080;
const app = express();
require("dotenv").config();



//config app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});