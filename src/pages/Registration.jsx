import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const url = "https://q2q0fndd-3000.inc1.devtunnels.ms/employees";

const Registration = () => {
  const navigate = useNavigate();


  const [employeesData, setEmployeesData] = useState([]);
  const fetchData = async () => {
    const data = await axios.get(url);
    setEmployeesData(data.data);
  };

  useState(() => {
    fetchData();
  }, []);


  const [employees, setEmployees] = useState({
    name: "",
    email: "",
    phone: "",
    designation: "",
    address: "",
  });

  const { name, email, phone, designation, address } = employees;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployees({ ...employees, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userExists = employeesData.some(
      (emp) => emp.email === email || emp.phone === phone
    );

    if (userExists) {
      alert("User Already Exists");
    } else {
      await axios.post(url, employees);
      alert("Registration Successful");
      navigate("/root/employee");
    }
  };
  return (
    <div className="registration">
      <form onSubmit={handleSubmit}>
        <h1>Registration</h1>

        <input
          type="text"
          placeholder="name"
          id="name"
          value={name}
          name="name"
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="email"
          id="email"
          value={email}
          name="email"
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="phone"
          id="phone"
          value={phone}
          name="phone"
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="designation"
          id="designation"
          value={designation}
          name="designation"
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="address"
          id="address"
          value={address}
          name="address"
          onChange={handleChange}
        />

        <button type="submit" onClick={handleSubmit}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
