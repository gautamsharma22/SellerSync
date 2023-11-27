import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Shop from "./components/shop/shopPage";
import Orders from "./components/order/Order";
import Login from "./components/login/Login";
import Registration from "./components/register/Registration";
import Cart from "./components/cart/Cart";
import Order from "./components/vendorOrders/Order";
const Homepage = () => <h2>You are in the Homepage</h2>;
export const LoginContext = createContext();
export const CartContext = createContext();
function App() {
  const [userInfo, setUserInfo] = useState({
    userID:"",
    loggedIn: false,
    isVendor: false,
  });
  const [cartItems, setCartItems] = useState([]);
  return (
    <LoginContext.Provider value={{ userInfo, setUserInfo }}>
      <CartContext.Provider value={{ cartItems, setCartItems }}>
        <Router>
          <div className="App">
            <Navbar />
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/vendor" element={<Order />} />
            </Routes>
          </div>
        </Router>
      </CartContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
