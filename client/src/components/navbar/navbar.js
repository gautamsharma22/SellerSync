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
  const { isVendor, loggedIn } = userInfo;

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h1>SellerSync</h1>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <h1>{!showNavbar ? "Menu" : "Close"}</h1>
        </div>
        <div
          className={`nav-elements  ${showNavbar && "active"}`}
          onClick={handleShowNavbar}
        >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            {loggedIn && !isVendor && (
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
            )}
            {loggedIn && !isVendor &&  (
              <li>
                <NavLink to="/orders">Your Orders</NavLink>
              </li>
            )}
            {loggedIn && !isVendor && (
              <li>
                <NavLink to="/cart">
                  Cart{cartItems.length > 0 && "(" + cartItems.length + ")"}
                </NavLink>
              </li>
            )}
            {!loggedIn && (
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            )}
            {!loggedIn && (
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            )}
            {loggedIn && isVendor && (
              <li>
                <NavLink to="/add">Add Product</NavLink>
              </li>
            )}
            {loggedIn && isVendor && (
              <li>
                <NavLink to="/vendor">New Orders</NavLink>
              </li>
            )}
            {loggedIn && <li onClick={handleLogout}>Logout</li>}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
