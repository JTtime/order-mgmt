import React from "react";

const Pagination = ({ ordersPerPage, totalOrders, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalOrders / ordersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      <div className="pagination">
        {pageNumbers.map((number) => (
          <div key={number}>
            <div onClick={() => paginate(number)} className="page-link">
              <div className="page-numbers">{number}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
