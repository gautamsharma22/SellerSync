// Registration.js
import React, { useState } from "react";
import "./style.css";

const Registration = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("Vendor"); // Default value is "Vendor"
  const [error, setError] = useState("");

  const handleRegistration = () => {
    // Perform validation and registration logic
    if (
      firstName.trim() === "" ||
      lastName.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      userType.trim() === ""
    ) {
      setError("All fields are required");
    } else {
      // Implement your registration logic here
      console.log("Registration successful!");
    }
  };

  return (
    <div className="registration-container">
      <div className="registration-form">
      <h2>Register New User</h2>
        {error && <p className="error-message">{error}</p>}
        <form >
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
              <option value="Vendor">Vendor</option>
              <option value="Customer">Customer</option>
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
