import { useState } from "react";
import Layout from "../components/Layout";
import "../Dashboard.css";

import { MdSupportAgent } from "react-icons/md";
import {
  FiPhone,
  FiMail,
  FiClock,
  FiSend,
} from "react-icons/fi";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(
      "Thank you! Your message has been received. (Prototype)"
    );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const linkStyle = {
    color: "#005a9c",
    textDecoration: "none",
    fontWeight: "600",
    overflowWrap: "anywhere",
    wordBreak: "break-word",
  };

  return (
    <Layout>
      <div className="customer-dashboard">

        {/* Hero */}

        <section className="dashboard-hero">
          <h1 className="dashboard-title">
            Contact Metro Water
          </h1>

          <p className="dashboard-subtitle">
            We're here to help with questions about your backflow
            assemblies, inspections, compliance status, scheduling,
            and Cross Connection Control Program requirements.
          </p>
        </section>

        {/* Customer Service */}

        <h2 className="dashboard-section-title">
          Customer Service
        </h2>

        <div className="summary-grid">

          <div
            className="summary-card"
            style={{ textAlign: "center" }}
          >
            <FiPhone size={34} color="#005a9c" />

            <h3>Phone</h3>

            <p>
              <a
                href="tel:6158624872"
                style={linkStyle}
              >
                (615) 862-4872
              </a>
            </p>
          </div>

          <div
            className="summary-card"
            style={{ textAlign: "center" }}
          >
            <FiMail size={34} color="#005a9c" />

            <h3>Email</h3>

            <p>
              <a
                href="mailto:MWSCrossConnection@Nashville.gov"
                style={linkStyle}
              >
                MWSCrossConnection@Nashville.gov
              </a>
            </p>
          </div>

          <div
            className="summary-card"
            style={{ textAlign: "center" }}
          >
            <FiClock size={34} color="#005a9c" />

            <h3>Office Hours</h3>

            <p>
              Monday – Friday
              <br />
              8:00 AM – 4:30 PM
            </p>
          </div>

        </div>

        {/* Contact Form */}

        <h2 className="dashboard-section-title">
          Contact Form
        </h2>

        <div className="summary-grid">

          <div
            className="summary-card"
            style={{
              maxWidth: "750px",
              margin: "0 auto",
              width: "100%",
            }}
          >

            <p
              style={{
                textAlign: "center",
                marginBottom: "30px",
              }}
            >
              Complete the form below and a member of the Metro Water
              Cross Connection Control Program will respond as soon as
              possible.
            </p>

            <form onSubmit={handleSubmit}>

              <label htmlFor="name">
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="subject">
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                required
              />

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                className="primary-btn"
                style={{
                  marginTop: "10px",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <FiSend size={18} />
                Send Message
              </button>

            </form>

          </div>

        </div>

        {/* Need Immediate Assistance */}

        <section className="inspection-banner">

          <div
            style={{
              textAlign: "center",
              width: "100%",
            }}
          >

            <h2>
              <MdSupportAgent
                style={{
                  verticalAlign: "middle",
                  marginRight: "8px",
                }}
              />
              Need Immediate Assistance?
            </h2>

            <p
              style={{
                maxWidth: "700px",
                margin: "0 auto",
                lineHeight: "1.8",
              }}
            >
              For immediate assistance, please call{" "}
              <a
                href="tel:6158624872"
                style={linkStyle}
              >
                (615) 862-4872
              </a>
              <br />
              Monday – Friday, 8:00 AM – 4:30 PM
              <br />
              or email
              <br />
              <a
                href="mailto:MWSCrossConnection@Nashville.gov"
                style={linkStyle}
              >
                MWSCrossConnection@Nashville.gov
              </a>
              <br />
              <br />
              Messages submitted through this form will be reviewed by
              the Metro Water Cross Connection Control Program.
            </p>

          </div>

        </section>

      </div>
    </Layout>
  );
}

export default Contact;