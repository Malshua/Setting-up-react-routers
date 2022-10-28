import React, { useState, useEffect } from "react";
import { fetchUsers } from "../apis";
import Users from "./Users";
import Pagination from "./Pagination";
import "./Home.css";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  useEffect(() => {
    const getUsers = async () => {
      setLoading(true);
      const data = await fetchUsers(50);
      setUsers(data.results);
      setLoading(false);
    };
    getUsers();
  }, []);

  //   Get current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  return (
    <div className="page">
      <h1>RANDOM USERS</h1>
      <div className="users">
        <Users users={currentUsers} loading={loading} />
      </div>

      <div className="paginate">
        <button onClick={prevPage} disabled={currentPage <= 1} className="btn">
          Prev Page
        </button>
        <Pagination
          usersPerPage={usersPerPage}
          totalUsers={users.length}
          paginate={paginate}
        />
        <button
          onClick={nextPage}
          disabled={currentPage >= users.length / usersPerPage}
          className="btn"
        >
          Next Page
        </button>
      </div>
    </div>
  );
}
