import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import "../styles/PageStyles.css";

function DeviceDetails() {
  const device = {
    type: "Domestic Irrigation System",
    status: "Compliant",
    assemblyNumber: "BF-20485",
    manufacturer: "Watts",
    model: "909RP",
    serialNumber: "W909-183729",
    size: '2"',
    installDate: "May 12, 2021",
    address: "1600 Riverside Drive, Nashville, TN 37216",
    lastInspection: "July 8, 2026",
    nextInspection: "July 8, 2027",
    frequency: "Annual",
    location: "Front Landscape Bed",
    owner: "John Smith",
    accountNumber: "ACC-482913",
    testDueIn: "353 Days",
  };

  const inspections = [
    {
      date: "July 8, 2026",
      result: "Passed",
      inspector: "Metro Water",
      report: "2026 Report",
    },
    {
      date: "July 6, 2025",
      result: "Passed",
      inspector: "Metro Water",
      report: "2025 Report",
    },
    {
      date: "July 5, 2024",
      result: "Passed",
      inspector: "Metro Water",
      report: "2024 Report",
    },
  ];

  return (
    <Layout>
      <div className="page-container">
        {/* Header */}

        <div className="page-header">
          <div>
            <h1>Backflow Device Details</h1>
            <p>{device.type}</p>
          </div>

          <span className="status-badge status-compliant">
            ✔ {device.status}
          </span>
        </div>

        {/* Compliance Overview */}

        <div className="card">
          <h2>Compliance Overview</h2>

          <div className="summary-grid">
            <div className="summary-card">
              <h3>Last Inspection</h3>
              <p>{device.lastInspection}</p>
            </div>

            <div className="summary-card">
              <h3>Next Inspection</h3>
              <p>{device.nextInspection}</p>
            </div>

            <div className="summary-card">
              <h3>Frequency</h3>
              <p>{device.frequency}</p>
            </div>

            <div className="summary-card">
              <h3>Days Remaining</h3>
              <p>{device.testDueIn}</p>
            </div>
          </div>
        </div>

        {/* Device Information */}

        <div className="card">
          <h2>Device Information</h2>

          <table className="history-table">
            <tbody>
              <tr>
                <td><strong>Assembly Number</strong></td>
                <td>{device.assemblyNumber}</td>
              </tr>

              <tr>
                <td><strong>Device Type</strong></td>
                <td>{device.type}</td>
              </tr>

              <tr>
                <td><strong>Manufacturer</strong></td>
                <td>{device.manufacturer}</td>
              </tr>

              <tr>
                <td><strong>Model</strong></td>
                <td>{device.model}</td>
              </tr>

              <tr>
                <td><strong>Serial Number</strong></td>
                <td>{device.serialNumber}</td>
              </tr>

              <tr>
                <td><strong>Size</strong></td>
                <td>{device.size}</td>
              </tr>

              <tr>
                <td><strong>Installation Date</strong></td>
                <td>{device.installDate}</td>
              </tr>

              <tr>
                <td><strong>Device Location</strong></td>
                <td>{device.location}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Property Information */}

        <div className="card">
          <h2>Property Information</h2>

          <table className="history-table">
            <tbody>
              <tr>
                <td><strong>Owner</strong></td>
                <td>{device.owner}</td>
              </tr>

              <tr>
                <td><strong>Account Number</strong></td>
                <td>{device.accountNumber}</td>
              </tr>

              <tr>
                <td><strong>Service Address</strong></td>
                <td>{device.address}</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Inspection History */}

        <div className="card">
          <h2>Inspection History</h2>

          <table className="history-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Result</th>
                <th>Inspector</th>
                <th>Report</th>
              </tr>
            </thead>

            <tbody>
              {inspections.map((inspection, index) => (
                <tr key={index}>
                  <td>{inspection.date}</td>

                  <td>
                    <span className="status-badge status-compliant">
                      ✔ {inspection.result}
                    </span>
                  </td>

                  <td>{inspection.inspector}</td>

                  <td>
                    <button className="secondary-btn">
                      📄 View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Inspection Reports */}

        <div className="card">
          <h2>Inspection Reports</h2>

          <div className="quick-actions">
            {inspections.map((inspection, index) => (
              <button
                key={index}
                className="primary-btn"
              >
                📄 {inspection.report}
              </button>
            ))}
          </div>
        </div>

        {/* Helpful Information */}

        <div className="card">
          <h2>Helpful Information</h2>

          <p style={{ marginBottom: "12px" }}>
            Backflow prevention assemblies help protect Nashville's drinking
            water by preventing contaminated water from flowing back into the
            public water system.
          </p>

          <p>
            Your device is currently <strong>compliant</strong>. Your next
            inspection is due on <strong>{device.nextInspection}</strong>.
            Scheduling early helps avoid missed compliance deadlines.
          </p>
        </div>

        {/* Quick Actions */}

        <div className="card">
          <h2>Quick Actions</h2>

          <div className="quick-actions">
            <Link to="/schedule-inspection">
              <button className="primary-btn">
                Schedule Inspection
              </button>
            </Link>

            <Link to="/contact">
              <button className="secondary-btn">
                Contact Cross Connection Control
              </button>
            </Link>

            <Link to="/my-devices">
              <button className="secondary-btn">
                Back to My Devices
              </button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DeviceDetails;