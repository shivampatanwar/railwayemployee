import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const url = "https://q2q0fndd-3000.inc1.devtunnels.ms/employees";

const Employee = () => {
  const [employee, setEmployee] = useState([]);

  const fetchData = async () => {
    const data = await axios.get(url);
    setEmployee(data.data);
  };

  useState(() => {
    fetchData();
  }, [employee]);

  const handleDelete = async (id) => {
    await axios.delete(`${url}/${id}`);
    fetchData();
  };

  return (
    <div className="employee">
      
      
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((emp) => {
            return (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.email}</td>
                <td>{emp.phone}</td>
                <td>{emp.address}</td>
                <td><Link to={`/root/edit/${emp.id}`}><button>Edit</button></Link></td>
                <td><button id="delete" onClick={()=>{handleDelete(emp.id)}}>Delete</button></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
