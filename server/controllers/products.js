const Product = require("../models/product");
const addProduct = async (req, res) => {
  const { pID, pName, pPrice, pCategory, pDescription,pSeller } = req.body;
  const product = new Product({
    pID,
    pName,
    pPrice,
    pCategory,
    pDescription,
    pSeller,
  });
  try {
    const result = await product.save();
    if (result) {
      console.log(result);
      res.status(201).json({
        message: "Product Added Successfully",
      });
    }
  } catch (error) {
    console.log("Adding Product failed:", error);
    res.status(500).json({
      message: "Adding Product failed : ",
      error: error,
    });
  }
};

const viewAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({
      message: "Can't Fetch Products ...",
      error: error,
    });
  }
};

const updateOrder = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  console.log("Request Recieved:");
  try {
    const resp = await Order.findOneAndUpdate(
      { _id: id },
      { $set: { orderStatus: !orderStatus } }
    );

    if (!resp) {
      return res.status(500).json({
        message: "Error Proccessing Order",
      });
    }
    res.status(200).json({
      message: "Order Updated",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Order update Failed",
    });
  }
};

module.exports = {
  viewAllProducts,
  updateOrder,
  addProduct,
};

// Pending :: Get objectID of User from frontend on login
