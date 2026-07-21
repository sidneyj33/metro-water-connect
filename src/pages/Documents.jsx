import { useState } from "react";
import Layout from "../components/Layout";
import "../Dashboard.css";

import {
  FiUpload,
  FiFileText,
  FiCheckCircle,
  FiClock,
  FiAlertCircle,
} from "react-icons/fi";

function Documents() {
  const [selectedFile, setSelectedFile] = useState(null);

  const documents = [
    {
      name: "Annual Test Report.pdf",
      submitted: "07/10/2026",
      status: "Pending Review",
    },
    {
      name: "Repair Invoice.pdf",
      submitted: "07/12/2026",
      status: "Accepted",
    },
  ];

  const handleUpload = () => {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    alert(
      `Document "${selectedFile.name}" uploaded successfully! (Prototype)`
    );

    setSelectedFile(null);

    const fileInput = document.getElementById("document-upload");
    if (fileInput) {
      fileInput.value = "";
    }
  };

  return (
    <Layout>
      <div className="customer-dashboard">

        {/* Hero */}
        <section className="dashboard-hero">
          <h1 className="dashboard-title">
            Documents
          </h1>

          <p className="dashboard-subtitle">
            Upload and manage your backflow inspection documents.
          </p>
        </section>

        {/* Upload */}
        <h2 className="dashboard-section-title">
          Upload Test Report
        </h2>

        <section className="inspection-banner">
          <div style={{ width: "100%" }}>

            <h2>
              <FiUpload
                style={{
                  marginRight: "8px",
                  verticalAlign: "middle",
                }}
              />
              Upload Documents
            </h2>

            <p style={{ marginBottom: "20px" }}>
              Accepted file types:
              <strong> PDF, JPG, PNG</strong>
              <br />
              Maximum file size:
              <strong> 10 MB</strong>
            </p>

            <input
              id="document-upload"
              type="file"
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) => setSelectedFile(e.target.files[0])}
            />

            <br />
            <br />

            <button
              className="primary-btn"
              onClick={handleUpload}
            >
              <FiUpload
                style={{
                  marginRight: "8px",
                  verticalAlign: "middle",
                }}
              />
              Upload Document
            </button>

          </div>
        </section>

        {/* Submitted Documents */}

        <h2 className="dashboard-section-title">
          Submitted Documents
        </h2>

        <div className="table-card">

          <table>

            <thead>
              <tr>
                <th scope="col">Document</th>
                <th scope="col">Submitted</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody>

              {documents.map((doc, index) => (
                <tr key={index}>
                  <td>
                    <FiFileText
                      style={{
                        marginRight: "8px",
                        verticalAlign: "middle",
                      }}
                    />
                    {doc.name}
                  </td>

                  <td>{doc.submitted}</td>

                  <td>

                    {doc.status === "Accepted" && (
                      <span className="status compliant">
                        <FiCheckCircle
                          style={{
                            marginRight: "6px",
                            verticalAlign: "middle",
                          }}
                        />
                        Accepted
                      </span>
                    )}

                    {doc.status === "Pending Review" && (
                      <span className="status info">
                        <FiClock
                          style={{
                            marginRight: "6px",
                            verticalAlign: "middle",
                          }}
                        />
                        Pending Review
                      </span>
                    )}

                  </td>

                  <td>
                    <button className="primary-btn">
                      View
                    </button>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

        {/* Status Guide */}

        <h2 className="dashboard-section-title">
          Document Status
        </h2>

        <div className="summary-grid">

          <div className="summary-card">
            <FiClock size={30} color="#005a9c" />
            <h3>Pending Review</h3>
            <p>
              Your document has been received and is awaiting review by
              Metro Water.
            </p>
          </div>

          <div className="summary-card">
            <FiCheckCircle size={30} color="#207c39" />
            <h3>Accepted</h3>
            <p>
              Your document has been reviewed and accepted.
            </p>
          </div>

          <div className="summary-card">
            <FiAlertCircle size={30} color="#d97706" />
            <h3>More Information Needed</h3>
            <p>
              Additional documentation is required before your submission
              can be completed.
            </p>
          </div>

        </div>

      </div>
    </Layout>
  );
}

export default Documents;