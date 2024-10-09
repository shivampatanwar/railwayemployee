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

    
        // Form validation
        const errors = {};
        
        if (!name.trim()) {
          errors.name = "Name is required";
        }else if (name.length < 3) {
          errors.username = "Name must be at least 3 characters long";
        }
        
        if (!username.trim()) {
          errors.username = "Username is required";
        } else if (username.length < 3) {
          errors.username = "Username must be at least 3 characters long";
        }
        
        if (!email.trim()) {
          errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          errors.email = "Email is invalid";
        }
        
        if (!phone.trim()) {
          errors.phone = "Phone number is required";
        } else if (!/^\d{10}$/.test(phone)) {
          errors.phone = "Phone number must be 10 digits";
        }
        
        if (!password.trim()) {
          errors.password = "Password is required";
        } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$/.test(password)) {
          errors.password = "Password must be at least 6 characters,  1 lowercase  1 uppercase  1 number  1 special characters";
        }
        
        if (Object.keys(errors).length > 0) {
          // If there are errors, display them and prevent form submission
          Object.keys(errors).forEach(key => {
            alert(errors[key]);
          });
          return;
        }
    
        // If validation passes, continue with the existing logic
    

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

        {/* <label htmlFor="name">Name : </label> */}
        <input
          type="text"
          placeholder="Name"
          id="name"
          value={name}
          name="name"
          onChange={handleChange}
        />

        {/* <label htmlFor="username">Username : </label> */}
        <input
          type="text"
          placeholder="Username"
          id="username"
          value={username}
          name="username"
          onChange={handleChange}
        />

        {/* <label htmlFor="email">Email : </label> */}
        <input
          type="text"
          placeholder="Email"
          id="email"
          value={email}
          name="email"
          onChange={handleChange}
        />

        {/* <label htmlFor="phone">Phone : </label> */}
        <input
          type="text"
          placeholder="Phone"
          id="phone"
          value={phone}
          name="phone"
          onChange={handleChange}
        />

        {/* <label htmlFor="password">Password : </label> */}
        <input
          type="password"
          placeholder="Password"
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
