import React, { useState, useContext, useEffect } from "react";
import "./style.css";
import baseURL from "../../base_url_export";
import { Navigate } from "react-router";
import { LoginContext } from "../../App";
const Login = () => {
  const { userInfo, setUserInfo } = useContext(LoginContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const url = `${baseURL}/auth/login`;
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message);
      } else {
        setUserInfo({
          userID: data.userID,
          loggedIn: true,
          isVendor: data.isVendor,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-container">
      {userInfo.loggedIn && <Navigate to="/shop" replace={true} />}
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
