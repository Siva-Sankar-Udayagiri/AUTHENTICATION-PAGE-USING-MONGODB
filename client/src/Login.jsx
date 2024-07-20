import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email, password })
      .then(response => {
        if (response.data === "Success") {
          navigate("/welcome");
        } else {
          console.log("Login failed:", response.data);
        }
      })
      .catch(err => {
        console.error("Error during login:", err);
      });
  };

  return (
    <div className="signin-container">
      <h2 className="signin-heading">Login</h2>
      <div className="signin-content">
        <form onSubmit={handleSubmit} className="signin-form">
          <div className="form-group">
            <label htmlFor="username">Email:</label>
            <input
              type="email"
              id="username"
              value={email}
              onChange={handleUsernameChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              required
              className="form-input"
            />
          </div>
          <button type="submit" className="b1">Login</button>
        </form>
      </div>
    </div>
  );  
}

export default Login;
