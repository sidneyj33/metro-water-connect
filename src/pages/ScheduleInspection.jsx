import { Link } from "react-router-dom";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";
import Layout from "../components/Layout";
import "../styles/ScheduleInspection.css";

function ScheduleInspection() {
  const dates = [
    "Mon\nAug 10",
    "Tue\nAug 11",
    "Wed\nAug 12",
    "Thu\nAug 13",
    "Fri\nAug 14",
  ];

  const times = [
    "7:30 AM",
    "8:30 AM",
    "9:30 AM",
    "10:30 AM",
    "12:30 PM",
    "1:30 PM",
    "4:00 PM",
    "5:00 PM",
  ];

  return (
    <Layout>
      <main className="schedule-page">
        {/* Header */}
        <section className="schedule-header">
          <div>
            <span className="page-badge">Metro Water Connect</span>

            <h1>Schedule Inspection</h1>

            <p>
              Choose your device, inspection type, preferred date, and available
              appointment time.
            </p>
          </div>

          <div className="status-box">
            <FaCheckCircle />

            <div>
              <span>Current Status</span>
              <strong>Compliant</strong>
            </div>
          </div>
        </section>

        <section className="schedule-grid">
          {/* LEFT COLUMN */}
          <div className="schedule-card">
            <h2>Inspection Information</h2>

            <label>Device</label>

            <select>
              <option>Domestic Irrigation System</option>
              <option>Fire Sprinkler System</option>
              <option>Commercial Backflow</option>
            </select>

            <label>Inspection Type</label>

            <div className="radio-group">
              <label>
                <input type="radio" name="type" defaultChecked />
                Annual Test
              </label>

              <label>
                <input type="radio" name="type" />
                Retest
              </label>

              <label>
                <input type="radio" name="type" />
                New Installation
              </label>
            </div>

            <label>Property Address</label>

            <div className="info-box">
              <FaMapMarkerAlt />
              123 Main Street • Nashville, TN
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="schedule-card">
            <h2>Available Dates</h2>

            <div className="date-grid">
              {dates.map((date) => (
                <button key={date} className="date-btn">
                  {date.split("\n")[0]}
                  <small>{date.split("\n")[1]}</small>
                </button>
              ))}
            </div>

            <h2 className="times-title">Available Times</h2>

            <div className="time-grid">
              {times.map((time) => (
                <button key={time} className="time-btn">
                  <FaClock />
                  {time}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Summary */}
        <section className="summary-card">
          <h2>Appointment Summary</h2>

          <div className="summary-grid">
            <div>
              <span>Device</span>
              <strong>Domestic Irrigation</strong>
            </div>

            <div>
              <span>Inspection</span>
              <strong>Annual Test</strong>
            </div>

            <div>
              <span>Date</span>
              <strong>August 12, 2026</strong>
            </div>

            <div>
              <span>Time</span>
              <strong>8:30 AM</strong>
            </div>

            <div>
              <span>Duration</span>
              <strong>30 Minutes</strong>
            </div>

            <div>
              <span>Status</span>
              <strong className="green">Ready to Schedule</strong>
            </div>
          </div>

          <div className="summary-buttons">
            <button className="btn btn-primary">
              Confirm Appointment
            </button>

            <Link to="/customer" className="btn btn-secondary">
              Cancel
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default ScheduleInspection;