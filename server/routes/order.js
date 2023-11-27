const express = require("express");
const {
  createOrder,
  viewOrders,
  updateOrder,
  viewVendorOrders,
} = require("../controllers/orders");

const router = express.Router();

// View all Sent Orders {for Users}
router.post("/", viewOrders);

// View all Recieved Orders {for Vendors}
router.post("/vendor", viewVendorOrders);

// Create Order
router.post("/create", createOrder);

// Accept/ Reject Order
router.post("/update", updateOrder);



module.exports = router;

// TODO : Get userOrderHistory from frontend
