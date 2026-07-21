import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import "../Dashboard.css";

function NotificationCenter() {
  const navigate = useNavigate();

  const initialNotifications = [
    {
      id: 1,
      type: "Action Required",
      icon: "🔴",
      customer: "Metro Church",
      title: "Inspection Failed",
      message: "Retest required within 14 days.",
      time: "15 minutes ago",
      status: "Unread",
      action: "/customer-profile",
    },
    {
      id: 2,
      type: "Completed",
      icon: "🟢",
      customer: "John Smith",
      title: "Report Approved",
      message: "Compliance has been updated.",
      time: "32 minutes ago",
      status: "Unread",
      action: "/customer-profile",
    },
    {
      id: 3,
      type: "Information",
      icon: "🔵",
      customer: "ABC Apartments",
      title: "Inspection Scheduled",
      message: "Appointment confirmed for July 28.",
      time: "1 hour ago",
      status: "Unread",
      action: "/route-planner",
    },
    {
      id: 4,
      type: "Completed",
      icon: "🟢",
      customer: "West Medical Center",
      title: "Route Completed",
      message: "Inspector Danielle completed today's route.",
      time: "2 hours ago",
      status: "Read",
      action: "/route-planner",
    },
    {
      id: 5,
      type: "Action Required",
      icon: "🟡",
      customer: "City Hall",
      title: "Document Correction Requested",
      message: "Supervisor requested report corrections.",
      time: "3 hours ago",
      status: "Unread",
      action: "/document-review",
    },
    {
      id: 6,
      type: "Information",
      icon: "🔵",
      customer: "Green Valley Apartments",
      title: "Customer Scheduled",
      message: "Customer booked an inspection online.",
      time: "Yesterday",
      status: "Read",
      action: "/schedule-inspection",
    },
  ];

  const [notifications, setNotifications] = useState(initialNotifications);
  const [selected, setSelected] = useState(initialNotifications[0]);
  const [filter, setFilter] = useState("All");

  const filteredNotifications = notifications.filter((notification) => {
    if (filter === "All") return true;
    if (filter === "Unread") return notification.status === "Unread";
    return notification.type === filter;
  });

  const markAsRead = () => {
    if (!selected) return;

    const updated = notifications.map((notification) =>
      notification.id === selected.id
        ? { ...notification, status: "Read" }
        : notification
    );

    setNotifications(updated);

    setSelected({
      ...selected,
      status: "Read",
    });
  };

  const unreadCount = notifications.filter(
    (notification) => notification.status === "Unread"
  ).length;

  const actionRequired = notifications.filter(
    (notification) => notification.type === "Action Required"
  ).length;

  const completedToday = notifications.filter(
    (notification) => notification.type === "Completed"
  ).length;

  const archived = 214;

  return (
    <Layout>
      <div className="customer-dashboard">

        <section className="dashboard-hero">
          <h1 className="dashboard-title">
            Notification Center
          </h1>

          <p className="dashboard-subtitle">
            Stay informed about inspections, approvals, failures,
            scheduling activity, and operational events.
          </p>
        </section>

        <div className="summary-grid">

          <div className="summary-card">
            <h3>Unread</h3>
            <h2>{unreadCount}</h2>
          </div>

          <div className="summary-card">
            <h3>Action Required</h3>
            <h2>{actionRequired}</h2>
          </div>

          <div className="summary-card">
            <h3>Completed Today</h3>
            <h2>{completedToday}</h2>
          </div>

          <div className="summary-card">
            <h3>Archived</h3>
            <h2>{archived}</h2>
          </div>

        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            margin: "25px 0",
            flexWrap: "wrap",
          }}
        >
          {[
            "All",
            "Unread",
            "Action Required",
            "Completed",
            "Information",
          ].map((item) => (
            <button
              key={item}
              className="action-card"
              onClick={() => setFilter(item)}
              style={{
                background:
                  filter === item ? "#0b5cab" : "",
                color:
                  filter === item ? "white" : "",
              }}
            >
              {item}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "25px",
          }}
        >

          <div className="table-card">

            <h2 className="dashboard-section-title">
              Notifications
            </h2>

            {filteredNotifications.map((notification) => (
              <div
                key={notification.id}
                onClick={() => setSelected(notification)}
                style={{
                  cursor: "pointer",
                  padding: "18px",
                  marginBottom: "15px",
                  borderRadius: "10px",
                  background:
                    selected?.id === notification.id
                      ? "#eef5ff"
                      : "#fff",
                  border:
                    notification.status === "Unread"
                      ? "2px solid #0b5cab"
                      : "1px solid #ddd",
                }}
              >
                <strong>
                  {notification.icon} {notification.title}
                </strong>

                <p>{notification.customer}</p>

                <p>{notification.message}</p>

                <small>{notification.time}</small>
              </div>
            ))}

          </div>

          <div className="table-card">

            <h2 className="dashboard-section-title">
              Notification Details
            </h2>

            {selected && (
              <>
                <p><strong>Customer</strong></p>
                <p>{selected.customer}</p>

                <br />

                <p><strong>Category</strong></p>
                <p>{selected.type}</p>

                <br />

                <p><strong>Status</strong></p>
                <p>{selected.status}</p>

                <br />

                <p><strong>Description</strong></p>
                <p>{selected.message}</p>

                <br />

                <div
                  style={{
                    display: "flex",
                    gap: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  <button
                    className="action-card"
                    onClick={() => navigate(selected.action)}
                  >
                    View
                  </button>

                  <button
                    className="action-card"
                    onClick={markAsRead}
                  >
                    Mark Read
                  </button>
                </div>
              </>
            )}

          </div>

        </div>

      </div>
    </Layout>
  );
}

export default NotificationCenter;