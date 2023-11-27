import React, { useContext } from "react";
import ProductCard from "../product/productCard";
import Product from "../../product_exports";
import { CartContext } from "../../App";

import "./style.css";
const Shop = () => {
  const { setCartItems } = useContext(CartContext);
  function handleAddItem(product) {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.pID === product.pID);
      if (existingItem) {
        return prevCart.map((item) =>
          item.pID === product.pID
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  }
  const products = Product.map((product) => {
    return (
      <ProductCard
        key={product.pID}
        handleAddItem={() => handleAddItem(product)}
        {...product}
      />
    );
  });
  return (
    <div>
      <h1>Shop</h1>
      <div className="product-card-container">{products}</div>
    </div>
  );
};

export default Shop;
