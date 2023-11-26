const express = require("express");
const {
  createOrder,
  viewOrders,
  updateOrder,
} = require("../controllers/orders");

const router = express.Router();

// View all Orders
router.get("/", viewOrders);

// Create Order
router.post("/create", createOrder);

// Accept/ Reject Order
router.post("/update", updateOrder);



module.exports = router;

// TODO : Get userOrderHistory from frontend
