import Layout from "../components/Layout";
import "../Dashboard.css";

function Customer360() {
  const history = [
    {
      year: "2026",
      result: "✅ Passed",
      inspector: "Danielle",
      report: "Annual Test Report",
    },
    {
      year: "2025",
      result: "✅ Passed",
      inspector: "James",
      report: "Annual Test Report",
    },
    {
      year: "2024",
      result: "❌ Failed",
      inspector: "Chris",
      report: "Failed Inspection",
    },
    {
      year: "2024",
      result: "✅ Retest Passed",
      inspector: "Chris",
      report: "Retest Report",
    },
  ];

  const documents = [
    "Annual Test Report",
    "Repair Documentation",
    "Inspection Photos",
    "Backflow Permit",
  ];

  const timeline = [
    "Inspection Requested",
    "Inspection Scheduled",
    "Inspector Assigned",
    "Inspection Completed",
    "Report Uploaded",
    "Supervisor Approved",
    "Compliance Updated",
  ];

  const communications = [
    "Reminder Email Sent",
    "SMS Appointment Reminder",
    "Inspection Completed",
    "Compliance Updated",
  ];

  return (
    <Layout>
      <div className="customer-dashboard">

        <section className="dashboard-hero">
          <h1 className="dashboard-title">
            Customer 360
          </h1>

          <p className="dashboard-subtitle">
            Everything about this customer in one place.
          </p>
        </section>

        <div className="summary-grid">

          <div className="summary-card">
            <h3>Customer</h3>
            <h2>John Smith</h2>
            <p>Residential Customer</p>
          </div>

          <div className="summary-card">
            <h3>Status</h3>
            <h2>🟢 Compliant</h2>
            <p>Next Inspection July 21, 2027</p>
          </div>

          <div className="summary-card">
            <h3>Assembly</h3>
            <h2>BF-10254</h2>
            <p>Watts 009M3QT</p>
          </div>

          <div className="summary-card">
            <h3>Inspector</h3>
            <h2>Danielle</h2>
            <p>Last Inspection</p>
          </div>

        </div>

        <h2 className="dashboard-section-title">
          Inspection Timeline
        </h2>

        <div className="table-card">
          {timeline.map((step, index) => (
            <div
              key={step}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <div
                style={{
                  width: "18px",
                  height: "18px",
                  borderRadius: "50%",
                  background:
                    index === timeline.length - 1
                      ? "#16a34a"
                      : "#0b5cab",
                  marginRight: "15px",
                }}
              />

              <strong>{step}</strong>
            </div>
          ))}
        </div>

        <h2 className="dashboard-section-title">
          Inspection History
        </h2>

        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>Year</th>
                <th>Result</th>
                <th>Inspector</th>
                <th>Report</th>
              </tr>
            </thead>

            <tbody>
              {history.map((item) => (
                <tr key={item.year + item.report}>
                  <td>{item.year}</td>
                  <td>{item.result}</td>
                  <td>{item.inspector}</td>
                  <td>{item.report}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="summary-grid">

          <div className="table-card">

            <h2>Device Information</h2>

            <p><strong>Manufacturer:</strong> Watts</p>
            <p><strong>Model:</strong> 009M3QT</p>
            <p><strong>Serial:</strong> A783421</p>
            <p><strong>Location:</strong> Mechanical Room</p>

          </div>

          <div className="table-card">

            <h2>Documents</h2>

            {documents.map((doc) => (
              <p key={doc}>📄 {doc}</p>
            ))}

          </div>

        </div>

        <div className="summary-grid">

          <div className="table-card">

            <h2>Communication History</h2>

            {communications.map((item) => (
              <p key={item}>📧 {item}</p>
            ))}

          </div>

          <div className="table-card">

            <h2>Upcoming Appointment</h2>

            <p><strong>Date:</strong> July 21, 2027</p>
            <p><strong>Time:</strong> 8:30 AM</p>
            <p><strong>Inspector:</strong> Danielle</p>
            <p><strong>Status:</strong> Scheduled</p>

          </div>

        </div>

        <h2 className="dashboard-section-title">
          Quick Actions
        </h2>

        <div className="summary-grid">

          <button className="action-card">
            Schedule Inspection
          </button>

          <button className="action-card">
            Upload Document
          </button>

          <button className="action-card">
            View Route
          </button>

          <button className="action-card">
            Print History
          </button>

          <button className="action-card">
            Send Email
          </button>

          <button className="action-card">
            Generate Letter
          </button>

        </div>

      </div>
    </Layout>
  );
}

export default Customer360;