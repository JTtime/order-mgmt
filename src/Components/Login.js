import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { mockUsers } from "../data/users";
import "./login.css";

const LoginPage = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = mockUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (user) {
      handleLogin(e);
      // navigate("/orders");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit" data-testid="submit-button">
          Login
        </button>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default LoginPage;
