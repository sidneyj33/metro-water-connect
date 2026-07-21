import Layout from "../components/Layout";
import "../Dashboard.css";
import { useNavigate } from "react-router-dom";
import { MdSupportAgent } from "react-icons/md";

function InspectionHistory() {
  const navigate = useNavigate();

  const inspections = [
    {
      date: "05/12/2026",
      assembly: "BA-10254",
      deviceType: "Double Check Valve Assembly",
      inspector: "J. Brown",
      status: "Passed",
    },
    {
      date: "05/10/2025",
      assembly: "BA-10254",
      deviceType: "Double Check Valve Assembly",
      inspector: "M. Smith",
      status: "Passed",
    },
    {
      date: "05/08/2024",
      assembly: "BA-10254",
      deviceType: "Double Check Valve Assembly",
      inspector: "K. Davis",
      status: "Repairs Needed",
    },
  ];

  const latestInspection = inspections[0];

  return (
    <Layout>
      <div className="customer-dashboard">

        {/* Hero */}
        <section className="dashboard-hero">
          <h1 className="dashboard-title">Inspection History</h1>

          <p className="dashboard-subtitle">
            Review your previous backflow inspections and compliance history.
          </p>
        </section>

        {/* Latest Inspection */}
        <h2 className="dashboard-section-title">
          Latest Inspection Summary
        </h2>

        <div className="summary-grid">
          <div className="summary-card">

            <p style={{ marginBottom: "20px" }}>
              Your most recent backflow inspection was completed successfully.
            </p>

            <p>
              <strong>Current Status</strong>
            </p>

            <p style={{ marginBottom: "25px" }}>
              <span className="status compliant">
                Compliant
              </span>
            </p>

            <table style={{ width: "100%" }}>
              <tbody>
                <tr>
                  <td><strong>Inspection Date</strong></td>
                  <td>{latestInspection.date}</td>
                </tr>

                <tr>
                  <td><strong>Assembly ID</strong></td>
                  <td>{latestInspection.assembly}</td>
                </tr>

                <tr>
                  <td><strong>Device Type</strong></td>
                  <td>{latestInspection.deviceType}</td>
                </tr>

                <tr>
                  <td><strong>Inspector</strong></td>
                  <td>{latestInspection.inspector}</td>
                </tr>

                <tr>
                  <td><strong>Inspection Result</strong></td>
                  <td>{latestInspection.status}</td>
                </tr>

                <tr>
                  <td><strong>Next Inspection Due</strong></td>
                  <td>05/12/2027</td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>

        {/* Inspection Records */}
        <h2 className="dashboard-section-title">
          Inspection Records
        </h2>

        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th scope="col">Inspection Date</th>
                <th scope="col">Assembly ID</th>
                <th scope="col">Inspector</th>
                <th scope="col">Status</th>
              </tr>
            </thead>

            <tbody>
              {inspections.map((inspection, index) => (
                <tr key={index}>
                  <td>{inspection.date}</td>
                  <td>{inspection.assembly}</td>
                  <td>{inspection.inspector}</td>
                  <td>
                    <span
                      className={`status ${
                        inspection.status === "Passed"
                          ? "compliant"
                          : "info"
                      }`}
                    >
                      {inspection.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Need Assistance */}
        <h2 className="dashboard-section-title">
          Need Assistance?
        </h2>

        <section className="inspection-banner">
          <div>
            <h2>Questions about your inspection?</h2>

            <p>
              Contact Metro Water Customer Service for assistance with your
              inspection, compliance status, or next steps.
            </p>

            <button
              className="primary-btn"
              style={{
                marginTop: "20px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
              onClick={() => navigate("/contact")}
            >
              <MdSupportAgent size={22} />
              Contact Metro Water
            </button>
          </div>
        </section>

      </div>
    </Layout>
  );
}

export default InspectionHistory;