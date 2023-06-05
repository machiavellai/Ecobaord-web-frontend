import React, { useState } from "react";
import { Table, Form } from "react-bootstrap";
import Navbar from "../../layouts/Navbar/Navbar";
import "./employeeTable.scss";
import Sidebar from "../../layouts/Sidebar/Sidebar";
const EmployeeTable = () => {
  const Staff = [
    {
      name: "John Doe",
      profilePicture: "john-doe.jpg",
      staffID: "S001",
      email: "johndoe@example.com",
      majorDepartment: "Mathematics",
    },
    {
      name: "Jane Smith",
      profilePicture: "jane-smith.jpg",
      staffID: "S002",
      email: "janesmith@example.com",
      majorDepartment: "English",
    },
    {
      name: "Jane Smith",
      profilePicture: "jane-smith.jpg",
      staffID: "S002",
      email: "janesmith@example.com",
      majorDepartment: "physics",
    },
    {
      name: "Jane Smith",
      profilePicture: "jane-smith.jpg",
      staffID: "S002",
      email: "janesmith@example.com",
      majorDepartment: "English",
    },
    {
      name: "Jane Smith",
      profilePicture: "jane-smith.jpg",
      staffID: "S002",
      email: "janesmith@example.com",
      majorDepartment: "English",
    },
    {
      name: "Jane Smith",
      profilePicture: "jane-smith.jpg",
      staffID: "S002",
      email: "janesmith@example.com",
      majorDepartment: "English",
    },
  ];
  const [displayMode, setDisplayMode] = useState("list");
  return (
    <div className="container">
      <Navbar />
      <Sidebar/>
      <div className="d-flex justify-content-end mb-3">
        <div className="dropdown">
          <button
            className="btn btn- dropdown-toggle"
            type="button"
            id="displayModeDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {displayMode === "list" ? "List" : "Columns"}
          </button>
          <ul className="dropdown-menu" aria-labelledby="displayModeDropdown">
            <li>
              <button
                className="dropdown-item"
                onClick={() => setDisplayMode("list")}
              >
                List
              </button>
            </li>
          </ul>
        </div>
      </div>
      <table
        className={`table ${
          displayMode === "list" ? "list-layout" : "columns-layout"
        }`}
      >
        <thead>
          <tr>
            <th>Profile Picture</th>
            <th>Name</th>
            <th>Staff ID</th>
            <th>Email</th>
            <th>Major Department</th>
          </tr>
        </thead>
        <tbody>
          {Staff.map((employee, index) => (
            <tr key={index}>
              <td>
                <img
                  src={employee.profilePicture}
                  alt={employee.name}
                  width="50"
                  height="50"
                />
              </td>
              <td>{employee.name}</td>
              <td>{employee.staffID}</td>
              <td>{employee.email}</td>
              <td>{employee.majorDepartment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;



