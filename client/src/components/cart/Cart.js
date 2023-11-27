import React, { useContext } from "react";
import { CartContext, LoginContext } from "../../App";
import CartItem from "./CartItem";
import baseURL from "../../base_url_export";
const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const { userInfo } = useContext(LoginContext);
  const url = `${baseURL}/order/create`;
  function handleRemove(pID) {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.pID === pID);
      if (existingItem && existingItem.quantity > 1) {
        return prevCart.map((item) =>
          item.pID === pID ? { ...item, quantity: item.quantity - 1 } : item
        );
      } else {
        return prevCart.filter((item) => item.pID !== pID);
      }
    });
  }
  function generateRandomOrderId(prefix = "ORD") {
    const randomNum = Math.floor(Math.random() * 1000000);
    const orderId = `${prefix}${randomNum}`;
    return orderId;
  }
  const randomOrderId = generateRandomOrderId();

  const handleCheckout = async () => {
    // This functionality should be abstract and done on server side but due to less time I'm doing it client side
    const orderCost = cartItems.reduce(
      (total, cartItem) => total + cartItem.pPrice * cartItem.quantity,
      0
    );
    const products = cartItems.map((cartItem) => cartItem._id);
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderCost,
          products,
          orderedBy: userInfo.userID,
          orderID: randomOrderId,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        console.log("failed",data.error);
      } else {
        console.log(data);
      }
    } catch (err) {
      console.log("Error -> ", err);
    }
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((product, index) => (
            <CartItem
              key={product.pID + index}
              indx={index + 1}
              id={product.pID}
              name={product.pName}
              price={product.pPrice}
              quantity={product.quantity}
              onRemove={() => handleRemove(product.pID)}
            />
          ))}
          <div className="checkout">
            <button onClick={handleCheckout}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
