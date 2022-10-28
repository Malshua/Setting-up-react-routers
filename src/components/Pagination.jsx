import React from "react";

const Pagination = ({ usersPerPage, totalUsers, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => {
    return (
      <li key={number} className="page-item">
        <a onClick={() => paginate(number)} className="page-link">
          {number}
        </a>
      </li>
    );
  });

  return (
    <nav className="pagination">
      <ul className="page-list">{renderPageNumbers}</ul>
    </nav>
  );
};

export default Pagination;
