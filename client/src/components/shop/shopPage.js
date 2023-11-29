import React, { useContext,useState, useEffect } from "react";
import ProductCard from "../product/productCard";
import { CartContext } from "../../App";

import "./style.css";
import baseURL from "../../base_url_export";
const Shop = () => {
  const [Product, setProduct] = useState([]);
  const { setCartItems } = useContext(CartContext);
  const url = `${baseURL}/product`;
  async function getProducts() {
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.error);
      } else {
        setProduct(data);
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);
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
