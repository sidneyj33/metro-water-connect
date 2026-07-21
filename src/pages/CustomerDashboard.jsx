import { Link } from "react-router-dom";
import {
  FaClipboardCheck,
  FaCalendarAlt,
  FaBell,
  FaFileAlt,
  FaCheckCircle,
  FaArrowRight,
  FaTint,
  FaClock,
} from "react-icons/fa";
import Layout from "../components/Layout";
import "../styles/Dashboard.css";

function CustomerDashboard() {
  return (
    <Layout>
      <main className="dashboard-page">
        {/* HERO */}
        <section className="dashboard-hero">
          <div className="hero-content">
            <span className="dashboard-badge">Metro Water Connect</span>

            <h1>Welcome Back, Alex</h1>

            <p>
              View your devices, schedule inspections, upload reports, and stay
              compliant—all from one place.
            </p>

            <div className="hero-buttons">
              <Link to="/schedule-inspection" className="btn btn-primary">
                Schedule Inspection
              </Link>

              <Link to="/my-devices" className="btn btn-secondary">
                My Devices
              </Link>
            </div>
          </div>

          <div className="hero-status">
            <FaCheckCircle className="hero-status-icon" />

            <span>System Status</span>

            <h2>Compliant</h2>

            <p>Next Inspection</p>

            <strong>August 12, 2026</strong>
          </div>
        </section>

        {/* SUMMARY */}
        <section className="summary-grid">
          <div className="summary-card">
            <FaClipboardCheck className="summary-icon" />
            <h3>Devices</h3>
            <h2>3</h2>
            <p>Registered assemblies</p>
          </div>

          <div className="summary-card">
            <FaCalendarAlt className="summary-icon" />
            <h3>Appointments</h3>
            <h2>1</h2>
            <p>Upcoming inspection</p>
          </div>

          <div className="summary-card">
            <FaBell className="summary-icon" />
            <h3>Alerts</h3>
            <h2>2</h2>
            <p>Unread notifications</p>
          </div>

          <div className="summary-card">
            <FaFileAlt className="summary-icon" />
            <h3>Documents</h3>
            <h2>8</h2>
            <p>Reports & files</p>
          </div>
        </section>

        {/* MAIN GRID */}
        <section className="dashboard-main">
          {/* QUICK ACTIONS */}
          <div className="dashboard-card">
            <h2>Quick Actions</h2>

            <Link to="/my-devices" className="action-row">
              <FaTint />
              <span>My Devices</span>
              <FaArrowRight className="arrow" />
            </Link>

            <Link to="/schedule-inspection" className="action-row">
              <FaCalendarAlt />
              <span>Schedule Inspection</span>
              <FaArrowRight className="arrow" />
            </Link>

            <Link to="/documents" className="action-row">
              <FaFileAlt />
              <span>Upload Documents</span>
              <FaArrowRight className="arrow" />
            </Link>

            <Link to="/notifications" className="action-row">
              <FaBell />
              <span>Notifications</span>
              <FaArrowRight className="arrow" />
            </Link>
          </div>

          {/* NEXT INSPECTION */}
          <div className="dashboard-card inspection-card">
            <div className="inspection-top">
              <FaClock className="inspection-icon" />

              <div>
                <h2>Upcoming Inspection</h2>
                <p>Domestic Backflow Assembly</p>
              </div>
            </div>

            <div className="inspection-details">
              <div>
                <span>Date</span>
                <strong>August 12, 2026</strong>
              </div>

              <div>
                <span>Time</span>
                <strong>8:30 AM</strong>
              </div>

              <div>
                <span>Status</span>
                <strong className="status-green">Confirmed</strong>
              </div>
            </div>

            <Link
              to="/schedule-inspection"
              className="btn btn-primary full-btn"
            >
              Manage Appointment
            </Link>
          </div>
        </section>

        {/* LOWER GRID */}
        <section className="dashboard-bottom">
          <div className="dashboard-card">
            <h2>Compliance</h2>

            <div className="compliance-box">
              <FaCheckCircle className="compliance-icon" />

              <div>
                <h3>You're In Compliance</h3>

                <p>
                  Your device has passed inspection and no additional action is
                  required at this time.
                </p>
              </div>
            </div>
          </div>

          <div className="dashboard-card">
            <h2>Recent Activity</h2>

            <div className="activity-row">
              <span>Inspection Passed</span>
              <small>Jul 10</small>
            </div>

            <div className="activity-row">
              <span>Annual Report Uploaded</span>
              <small>Jul 8</small>
            </div>

            <div className="activity-row">
              <span>Reminder Email Sent</span>
              <small>Jul 1</small>
            </div>

            <div className="activity-row">
              <span>Device Updated</span>
              <small>Jun 28</small>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default CustomerDashboard;