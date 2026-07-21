import "../Login.css";
import { Link, useNavigate } from "react-router-dom";
import { MdEngineering } from "react-icons/md";

function StaffLogin() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Prototype login
    navigate("/staff");
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <MdEngineering
            size={48}
            color="#005a9c"
            style={{ marginBottom: "12px" }}
          />

          <h1 style={{ margin: 0 }}>
            Metro Water Connect
          </h1>
        </div>

        <h2>Staff Login</h2>

        <p className="login-subtitle">
          Sign in using your Metro Water employee account.
        </p>

        <form onSubmit={handleLogin}>

          <label htmlFor="email">
            Work Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="Enter your Metro Water email"
            required
          />

          <label htmlFor="password">
            Password
          </label>

          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            required
          />

          <button
            className="login-btn"
            type="submit"
          >
            Sign In
          </button>

        </form>

        <div className="login-links">

          <Link to="/">
            ← Back to Home
          </Link>

          <a href="#">
            Forgot Password?
          </a>

        </div>

      </div>
    </div>
  );
}

export default StaffLogin;