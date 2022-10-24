import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Products() {
  return (
    <div className="page">
      <h1>Products</h1>
      <div className="products-nav">
        <ul>
          <li>
            <NavLink to="/products">All Products</NavLink>
          </li>
          <li>
            <NavLink to="/products/accessories">Accessories</NavLink>
          </li>
          <li>
            <NavLink to="/products/clothing">Clothing</NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
