const mongoose = require("mongoose");
const order = new mongoose.Schema({
  orderID: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  orderedAt: {
    type: Date,
    default: () => new Date(),
    required: true,
  },
  productUID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  orderedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  sellerUID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  orderStatus: {
    type: String,
    required: true,
    default:"pending",
  },
  orderQuantity: {
    type: Number,
    required: true,
  },
  orderCost: {
    type: Number,
    required: true,
  },
});

const orderModel = mongoose.model("Order", order);

module.exports = orderModel;
