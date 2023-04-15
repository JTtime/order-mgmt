import { useState } from "react";
import Pagination from "./Pagination";

const OrdersTable = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(10);

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = props.orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Vendor Name</th>
            <th>Status</th>
            <th>Pickup Date</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders.map((order) => (
            <tr key={order.orderID}>
              <td>{order.orderID}</td>
              <td>{order.vendorName}</td>
              <td>{order.status}</td>
              <td>{order.pickUpDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        ordersPerPage={ordersPerPage}
        totalOrders={props.orders.length}
        paginate={paginate}
      />
    </div>
  );
};

export default OrdersTable;
