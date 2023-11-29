const Order = require("../models/order");
const createOrder = async (req, res) => {
  try {
    const { orderItems } = req.body;
    console.log(orderItems);
    const orderPromises = orderItems.map(async (item) => {
      const order = new Order({ ...item });
      return order.save();
    });
    const results = await Promise.all(orderPromises);

    if (results.every((result) => result)) {
      res.status(201).json({
        message: "Orders Placed Successfully",
      });
    } else {
      res.status(500).json({
        message: "Error Placing Orders: Some orders failed to save",
        error: error,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Error Placing Orders",
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
        error: error,
      });
    }
  } else {
    return res.status(400).json({
      error: "Invalid User ID",
    });
  }
};

const viewVendorOrders = async (req, res) => {
  const { vendorID } = req.body;
  if (vendorID) {
    try {
      const orders = await Order.find({ sellerUID: vendorID });
      console.log(orders)
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({
        message: "Error fetching Orders",
        error: error,
      });
    }
  } else {
    return res.status(400).json({
      error: "Invalid Vendor ID",
    });
  }
};

const updateOrder = async (req, res) => {
  const { orderID, orderStatus } = req.body;
  try {
    const resp = await Order.findOneAndUpdate(
      { _id: orderID },
      { orderStatus: orderStatus }
    );

    if (!resp) {
      return res.status(500).json({
        message: "Error Proccessing Order",
        error: error,
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
  viewVendorOrders,
};

// Pending :: Get objectID of User from frontend on login
