import React, { useEffect } from "react";

const Users = ({ users, loading }) => {
  if (loading) {
    return <div>Loading users...</div>;
  }
  const renderUsers = users.map((user) => {
    return (
      <article key={user.cell}>
        <img src={user.picture.medium} alt={`img-${user.name.first}`} />
        <h2>
          {user.name.title} {user.name.first} {user.name.last}
        </h2>
        <p>{user.phone}</p>
        <p>{user.age}</p>
      </article>
    );
  });

  return <React.Fragment>{renderUsers}</React.Fragment>;
};

export default Users;
