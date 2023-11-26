const mongoose = require("mongoose");
const order = new mongoose.Schema({
  orderID: {
    type: Number,
    required: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  orderedAt: {
    type: Date,
    default: () => new Date(),
    required: true,
  },
  orderedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  orderStatus: {
    type: Boolean,
    default: false,
  },
  orderCost: {
    type: Number,
    required: true,
  },
});

const orderModel = mongoose.model("Order", order);

module.exports = orderModel;
