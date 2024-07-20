import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './index.css';

function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/register', { email, password })
      .then(response => {
        if (response.data === "user already found") {
          setErrorMessage("User already found!");
        } else {
          navigate("/login");
        }
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle other errors here
      });
  };

  return (
    <div className="signin-container">
      <h2 className="signin-heading">Sign In</h2>
      <div className="signin-content">
        <form onSubmit={handleSubmit} className="signin-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
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
          <button className="b1" type="submit">Sign In</button>
        </form>
        <Link to="/login">Login</Link>
      </div>
      {errorMessage && <span className='alert-color'>{errorMessage}</span>}
    </div>
   
  );
}

export default SignIn;
