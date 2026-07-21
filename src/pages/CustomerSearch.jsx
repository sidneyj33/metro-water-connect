import Layout from "../components/Layout";
import "../Dashboard.css";
import { FiSearch, FiFilter } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function CustomerSearch() {
  const navigate = useNavigate();

  const customers = [
    {
      name: "John Smith",
      account: "1002458",
      address: "123 Main St",
      assemblyId: "BF-10254",
      dueDate: "08/14/2026",
      status: "Compliant",
      phone: "(615) 555-1234",
      email: "johnsmith@email.com",
      city: "Nashville, TN",
      type: "Domestic",
      manufacturer: "Watts",
      model: "009M3",
      size: '2"',
      location: "Mechanical Room",
    },
    {
      name: "ABC Apartments",
      account: "1006542",
      address: "400 Oak Ave",
      assemblyId: "BF-11842",
      dueDate: "07/30/2026",
      status: "Due Soon",
      phone: "(615) 555-2222",
      email: "office@abcapartments.com",
      city: "Nashville, TN",
      type: "Domestic",
      manufacturer: "Wilkins",
      model: "975XL",
      size: '4"',
      location: "Utility Room",
    },
    {
      name: "Metro Church",
      account: "1009843",
      address: "18 Pine Rd",
      assemblyId: "BF-09312",
      dueDate: "06/22/2026",
      status: "Past Due",
      phone: "(615) 555-3333",
      email: "office@metrochurch.org",
      city: "Nashville, TN",
      type: "Fire",
      manufacturer: "Febco",
      model: "860",
      size: '6"',
      location: "Basement",
    },
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "Compliant":
        return "compliant";
      case "Due Soon":
        return "warning";
      default:
        return "overdue";
    }
  };

  return (
    <Layout>
      <div className="customer-dashboard">

        <section className="dashboard-hero">
          <h1 className="dashboard-title">Customer Search</h1>

          <p className="dashboard-subtitle">
            Search by customer name, account number, address, or assembly ID.
          </p>
        </section>

        <h2 className="dashboard-section-title">
          Find a Customer
        </h2>

        <div
          className="table-card"
          style={{ marginBottom: "30px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "20px",
            }}
          >
            <FiSearch size={22} color="#005a9c" />

            <input
              type="text"
              placeholder="Search by customer name, account number, address, or assembly ID..."
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
                fontSize: "16px",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <button className="action-card">
              <FiFilter />
              Status
            </button>

            <button className="action-card">
              <FiFilter />
              Service Area
            </button>

            <button className="action-card">
              <FiFilter />
              Assembly Type
            </button>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "12px",
          }}
        >
          <h2 className="dashboard-section-title">
            Search Results
          </h2>

          <span
            style={{
              color: "#6b7280",
              fontWeight: "600",
            }}
          >
            Showing 1–3 of 3,842 customers
          </span>
        </div>

        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Account #</th>
                <th>Address</th>
                <th>Assembly ID</th>
                <th>Due Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {customers.map((customer) => (
                <tr
                  key={customer.account}
                  style={{ cursor: "pointer" }}
                  title="Open Customer Profile"
                  onClick={() =>
                    navigate("/customer-profile", {
                      state: { customer },
                    })
                  }
                >
                  <td>{customer.name}</td>
                  <td>{customer.account}</td>
                  <td>{customer.address}</td>
                  <td>{customer.assemblyId}</td>
                  <td>{customer.dueDate}</td>
                  <td>
                    <span
                      className={`status ${getStatusClass(customer.status)}`}
                    >
                      {customer.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </Layout>
  );
}

export default CustomerSearch;