import { NavLink, Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isCustomerPortal = [
    "/customer",
    "/my-devices",
    "/device-details",
    "/documents",
    "/schedule-inspection",
    "/inspection-history",
    "/notifications",
    "/contact",
  ].includes(location.pathname);

  const isEmployeePortal =
    location.pathname.startsWith("/staff") ||
    location.pathname.startsWith("/reports") ||
    location.pathname.startsWith("/compliance") ||
    location.pathname.startsWith("/route");

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="/" className="logo">
          <span className="logo-icon">💧</span>

          <div className="logo-text">
            <div className="logo-title">Metro Water Connect</div>
            <div className="logo-subtitle">
              Backflow Inspection Portal
            </div>
          </div>
        </Link>

        {/* CUSTOMER NAVIGATION */}
        {isCustomerPortal && (
          <>
            <nav className="nav-links">
              <NavLink
                to="/customer"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Dashboard
              </NavLink>

              <NavLink
                to="/my-devices"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                My Devices
              </NavLink>

              <NavLink
                to="/schedule-inspection"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Schedule
              </NavLink>

              <NavLink
                to="/documents"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Documents
              </NavLink>

              <NavLink
                to="/notifications"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Notifications
              </NavLink>
            </nav>

            <div className="navbar-actions">
              <Link to="/" className="btn btn-secondary">
                Logout
              </Link>
            </div>
          </>
        )}

        {/* EMPLOYEE NAVIGATION */}
        {isEmployeePortal && (
          <>
            <nav className="nav-links">
              <NavLink
                to="/staff"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Dashboard
              </NavLink>

              <NavLink
                to="/compliance"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Compliance Queue
              </NavLink>

              <NavLink
                to="/reports"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Reports
              </NavLink>

              <NavLink
                to="/route"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Route Planner
              </NavLink>
            </nav>

            <div className="navbar-actions">
              <Link to="/" className="btn btn-secondary">
                Logout
              </Link>
            </div>
          </>
        )}

        {/* PUBLIC NAVIGATION */}
        {!isCustomerPortal && !isEmployeePortal && (
          <div className="navbar-actions">
            <Link to="/login" className="nav-link">
              Customer Login
            </Link>

            <Link to="/staff" className="btn btn-primary">
              Employee Login
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Navbar;