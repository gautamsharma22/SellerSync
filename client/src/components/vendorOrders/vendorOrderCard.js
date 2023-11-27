import React from "react";
import "./vStyles.css";
import baseurl from "../../base_url_export";
const OrderCard = (props) => {
  const { _id, orderID, orderCost, productName, orderStatus, setOrderHistory } =
    props;
  const url = `${baseurl}/order/update`;
  const handleButton = async (_id, action) => {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ orderID: _id, orderStatus: action }),
      });
      const data = await res.json();
      if (!res.ok) {
        console.log("not updated", data.error);
      } else {
        setOrderHistory((prevOrder) => {
          return prevOrder.map((item) =>
            item._id === _id ? { ...item, orderStatus: action } : item
          );
        });
        console.log("updated", data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className={`vendor-order-card ${orderStatus}`}>
      <div className="vendor-order-details">
        <p className={`vendor-order-status ${orderStatus}`}>
          {orderStatus.charAt(0).toUpperCase() + orderStatus.slice(1)}
        </p>
        <h4 className="vendor-order-id">ID: {orderID}</h4>
        <h4 className="vendor-order-name">{productName}</h4>
        <p className="vendor-order-total">Total ₹ {orderCost}</p>
        <div className="vendor-order-buttons">
          {orderStatus === "pending" && (
            <>
              <button
                className="vendor-accept-button"
                onClick={() => handleButton(_id, "fulfilled")}
              >
                Accept
              </button>
              <button
                className="vendor-reject-button"
                onClick={() => handleButton(_id, "rejected")}
              >
                Reject
              </button>
            </>
          )}
          {orderStatus === "rejected" && (
            <button
              className="vendor-accept-button"
              onClick={() => handleButton(_id, "fulfilled")}
            >
              Accept
            </button>
          )}
          {orderStatus === "fulfilled" && (
            <button
              className="vendor-reject-button"
              onClick={() => handleButton(_id, "rejected")}
            >
              Reject
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
