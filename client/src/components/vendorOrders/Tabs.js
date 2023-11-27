import React, { useState } from "react";
import "./Tabs.css";
import OrderCard from "./vendorOrderCard";
const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState(1);
  const { orders,setOrderHistory } = props;
  const filteredOrder = orders.filter((order) => {
    if (activeTab === 1 && order.orderStatus === "pending") return order;
    else if (activeTab === 2 && order.orderStatus === "fulfilled") return order;
    else if (activeTab === 3 && order.orderStatus === "rejected") return order;
  });

  return (
    <div className="tabs-container">
      <div className="tabs">
        <div
          className={`tab ${activeTab === 1 ? "active" : ""}`}
          onClick={() => setActiveTab(1)}
        >
          New Orders
        </div>
        <div
          className={`tab ${activeTab === 2 ? "active" : ""}`}
          onClick={() => setActiveTab(2)}
        >
          Accepted Orders
        </div>
        <div
          className={`tab ${activeTab === 3 ? "active" : ""}`}
          onClick={() => setActiveTab(3)}
        >
          Rejected Orders
        </div>
      </div>
      <div className="tab-content">
        <div>
          {filteredOrder && filteredOrder.length > 0 ? (
            filteredOrder.map((order) => (
              <OrderCard key={order.orderID} {...order} setOrderHistory={setOrderHistory} />
            ))
          ) : (
            <p>No orders found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
