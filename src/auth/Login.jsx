import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const url = "https://q2q0fndd-3000.inc1.devtunnels.ms/accounts";


const Login = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState({
    data: "",
    password: "",
  });

  const [employeesData, setEmployeesData] = useState([]);
  const fetchData = async () => {
    const data = await axios.get(url);
    console.log(data.data);
    setEmployeesData(data.data);
  };

  useState(() => {
    fetchData();
  }, []);

  const { data, password } = employees;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployees({ ...employees, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // employeesData.map((emp) => {
    //   if (
    //     (emp.username === data || emp.email === data || emp.phone === data) &&
    //     emp.password == password
    //   ) {
    //     alert("Login Successfully");
    //     navigate("/root");
    //   }
    // });

    const userExists = employeesData.some(
      (emp) =>
        (emp.username === data || emp.email === data || emp.phone===data ) && emp.password === password
    );

    console.log(userExists)

    if (userExists) {
      alert("Login Successful");
      navigate("/root");
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>

        <input
          type="text"
          placeholder="Username or Email or Phone"
          id="data"
          value={data}
          name="data"
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Password"
          id="password"
          value={password}
          name="password"
          onChange={handleChange}
        />

        <button type="submit"> Login </button>

        <p>
          Don't have an account <Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
