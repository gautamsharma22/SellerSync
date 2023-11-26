const express = require("express");
const dotenv = require("dotenv");
const manageUser = require("./routes/auth");
const manageOrder = require("./routes/order");
const manageProduct = require("./routes/product");
const connectDB = require("./utils/connectDB");
const app = express();
dotenv.config();
app.use(express.json());
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
