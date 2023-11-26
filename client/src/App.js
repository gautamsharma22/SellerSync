import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Shop from "./components/shop/shopPage";
import Orders from "./components/order/Order";
import Login from "./components/login/Login";
import Registration from "./components/register/Registration";
const Homepage = () => <h2>You are in the Homepage</h2>;

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
