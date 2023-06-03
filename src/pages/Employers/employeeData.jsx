import React, { useState } from "react";
import employeeTable from "./employeeTable"

const employeeData = () => {
  const employees = [
    { name: "John Doe", department: "HR", date: "2023-05-01" },
    { name: "Jane Smith", department: "Finance", date: "2023-04-15" },
    { name: "David Johnson", department: "Marketing", date: "2023-03-20" },
  ];
  return (
    <div className="App">
      <h1>Employee Management</h1>
      <employeeTable employees={employees} />
    </div>
  );
};

export default employeeData;
