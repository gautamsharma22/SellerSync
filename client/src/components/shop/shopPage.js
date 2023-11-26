import React from "react";
import ProductCard from "../product/productCard";
import Product from "../../product_exports";
import "./style.css";
const Shop = () => {
  const products = Product.map((product) => {
    return (
      <ProductCard
        key={product.pID}
        pName={product.pName}
        pDes={product.pDescription}
        pPrice={product.pPrice}
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
