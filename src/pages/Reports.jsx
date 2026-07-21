import Layout from "../components/Layout";
import "../Dashboard.css";

function Reports() {
  const kpis = [
    {
      title: "Compliance Rate",
      value: "98.4%",
      change: "▲ +1.2%",
    },
    {
      title: "Past Due Devices",
      value: "18",
      change: "▼ -4",
    },
    {
      title: "Inspections This Month",
      value: "426",
      change: "▲ +37",
    },
    {
      title: "Failed Tests",
      value: "12",
      change: "▼ -2",
    },
    {
      title: "Pending Reviews",
      value: "4",
      change: "Needs Review",
    },
    {
      title: "Avg Completion",
      value: "2.8 Days",
      change: "Excellent",
    },
  ];

  const inspectors = [
    {
      name: "Danielle",
      completed: 128,
      passRate: "99%",
      average: "9.4",
      onTime: "98%",
    },
    {
      name: "James",
      completed: 116,
      passRate: "96%",
      average: "8.8",
      onTime: "96%",
    },
    {
      name: "Chris",
      completed: 123,
      passRate: "98%",
      average: "9.1",
      onTime: "99%",
    },
  ];

  const activity = [
    "✅ John Smith inspection approved",
    "📅 ABC Apartments inspection scheduled",
    "📄 James uploaded annual test report",
    "⚠ Metro Church failed inspection",
    "👷 Danielle completed today's final inspection",
  ];

  const insights = [
    "Compliance increased 1.2% compared to last month.",
    "Travel mileage decreased 12% this week.",
    "Three repeat failures may require assembly replacement.",
    "Four reports are awaiting supervisor approval.",
    "Danielle completed the most inspections this month.",
  ];

  const revenue = [
    {
      title: "Annual Tests",
      amount: "$42,350",
    },
    {
      title: "Retests",
      amount: "$8,240",
    },
    {
      title: "After Hours",
      amount: "$1,450",
    },
    {
      title: "Extensions",
      amount: "$520",
    },
  ];

  const meters = [
    {
      label: "Compliance",
      value: 98,
    },
    {
      label: "On-Time Completion",
      value: 93,
    },
    {
      label: "Document SLA",
      value: 96,
    },
    {
      label: "Route Efficiency",
      value: 91,
    },
  ];

  return (
    <Layout>
      <div className="customer-dashboard">

        <section className="dashboard-hero">
          <h1 className="dashboard-title">
            Operations Analytics Dashboard
          </h1>

          <p className="dashboard-subtitle">
            Monitor compliance, inspector performance, operational trends,
            and overall program health.
          </p>
        </section>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "25px",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          <select
            style={{
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <option>This Month</option>
            <option>This Week</option>
            <option>Today</option>
            <option>This Year</option>
          </select>

          <div
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <button className="action-card">
              Export PDF
            </button>

            <button className="action-card">
              Export Excel
            </button>
          </div>
        </div>

        <div className="summary-grid">
          {kpis.map((card) => (
            <div
              className="summary-card"
              key={card.title}
              style={{ cursor: "pointer" }}
            >
              <h3>{card.title}</h3>

              <h2>{card.value}</h2>

              <p>{card.change}</p>
            </div>
          ))}
        </div>

        <h2 className="dashboard-section-title">
          Operational Performance
        </h2>

        <div className="summary-grid">
          {meters.map((meter) => (
            <div
              className="summary-card"
              key={meter.label}
            >
              <h3>{meter.label}</h3>

              <div
                style={{
                  width: "100%",
                  height: "16px",
                  background: "#e5e7eb",
                  borderRadius: "10px",
                  overflow: "hidden",
                  marginTop: "20px",
                  marginBottom: "15px",
                }}
              >
                <div
                  style={{
                    width: `${meter.value}%`,
                    height: "100%",
                    background: "#7c3aed",
                  }}
                />
              </div>

              <strong>{meter.value}%</strong>
            </div>
          ))}
        </div>

        <h2 className="dashboard-section-title">
          Inspector Performance
        </h2>

        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>Inspector</th>
                <th>Completed</th>
                <th>Pass Rate</th>
                <th>Avg / Day</th>
                <th>On Time</th>
              </tr>
            </thead>

            <tbody>
              {inspectors.map((person) => (
                <tr
                  key={person.name}
                  style={{ cursor: "pointer" }}
                >
                  <td>{person.name}</td>
                  <td>{person.completed}</td>
                  <td>{person.passRate}</td>
                  <td>{person.average}</td>
                  <td>{person.onTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="dashboard-section-title">
          Revenue Snapshot
        </h2>

        <div className="summary-grid">
          {revenue.map((item) => (
            <div
              className="summary-card"
              key={item.title}
            >
              <h3>{item.title}</h3>

              <h2>{item.amount}</h2>
            </div>
          ))}
        </div>

        <h2 className="dashboard-section-title">
          Recent Activity
        </h2>

        <div className="table-card">
          {activity.map((item, index) => (
            <p
              key={index}
              style={{
                padding: "12px 0",
                borderBottom: "1px solid #eee",
              }}
            >
              {item}
            </p>
          ))}
        </div>

        <h2 className="dashboard-section-title">
          Operational Insights
        </h2>

        <div className="table-card">
          {insights.map((item, index) => (
            <p
              key={index}
              style={{
                padding: "12px 0",
              }}
            >
              • {item}
            </p>
          ))}
        </div>

      </div>
    </Layout>
  );
}

export default Reports;