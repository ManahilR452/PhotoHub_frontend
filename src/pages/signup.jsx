// pages/Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!username || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }
    if (username.length < 3) {
      setError("Username must be at least 3 characters.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

      const res = await fetch(`${API_URL}/api/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Signup failed");
        return;
      }

      localStorage.setItem("currentUser", JSON.stringify(data));

      const pendingAction = localStorage.getItem("pendingAction");
      if (pendingAction === "upload") {
        localStorage.removeItem("pendingAction");
        navigate("/community");
      } else {
        navigate("/community");
      }
    } catch (err) {
      console.error(err);
      setError("Server error. Please try again.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-bg">
        <div className="login-overlay"></div>

        <div className="glass-form fade-slide">
          <h2 className="title">Create Account</h2>
          <p className="subtitle">Join our photography community</p>

          {error && <p className="error-message">{error}</p>}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            <button type="submit" className="btn">
              Sign Up
            </button>
          </form>

          <div className="login-footer">
            <p className="quote">
              Already have an account? <a href="/login">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
