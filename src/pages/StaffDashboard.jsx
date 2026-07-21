import Layout from "../components/Layout";
import "../Dashboard.css";

import {
  FiSearch,
  FiCalendar,
  FiClock,
  FiAlertTriangle,
  FiFileText,
  FiMapPin,
  FiClipboard,
  FiBarChart2,
  FiUsers,
} from "react-icons/fi";

function StaffDashboard() {
  return (
    <Layout>
      <div className="customer-dashboard">

        {/* Hero */}
        <section className="dashboard-hero">
          <h1 className="dashboard-title">
            Metro Water Operations Center
          </h1>

          <h2
            style={{
              marginTop: "8px",
              color: "#005a9c",
              fontWeight: "600",
            }}
          >
            Staff Dashboard
          </h2>

          <p className="dashboard-subtitle">
            Today's inspection workload, compliance activity, and department
            operations.
          </p>
        </section>

        {/* Search */}
        <h2 className="dashboard-section-title">
          Quick Customer Search
        </h2>

        <div
          className="table-card"
          style={{
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <FiSearch size={22} color="#005a9c" />

            <input
              type="text"
              placeholder="Search by Name, Address, Account #, or Assembly ID..."
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
                fontSize: "16px",
              }}
            />
          </div>
        </div>

        {/* Today's Operations */}

        <h2 className="dashboard-section-title">
          Today's Operations
        </h2>

        <div className="summary-grid">

          <div className="summary-card">
            <FiCalendar size={30} />
            <h3>Scheduled Inspections</h3>
            <p><strong>18</strong></p>
          </div>

          <div className="summary-card">
            <FiClock size={30} />
            <h3>Retests Due</h3>
            <p><strong>4</strong></p>
          </div>

          <div className="summary-card">
            <FiAlertTriangle size={30} />
            <h3>Past Due Devices</h3>
            <p><strong>27</strong></p>
          </div>

          <div className="summary-card">
            <FiFileText size={30} />
            <h3>Documents Pending</h3>
            <p><strong>6</strong></p>
          </div>

        </div>

        {/* Service Areas */}

        <h2 className="dashboard-section-title">
          Service Area Coverage
        </h2>

        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>Service Area</th>
                <th>Inspectors</th>
                <th>Today's Jobs</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Antioch</td>
                <td>2</td>
                <td>7</td>
                <td>
                  <span className="status compliant">
                    Ready
                  </span>
                </td>
              </tr>

              <tr>
                <td>Hermitage</td>
                <td>1</td>
                <td>5</td>
                <td>
                  <span className="status compliant">
                    Ready
                  </span>
                </td>
              </tr>

              <tr>
                <td>Donelson</td>
                <td>1</td>
                <td>6</td>
                <td>
                  <span className="status info">
                    In Progress
                  </span>
                </td>
              </tr>

              <tr>
                <td>Madison</td>
                <td>1</td>
                <td>4</td>
                <td>
                  <span className="status compliant">
                    Ready
                  </span>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        {/* Priority Queue */}

        <h2 className="dashboard-section-title">
          Priority Queue
        </h2>

        <div className="summary-grid">

          <div className="summary-card">
            <FiAlertTriangle size={28} />
            <h3>Failed Inspections</h3>
            <p>4 retests awaiting scheduling.</p>
          </div>

          <div className="summary-card">
            <FiClipboard size={28} />
            <h3>Extension Requests</h3>
            <p>3 requests pending approval.</p>
          </div>

          <div className="summary-card">
            <FiFileText size={28} />
            <h3>Documents</h3>
            <p>6 reports awaiting review.</p>
          </div>

          <div className="summary-card">
            <FiCalendar size={28} />
            <h3>Online Scheduling</h3>
            <p>3 new appointments received today.</p>
          </div>

        </div>

        {/* Quick Actions */}

        <h2 className="dashboard-section-title">
          Quick Actions
        </h2>

        <div className="actions-grid">

          <button className="action-card">
            <FiSearch size={34} />
            <span>Customer Search</span>
          </button>

          <button className="action-card">
            <FiClipboard size={34} />
            <span>Assign Inspections</span>
          </button>

          <button className="action-card">
            <FiMapPin size={34} />
            <span>Route Planner</span>
          </button>

          <button className="action-card">
            <FiFileText size={34} />
            <span>Review Documents</span>
          </button>

          <button className="action-card">
            <FiUsers size={34} />
            <span>Manage Inspectors</span>
          </button>

          <button className="action-card">
            <FiBarChart2 size={34} />
            <span>Reports</span>
          </button>

        </div>

      </div>
    </Layout>
  );
}

export default StaffDashboard;