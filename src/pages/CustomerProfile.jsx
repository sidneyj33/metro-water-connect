import Layout from "../components/Layout";
import "../Dashboard.css";

import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiShield,
  FiCalendar,
  FiFileText,
  FiClock,
  FiPrinter,
} from "react-icons/fi";

import { useLocation } from "react-router-dom";

function CustomerProfile() {
  const location = useLocation();

  const customer = location.state?.customer || {
    name: "John Smith",
    account: "1002458",
    address: "123 Main Street",
    city: "Nashville, TN",
    phone: "(615) 555-1234",
    email: "johnsmith@email.com",
    status: "Compliant",
    assemblyId: "BF-10254",
    type: "Domestic",
    manufacturer: "Watts",
    model: "009M3",
    size: '2"',
    location: "Mechanical Room",
  };

  const statusClass =
    customer.status === "Compliant"
      ? "compliant"
      : customer.status === "Due Soon"
      ? "warning"
      : "overdue";

  return (
    <Layout>
      <div className="customer-dashboard">

        {/* Hero */}
        <section className="dashboard-hero">
          <h1 className="dashboard-title">
            Customer Profile
          </h1>

          <p className="dashboard-subtitle">
            View customer information, backflow assemblies, compliance, and
            inspection history.
          </p>
        </section>

        {/* Customer Information */}

        <h2 className="dashboard-section-title">
          Customer Information
        </h2>

        <div className="table-card">

          <h2 style={{ marginTop: 0 }}>
            {customer.name}
          </h2>

          <p>
            <strong>Account #:</strong> {customer.account}
          </p>

          <p>
            <FiShield />{" "}
            <span className={`status ${statusClass}`}>
              {customer.status}
            </span>
          </p>

          <p>
            <FiMapPin /> {customer.address}, {customer.city}
          </p>

          <p>
            <FiPhone /> {customer.phone}
          </p>

          <p>
            <FiMail /> {customer.email}
          </p>

        </div>

        {/* Compliance Snapshot */}

        <h2 className="dashboard-section-title">
          Compliance Snapshot
        </h2>

        <div className="summary-grid">

          <div className="summary-card">
            <FiCalendar size={28} />
            <h3>Last Inspection</h3>
            <p>07/18/2026</p>
          </div>

          <div className="summary-card">
            <FiClock size={28} />
            <h3>Next Due</h3>
            <p>07/18/2027</p>
          </div>

          <div className="summary-card">
            <FiShield size={28} />
            <h3>Status</h3>
            <p>{customer.status}</p>
          </div>

          <div className="summary-card">
            <FiFileText size={28} />
            <h3>Extension</h3>
            <p>None</p>
          </div>

        </div>

        {/* Backflow Assemblies */}

        <h2 className="dashboard-section-title">
          Backflow Assemblies
        </h2>

        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>Assembly ID</th>
                <th>Type</th>
                <th>Manufacturer</th>
                <th>Model</th>
                <th>Size</th>
                <th>Location</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>{customer.assemblyId}</td>
                <td>{customer.type}</td>
                <td>{customer.manufacturer}</td>
                <td>{customer.model}</td>
                <td>{customer.size}</td>
                <td>{customer.location}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Quick Actions */}

        <h2 className="dashboard-section-title">
          Quick Actions
        </h2>

        <div className="actions-grid">

          <button className="action-card">
            <FiCalendar size={32} />
            <span>Schedule Inspection</span>
          </button>

          <button className="action-card">
            <FiFileText size={32} />
            <span>Inspection History</span>
          </button>

          <button className="action-card">
            <FiMail size={32} />
            <span>Documents</span>
          </button>

          <button className="action-card">
            <FiPrinter size={32} />
            <span>Print Record</span>
          </button>

        </div>

      </div>
    </Layout>
  );
}

export default CustomerProfile;