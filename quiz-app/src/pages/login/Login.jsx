import React, { useState } from "react";
import "./styles.css";
import loginImage from "../../assets/login.png";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in as ${email}`);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <img src={loginImage} alt="Login Visual" />
      </div>

      <div className="login-right">
        <div className="login-header">
          <h1>Welcome Back</h1>
          <p>Please login to your account</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-form-inp">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Login</button>
            <p>Don't have an account? <a href="#">Register</a></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
