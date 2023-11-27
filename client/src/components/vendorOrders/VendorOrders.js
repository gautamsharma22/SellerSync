import React, { useContext, useState, useEffect } from "react";
import baseurl from "../../base_url_export";
import { LoginContext } from "../../App";
import Tabs from "./Tabs";
const VendorOrders = () => {
  const { userInfo } = useContext(LoginContext);
  const [orderHistory, setOrderHistory] = useState([]);
  const url = `${baseurl}/order/vendor`;
  async function getOrders() {
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ vendorID: userInfo.userID }),
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.error);
      } else {
        setOrderHistory(data);
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getOrders();
  }, [userInfo.userID]);
  return (
    <>
      <Tabs orders={orderHistory} setOrderHistory={setOrderHistory} />
    </>
  );
};

export default VendorOrders;
