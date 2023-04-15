import "./styles.css";
import OrdersTable from "./Components/OrdersTable";
import SearchBar from "./Components/SearchBar";
import { useState, useEffect } from "react";
import LoginPage from "./Components/Login";
import ordersData from "./data/orders.json";

export default function App() {
  const [orders, setOrders] = useState(ordersData);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [filteredOrders, setFilteredOrders] = useState(ordersData);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    const filterOrders = orders.filter((order) => {
      return (
        order.orderID.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.vendorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.pickUpDate.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFilteredOrders(filterOrders);
  }, [searchTerm]);

  const handleLogin = (event) => {
    event.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <h1>Order Management</h1>
      {isLoggedIn ? (
        <>
          <SearchBar handleSearch={handleSearch} />
          <OrdersTable orders={filteredOrders} />
        </>
      ) : (
        <LoginPage handleLogin={handleLogin} />
      )}
    </div>
  );
}
