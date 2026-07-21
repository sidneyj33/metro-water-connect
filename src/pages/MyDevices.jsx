import { Link } from "react-router-dom";
import {
  FaTint,
  FaCheckCircle,
  FaClock,
  FaSearch,
  FaEye,
  FaPlus,
} from "react-icons/fa";
import Layout from "../components/Layout";
import "../styles/MyDevices.css";

function MyDevices() {
  const devices = [
    {
      id: 1,
      name: "Domestic Irrigation",
      assembly: "BF-20485",
      manufacturer: "Watts",
      serial: "W909-183729",
      location: "Front Yard",
      lastInspection: "Jul 10, 2026",
      nextDue: "Aug 12, 2026",
      status: "Compliant",
    },
    {
      id: 2,
      name: "Fire Sprinkler System",
      assembly: "FS-11924",
      manufacturer: "Febco",
      serial: "FB11924",
      location: "Mechanical Room",
      lastInspection: "Jun 21, 2026",
      nextDue: "Sep 21, 2026",
      status: "Compliant",
    },
    {
      id: 3,
      name: "Commercial Backflow",
      assembly: "CM-44881",
      manufacturer: "Wilkins",
      serial: "ZK44881",
      location: "Rear Service Entrance",
      lastInspection: "May 30, 2026",
      nextDue: "Jul 30, 2026",
      status: "Inspection Due",
    },
  ];

  return (
    <Layout>
      <main className="devices-page">
        {/* Header */}
        <section className="devices-header">
          <div>
            <span className="page-badge">Metro Water Connect</span>

            <h1>My Devices</h1>

            <p>
              View and manage all registered backflow prevention assemblies
              connected to your account.
            </p>
          </div>

          <Link to="/schedule-inspection" className="btn btn-primary">
            <FaPlus />
            Schedule Inspection
          </Link>
        </section>

        {/* Search */}
        <section className="search-card">
          <FaSearch />

          <input
            type="text"
            placeholder="Search by assembly number, manufacturer, or location..."
          />
        </section>

        {/* Devices */}
        <section className="device-grid">
          {devices.map((device) => (
            <div className="device-card" key={device.id}>
              <div className="device-top">
                <div className="device-icon">
                  <FaTint />
                </div>

                <span
                  className={
                    device.status === "Compliant"
                      ? "status compliant"
                      : "status warning"
                  }
                >
                  {device.status}
                </span>
              </div>

              <h2>{device.name}</h2>

              <div className="device-info">
                <p>
                  <strong>Assembly:</strong> {device.assembly}
                </p>

                <p>
                  <strong>Manufacturer:</strong> {device.manufacturer}
                </p>

                <p>
                  <strong>Serial:</strong> {device.serial}
                </p>

                <p>
                  <strong>Location:</strong> {device.location}
                </p>
              </div>

              <div className="device-dates">
                <div>
                  <FaCheckCircle />
                  <span>Last Inspection</span>
                  <strong>{device.lastInspection}</strong>
                </div>

                <div>
                  <FaClock />
                  <span>Next Due</span>
                  <strong>{device.nextDue}</strong>
                </div>
              </div>

              <Link
                to={`/device-details/${device.id}`}
                className="device-button"
              >
                <FaEye />
                View Details
              </Link>
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
}

export default MyDevices;