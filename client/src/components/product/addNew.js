import React, { useState, useContext } from "react";
import baseURL from "../../base_url_export";
import { LoginContext } from "../../App";
const NewProduct = () => {
  const { userInfo } = useContext(LoginContext);
  const [Name, setName] = useState("");
  const [Price, setPrice] = useState("");
  const [Category, setCategory] = useState("");
  const [Description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const url = `${baseURL}/product/add`;
  function generateRandom(prefix = "P") {
    const randomNum = Math.floor(Math.random() * 1000);
    const prodID = `${prefix}${randomNum}`;
    return prodID;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pID: generateRandom(),
          pName: Name,
          pPrice: Price,
          pCategory: Category,
          pDescription: Description,
          pSeller: userInfo.userID,
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
    <div className="form-container">
      <div className="actual-form">
        <h2>Add New Product</h2>
        {message && <p className="error-message">{message}</p>}
        <form>
          <div className="form-group">
            <label htmlFor="Name">Product Name:</label>
            <input
              type="text"
              id="Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="Price">Price :</label>
            <input
              type="number"
              id="Price"
              value={Price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="Category">Category :</label>
            <input
              type="Category"
              id="Category"
              value={Category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="Description">Description :</label>
            <input
              type="text"
              id="Description"
              value={Description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <button type="button" onClick={handleSubmit}>
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewProduct;
