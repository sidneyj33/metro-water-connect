import { Link } from "react-router-dom";
import {
  FaSearch,
  FaEye,
  FaCheckCircle,
  FaClock,
  FaExclamationTriangle,
} from "react-icons/fa";
import Layout from "../components/Layout";
import "../styles/ComplianceQueue.css";

function ComplianceQueue() {
  const inspections = [
    {
      id: 1,
      customer: "John Smith",
      device: "Domestic Irrigation",
      due: "Aug 12, 2026",
      status: "Scheduled",
    },
    {
      id: 2,
      customer: "ABC Apartments",
      device: "Fire Sprinkler",
      due: "Aug 13, 2026",
      status: "Retest",
    },
    {
      id: 3,
      customer: "City Market",
      device: "Commercial Backflow",
      due: "Aug 14, 2026",
      status: "Past Due",
    },
    {
      id: 4,
      customer: "Green Hills Office",
      device: "Domestic",
      due: "Aug 15, 2026",
      status: "Scheduled",
    },
  ];

  return (
    <Layout>
      <main className="queue-page">

        <section className="queue-header">
          <div>
            <span className="page-badge">Employee Portal</span>

            <h1>Compliance Queue</h1>

            <p>
              Review scheduled inspections, retests, and past due devices.
            </p>
          </div>
        </section>

        <section className="queue-search">
          <FaSearch />
          <input
            type="text"
            placeholder="Search customer, address, account or assembly..."
          />
        </section>

        <section className="queue-table">

          <div className="table-header">
            <span>Customer</span>
            <span>Device</span>
            <span>Due Date</span>
            <span>Status</span>
            <span>Action</span>
          </div>

          {inspections.map((item) => (
            <div className="table-row" key={item.id}>

              <span>{item.customer}</span>

              <span>{item.device}</span>

              <span>{item.due}</span>

              <span>
                {item.status === "Scheduled" && (
                  <span className="badge scheduled">
                    <FaClock /> Scheduled
                  </span>
                )}

                {item.status === "Retest" && (
                  <span className="badge retest">
                    <FaExclamationTriangle /> Retest
                  </span>
                )}

                {item.status === "Past Due" && (
                  <span className="badge pastdue">
                    <FaCheckCircle /> Past Due
                  </span>
                )}
              </span>

              <Link
                to="/device-details"
                className="view-btn"
              >
                <FaEye />
                View
              </Link>

            </div>
          ))}

        </section>

      </main>
    </Layout>
  );
}

export default ComplianceQueue;