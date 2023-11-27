// Registration.js
import React, { useState } from "react";
import "./style.css";
import baseURL from "../../base_url_export";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("CUSTOMER");
  const [message, setMessage] = useState("");

  const url = `${baseURL}/auth/register`;

  const handleRegistration = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
          userType,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage(data.message);
      } else {
        setMessage(data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-form">
        <h2>Register New User</h2>
        {message && <p className="error-message">{message}</p>}
        <form>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="userType">User Type:</label>
            <select
              id="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="VENDOR">Vendor</option>
              <option value="CUSTOMER">Customer</option>
            </select>
          </div>

          <button type="button" onClick={handleRegistration}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
