const express = require("express");
const UserRoute = require("./routers/user-routers");
const AdminRoute = require("./routers/admin-routers");
const db = require("./config/db");
const app = express();
app.use(express.json());
app.use("/",UserRoute,AdminRoute);
module.exports = app;