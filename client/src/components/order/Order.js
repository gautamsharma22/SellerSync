import React from "react";
import OrderCard from "./orderCard";
import dummyOrderData from "../../order_exports";

const Order = () => {
  return (
    <div>
      {dummyOrderData.map((order) => (
        <OrderCard key={order.orderId} {...order} />
      ))}
    </div>
  );
};

export default Order;
