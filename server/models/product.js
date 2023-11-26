const mongoose = require("mongoose");
const product = new mongoose.Schema({
  pID: {
    type: String,
    required: true,
    trim: true,
  },
  pName: {
    type: String,
    required: true,
    trim: true,
  },
  pPrice: {
    type: String,
    required: true,
    trim: true,
  },
  pCategory: {
    type: String,
    required: true,
  },
  pDescription: {
    type: String,
    required: true,
  },
  pSeller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const productModel = mongoose.model("Product", product);

module.exports = productModel;
