// Student_taBle.js
import React, { useState, useEffect } from "react";
import "../Autcss.css";
import Nav from "../Nav/Nav";
const Student_taBle = () => {
  const [userDetails, setUserDetails] = useState([]);
  const userName = window.location.state && window.location.state.userName;
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch("http://localhost:4000/app/all-data");
        if (!response.ok) {
          console.error("Error fetching user details:", response.statusText);
          return;
        }
        const data = await response.json();
        setUserDetails(data); 
        console.log("this is data", data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };
    fetchUserDetails();
  }, []);
  console.log("this is data", userDetails);
  return (
    <div>
      <div
        className="q_elements_item_content
q_elements_holder_custom_605243"
        style={{ padding: "50px 100px" }}
      >
        <Nav />
      </div>
      <div className="App App-header">
        <h2>Welcome </h2>
        <table className="container">
          <thead className="responsive-tables">
            <tr className="table-header">
              <th>User Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>bLOOD GROUP</th>
              <th>ADDRESS </th>
            </tr>
          </thead>
          <tbody>
            {userDetails.map((user, index) => (
              <tr key={index} className="table-row">
                <td>{user.UserName}</td>
                <td>{user.Email}</td>
                <td>{user.Ph_No}</td>
                <td>{user.bgroup}</td>
                <td>{user.Address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Student_taBle;
