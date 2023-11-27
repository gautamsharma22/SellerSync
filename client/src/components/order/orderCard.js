import React from "react";
import "./style.css";
const OrderCard = (props) => {
  const { orderID, orderedAt, orderCost, productName, orderStatus } = props;
  const formattedDate = new Date(orderedAt).toLocaleDateString();
  const formattedTime= new Date(orderedAt).toLocaleTimeString();
  return (
    <div className={`order-card ${orderStatus}`}>
      <div className="order-details">
          <h4 className="order-id">ID: {orderID}</h4>
          <h4 className="order-name">{productName}</h4>
          <p className="order-date">Date: {formattedDate}</p>
          <p className="order-date">Time: {formattedTime}</p>
          <p className="order-total">Total ₹ {orderCost}</p>
      </div>
      <button className={`order-status ${orderStatus}`}>
        {orderStatus.charAt(0).toUpperCase() + orderStatus.slice(1)}
      </button>
    </div>
  );
};

export default OrderCard;
