import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const url = "https://q2q0fndd-3000.inc1.devtunnels.ms/employees";

const EditEmployee = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [employees, setEmployees] = useState({
    id: id,
    name: "",
    email: "",
    phone: "",
    designation: "",
    address: "",
  });

  const [employeesData, setEmployeesData] = useState([]);

  const fetchData = async () => {
    const data = await axios.get(`${url}/${id}`);
    setEmployees(data.data);
    setEmployeesData(data.data);
  };

  useState(() => {
    fetchData();
  }, [id]);

  const { name, email, phone, designation, address } = employees;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployees({ ...employees, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.put(`${url}/${id}`, employees);
    alert("Updation Successful");
    navigate("/root/employee");
    
  };

  return (
    <div className="registration">
      <form onSubmit={handleSubmit}>
        <h1>Updation</h1>

        <input
          type="text"
          placeholder="Name"
          id="name"
          value={name}
          name="name"
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Email"
          id="email"
          value={email}
          name="email"
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Phone"
          id="phone"
          value={phone}
          name="phone"
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Designation"
          id="designation"
          value={designation}
          name="designation"
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Address"
          id="address"
          value={address}
          name="address"
          onChange={handleChange}
        />

        <button type="submit" onClick={handleSubmit}>
          Update
        </button>
      </form>
    </div>
  );
};

export default EditEmployee;
