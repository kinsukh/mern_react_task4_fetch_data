import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"; // Import or create your CSS file

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/users")
      .then((response) => {
        if (Array.isArray(response.data.users)) {
          setUsers(response.data.users);
        } else {
          console.error("API response does not contain an array of users:", response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Dummy Data</h1>
      <div className="Table-display">
        <table >
          <thead >
            <tr>
              <th>Sno</th>
              <th id="rllines">Profile Pic</th>
              <th id="rllines">Firstname</th>
              <th id="rllines">Last Name</th>
              <th id="rllines">Email</th>
              <th id="rllines">Username</th>
              <th id="rllines">Domain</th>
              <th id="rllines">IP</th>
              <th>University</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <td>{index + 1}</td>
                <td>
                  <img src={user.image} alt="Profile" width="50" height="50" />
                </td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.domain}</td>
                <td>{user.ip}</td>
                <td>{user.university}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
