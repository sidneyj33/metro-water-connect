import "../Login.css";
import { Link, useNavigate } from "react-router-dom";

function CustomerLogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary login
    navigate("/customer");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Metro Water Connect</h1>

        <h2>Customer Login</h2>

        <p className="login-subtitle">
          Sign in to access your Metro Water account.
        </p>

        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email Address</label>

          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="password">Password</label>

          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            required
          />

          <button className="login-btn" type="submit">
            Sign In
          </button>
        </form>

        <div className="login-links">
          <Link to="/">← Back to Home</Link>

          <a href="#">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
}

export default CustomerLogin;