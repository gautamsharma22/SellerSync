const express = require("express");
const dotenv = require("dotenv");
const manageUser = require("./routes/auth");
const manageOrder = require("./routes/order");
const manageProduct = require("./routes/product");
const connectDB = require("./utils/connectDB");
const app = express();
dotenv.config();
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-Type'); 
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  next();
});
connectDB();
app.use("/auth", manageUser);
app.use("/order", manageOrder);
app.use("/product", manageProduct);
app.use("/", (req, res) => {
  res.send("app rendered");
});
app.listen(process.env.PORT, () =>
  console.log(`server listening on port ${process.env.PORT}`)
);
