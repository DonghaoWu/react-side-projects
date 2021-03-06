import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(async () => {
    const res = await axios.get('/users');
    setUsers(res.data);
  }, []);

  return (
    <div className="sub-component">
      <h1>All Users</h1>
      <h3>username and age</h3>
      <table className="general-table">
        <thead>
          <tr>
            <th>name</th>
            <th>age</th>
          </tr>
        </thead>

        {users.length ? (
          <tbody>
            {users.map((el) => {
              return (
                <tr key={el.username}>
                  <td>{el.username}</td>
                  <td>{el.age}</td>
                </tr>
              );
            })}
          </tbody>
        ) : null}
      </table>
    </div>
  );
};

export default UsersList;
