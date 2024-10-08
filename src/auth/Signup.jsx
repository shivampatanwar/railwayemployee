import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const url = "https://q2q0fndd-3000.inc1.devtunnels.ms/accounts";

const Signup = () => {
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
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  const { name, username, email, phone, password } = employees;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployees({ ...employees, [name]: value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const userExists = employeesData.some((emp) => 
      emp.username === username || emp.email === email || emp.phone === phone
    );


    if (userExists) {
      alert("User Already Exists");
    } else {

      await axios.post(url, employees);
      alert("Signup Successful");
      navigate("/login");
    }
  };

  return (
    <div className="signup">
      <form onSubmit={handleSubmit}>
        <h1>Signup</h1>

        <label htmlFor="name">Name : </label>
        <input
          type="text"
          placeholder="name"
          id="name"
          value={name}
          name="name"
          onChange={handleChange}
        />

        <label htmlFor="username">Username : </label>
        <input
          type="text"
          placeholder="username"
          id="username"
          value={username}
          name="username"
          onChange={handleChange}
        />

        <label htmlFor="email">Email : </label>
        <input
          type="text"
          placeholder="email"
          id="email"
          value={email}
          name="email"
          onChange={handleChange}
        />

        <label htmlFor="phone">Phone : </label>
        <input
          type="text"
          placeholder="phone"
          id="phone"
          value={phone}
          name="phone"
          onChange={handleChange}
        />

        <label htmlFor="password">Password : </label>
        <input
          type="password"
          placeholder="password"
          id="password"
          value={password}
          name="password"
          onChange={handleChange}
        />

        <button type="submit" onClick={handleSubmit}>
          Signup
        </button>

        <p>
          Already have an account <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
