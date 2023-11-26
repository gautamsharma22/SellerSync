const express = require("express");
const {
  viewAllProducts,
  updateOrder,
  addProduct,
} = require("../controllers/products");

const router = express.Router();

// View all Products
router.get("/", viewAllProducts);

// Add new Product
router.post("/add", addProduct);

// Edit Product
router.post("/chekout/:id", updateOrder);

module.exports = router;

// TODO : Get userOrderHistory from frontend
