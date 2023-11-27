import React, { useContext } from "react";
import "./cartItem.css";
import { CartContext } from "../../App";
const CartItem = ({ id, name, price, onRemove, quantity, indx }) => {
  const { setCartItems } = useContext(CartContext);
  const onAddItem = (pID) => {
    setCartItems((prevCart) => {
      return prevCart.map((item) =>
        item.pID === pID
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    });
  };
  return (
    <div className="cart-item">
      <div className="item-details">
        <div className="item-no">{indx} )</div>
        <div className="item-name">{name}</div>
        <div className="item-price">₹ {price}</div>
      </div>
      <div className="item-actions">
        <div className="item-quantity">Quantity: {quantity}</div>
        <button className="remove-button" onClick={() => onRemove(id)}>
          -
        </button>
        <button className="add-button" onClick={() => onAddItem(id)}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
