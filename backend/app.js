const express = require("express");
const UserRoute = require("./routers/user-routers");
const db = require("./config/db");
const app = express();
app.use(express.json());
app.use("/",UserRoute);
module.exports = app;