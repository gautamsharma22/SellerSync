const Order = require("../models/order");
const createOrder = async (req, res) => {
  const { products, orderedBy, orderCost, orderID } = req.body;
  const order = new Order({
    orderID,
    products,
    orderedBy,
    orderCost,
  });
  try {
    const result = await order.save();
    if (result) {
      console.log(result);
      res.status(201).json({
        message: "Order Placed Successfully",
      });
    }
  } catch (error) {
    console.error("Error Placing Order:", error);
    res.status(500).json({
      message: "Error Placing Order : ",
      error: error,
    });
  }
};

const viewOrders = async (req, res) => {
  const { orderedBy } = req.body;
  if (orderedBy) {
    try {
      const orders = await Order.find({ orderedBy });
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({
        message: "Error fetching Orders",
      });
    }
  } else {
    return res.status(400).json({
      message: "Invalid Vendor ID",
    });
  }
};

const updateOrder = async (req, res) => {
  const { orderID, mode } = req.body;
  const newOrderState = mode;
  try {
    const resp = await Order.findOneAndUpdate(
      { _id: orderID },
      { orderStatus: newOrderState }
    );

    if (!resp) {
      return res.status(500).json({
        message: "Error Proccessing Order",
      });
    }
    return res.status(200).json({
      message: "Order Updated",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Order update Failed",
      error: error,
    });
  }
};

module.exports = {
  createOrder,
  viewOrders,
  updateOrder,
};

// Pending :: Get objectID of User from frontend on login
