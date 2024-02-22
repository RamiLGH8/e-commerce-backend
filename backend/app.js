const express = require("express");
const bodyParser = require("body-parser")
const UserRoute = require("./routers/user-routers");
const db = require("./config/db");
const app = express();
app.use(bodyParser.json())
app.use("/",UserRoute);
module.exports = app;