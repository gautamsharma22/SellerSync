// ProductCard.js
import React from "react";
import "./style.css";

const ProductCard = (props) => {
  const { pName, pImg, pDes, pPrice } = props;
  return (
    <div className="product-card">
      <img
        src="https://via.placeholder.com/150"
        alt="Product"
        className="product-image"
      />
      <div className="product-info">
        <h2 className="product-title">{pName}</h2>
        <p className="product-description">{pDes}</p>
        <p className="product-price">₹ {pPrice}</p>
        <button className="add-to-cart">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
