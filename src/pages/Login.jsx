// pages/Login.jsx
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const message = location.state?.message || "";
  const redirectPath = location.state?.redirect || "/";

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validations
    if (!email || !password) {
      setError("Please fill in all fields.");
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

    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Invalid email or password");
        return;
      }

      // Show login success message
      setSuccess(`Welcome back, ${data.username}!`);

      // Store current user in localStorage
      localStorage.setItem("currentUser", JSON.stringify(data));

      // Delay redirect so user can see success message
      setTimeout(() => {
        const pendingAction = localStorage.getItem("pendingAction");
        if (pendingAction === "upload") {
          localStorage.removeItem("pendingAction");
          navigate("/community");
        } else {
          navigate(redirectPath);
        }
      }, 1000);
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
          <h2 className="title">Welcome Back</h2>
          <p className="subtitle">Login to your account</p>

          {message && <p className="info-message">{message}</p>}
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email or Username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="btn">
              {success ? "Logging in..." : "Login"}
            </button>
          </form>

          <div className="login-footer">
            <p className="quote">
              Don't have an account? <a href="/signup">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
