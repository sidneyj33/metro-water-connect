import Layout from "../components/Layout";
import {
  FaRoute,
  FaMapMarkerAlt,
  FaClock,
  FaCar,
  FaCheckCircle,
} from "react-icons/fa";
import "../styles/RoutePlanner.css";

function RoutePlanner() {
  const stops = [
    {
      time: "8:30 AM",
      customer: "John Smith",
      device: "Domestic Irrigation",
      address: "123 Main St",
      status: "Scheduled",
    },
    {
      time: "9:30 AM",
      customer: "ABC Apartments",
      device: "Fire Sprinkler System",
      address: "455 Elm St",
      status: "Scheduled",
    },
    {
      time: "10:30 AM",
      customer: "City Market",
      device: "Commercial Backflow",
      address: "700 Bell Rd",
      status: "Scheduled",
    },
    {
      time: "1:30 PM",
      customer: "Metro Business Center",
      device: "Domestic Assembly",
      address: "915 Murfreesboro Pike",
      status: "Scheduled",
    },
  ];

  return (
    <Layout>
      <main className="route-page">
        {/* Header */}
        <section className="route-header">
          <div>
            <span className="page-badge">Employee Portal</span>

            <h1>Route Planner</h1>

            <p>
              Optimized inspection route based on customer appointments,
              inspector availability, and service area.
            </p>
          </div>

          <div className="optimization-card">
            <FaRoute />

            <div>
              <span>Today's Route</span>
              <strong>Optimized</strong>
              <small>Sample optimized route for demonstration purposes</small>
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="metrics-grid">
          <div className="metric-card">
            <FaCheckCircle />
            <h2>8</h2>
            <p>Scheduled Inspections</p>
          </div>

          <div className="metric-card">
            <FaClock />
            <h2>42 min</h2>
            <p>Estimated Drive Time</p>
          </div>

          <div className="metric-card">
            <FaCar />
            <h2>24.6 mi</h2>
            <p>Total Mileage</p>
          </div>

          <div className="metric-card">
            <FaRoute />
            <h2>96%</h2>
            <p>Route Efficiency</p>
          </div>
        </section>

        {/* Main Layout */}
        <section className="route-grid">
          <div className="route-card">
            <h2>Today's Inspection Route</h2>

            {stops.map((stop, index) => (
              <div className="stop-card" key={index}>
                <div className="stop-number">{index + 1}</div>

                <div className="stop-info">
                  <h3>{stop.customer}</h3>

                  <p>{stop.device}</p>

                  <span>
                    <FaClock /> {stop.time}
                  </span>

                  <span>
                    <FaMapMarkerAlt /> {stop.address}
                  </span>
                </div>

                <div className="stop-status">
                  <span>{stop.status}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="route-card">
            <h2>Today's Assignment</h2>

            <div className="assignment">
              <strong>Inspector</strong>
              <p>Mike Johnson</p>
            </div>

            <div className="assignment">
              <strong>Service Area</strong>
              <p>Antioch</p>
            </div>

            <div className="assignment">
              <strong>Shift</strong>
              <p>7:30 AM – 3:00 PM</p>
            </div>

            <div className="assignment">
              <strong>Lunch</strong>
              <p>11:00 AM – 12:00 PM</p>
            </div>

            <div className="assignment">
              <strong>Next Area</strong>
              <p>Donelson</p>
            </div>

            <div className="route-note">
              Routes are grouped by geographic area to reduce drive time,
              improve scheduling efficiency, and increase daily inspections.
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default RoutePlanner;