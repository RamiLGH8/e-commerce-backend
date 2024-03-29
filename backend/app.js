const express = require("express");
const UserRoute = require("./routers/user-routers");
const OrderRoute=require("./routers/order-routers");
const CartRoute=require("./routers/cart-routers");
const ProductRoute=require("./routers/product-routers");
const ReviewRoute=require("./routers/review-routers");
const db = require("./config/db");
const app = express();
app.use(express.json());
app.use("/", UserRoute,OrderRoute,CartRoute,ProductRoute,ReviewRoute);
module.exports = app;