// pages/Login.jsx
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // <-- new success state

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
      setError("Enter Password.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Invalid email or password");
        return;
      }

      // Show login successful message
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
      }, 1000); // 1 second delay
    } catch (err) {
      setError("Server error. Please try again.");
    }
  };

  const handleForgotPassword = () => {
    alert("Redirecting to password reset page...");
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
          {success && <p className="success-message">{success}</p>} {/* <-- display success */}

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
              Login
            </button>
          </form>

          <div className="login-footer">
            {/* <button
              type="button"
              className="forgot-btn"
              onClick={handleForgotPassword}
            >
              Forgot Password?
            </button> */}

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
