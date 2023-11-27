import { useState, useContext } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { LoginContext, CartContext } from "../../App";

import "./style.css";

const Navbar = () => {
  const { userInfo, setUserInfo } = useContext(LoginContext);
  const { cartItems } = useContext(CartContext);
  const [showNavbar, setShowNavbar] = useState(false);
  const navigate = useNavigate();
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const handleLogout = () => {
    setUserInfo({
      userID: "",
      loggedIn: false,
      isVendor: false,
    });
    navigate("/", { replace: true });
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h1>Logo</h1>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <h1>Button</h1>
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {!userInfo.isVendor && userInfo.loggedIn && (
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
            )}
            {!userInfo.isVendor && userInfo.loggedIn && (
              <li>
                <NavLink to="/orders">Your Orders</NavLink>
              </li>
            )}
            {!userInfo.isVendor && userInfo.loggedIn && (
              <li>
                <NavLink to="/cart">
                  Cart{cartItems.length > 0 && "(" + cartItems.length + ")"}
                </NavLink>
              </li>
            )}
            {!userInfo.loggedIn && (
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            )}
            {!userInfo.loggedIn && (
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            )}
            {userInfo.isVendor && (
              <li>
                <NavLink to="/vendor">New Orders</NavLink>
              </li>
            )}
            {userInfo.loggedIn && <li onClick={handleLogout}>Logout</li>}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
