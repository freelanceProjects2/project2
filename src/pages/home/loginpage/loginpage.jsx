import React from 'react';
import './loginpage.css';
import Home from '../home';
import { Link } from 'react-router-dom';
const LoginPage = () => {
  return (
    <div className="container">

    <div className="img-container">
    <div>
    <h1 className='title'>KillerBee</h1>
    </div>    </div>


    <div className="form-container">
   
      <div className="form-group">
      <h1>Login</h1>

        <label htmlFor="username" className="label">Username</label>
        <input type="text" id="username" placeholder="Username" className="input" />
      </div>
      <div className="form-group">
        <label htmlFor="password" className="label">Password</label>
        <input type="password" id="password" placeholder="Password" className="input" />
      </div>
      <Link to="/home">
          <button>Login</button>
        </Link>   </div>
  </div>
  );
};

export default LoginPage;