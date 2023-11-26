// OrderCard.js
import React from "react";
import "./style.css";

const OrderCard = (props) => {
  const { orderId, date, totalAmount, items, status } = props;

  return (
    <div className={`order-card ${status}`}>
      <div className="order-details">
        <div className="order-info">
          <h2 className="order-id">Order #{orderId}</h2>
          <p className="order-date">Order Date: {date}</p>
          <p className="order-total">Total Amount: ${totalAmount}</p>
        </div>
        <div className="order-items">
          <h3>Items:</h3>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <button className={`order-status ${status}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </button>
    </div>
  );
};

export default OrderCard;
