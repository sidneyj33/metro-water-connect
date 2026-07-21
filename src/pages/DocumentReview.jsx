import { useState } from "react";
import Layout from "../components/Layout";
import "../Dashboard.css";

function DocumentReview() {
  const initialDocuments = [
    {
      id: 1,
      customer: "John Smith",
      document: "Annual Test Report",
      inspector: "Danielle",
      date: "07/21/2026",
      result: "PASS",
      notes: "No deficiencies found. Assembly passed all required tests.",
      attachment: "JohnSmith-TestReport.pdf",
    },
    {
      id: 2,
      customer: "ABC Apartments",
      document: "Repair Documentation",
      inspector: "James",
      date: "07/21/2026",
      result: "REPAIR",
      notes: "Backflow assembly repaired and ready for retest.",
      attachment: "ABCRepairDocs.pdf",
    },
    {
      id: 3,
      customer: "Metro Church",
      document: "Retest Report",
      inspector: "Chris",
      date: "07/20/2026",
      result: "PASS",
      notes: "Retest completed successfully after previous failure.",
      attachment: "MetroChurchRetest.pdf",
    },
    {
      id: 4,
      customer: "West Medical Center",
      document: "Annual Test Report",
      inspector: "Danielle",
      date: "07/20/2026",
      result: "PASS",
      notes: "Assembly operating normally.",
      attachment: "WestMedicalReport.pdf",
    },
  ];

  const [documents, setDocuments] = useState(initialDocuments);
  const [selectedDocument, setSelectedDocument] = useState(initialDocuments[0]);
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("#16a34a");

  const processDocument = (action) => {
    if (!selectedDocument) return;

    if (action === "approve") {
      setMessage(`✅ ${selectedDocument.customer}'s report approved.`);
      setMessageColor("#16a34a");
    }

    if (action === "reject") {
      setMessage(`❌ ${selectedDocument.customer}'s report rejected.`);
      setMessageColor("#dc2626");
    }

    if (action === "correction") {
      setMessage(
        `💬 Correction requested from ${selectedDocument.inspector}.`
      );
      setMessageColor("#ca8a04");
    }

    const updated = documents.filter(
      (doc) => doc.id !== selectedDocument.id
    );

    setDocuments(updated);

    if (updated.length > 0) {
      setSelectedDocument(updated[0]);
    } else {
      setSelectedDocument(null);
    }
  };

  return (
    <Layout>
      <div className="customer-dashboard">

        <section className="dashboard-hero">
          <h1 className="dashboard-title">
            Document Review
          </h1>

          <p className="dashboard-subtitle">
            Review inspection reports before updating customer compliance.
          </p>
        </section>

        {message && (
          <div
            style={{
              background: messageColor,
              color: "white",
              padding: "15px",
              borderRadius: "10px",
              marginBottom: "25px",
              fontWeight: 600,
            }}
          >
            {message}
          </div>
        )}

        <h2 className="dashboard-section-title">
          Pending Reviews ({documents.length})
        </h2>

        {documents.length === 0 ? (
          <div className="table-card" style={{ textAlign: "center" }}>
            <h2>🎉 All documents have been reviewed!</h2>

            <p>
              There are no inspection reports waiting for approval.
            </p>
          </div>
        ) : (
          <>
            <div className="table-card">
              <table>
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>Document</th>
                    <th>Inspector</th>
                    <th>Date</th>
                  </tr>
                </thead>

                <tbody>
                  {documents.map((doc) => (
                    <tr
                      key={doc.id}
                      onClick={() => setSelectedDocument(doc)}
                      style={{
                        cursor: "pointer",
                        background:
                          selectedDocument?.id === doc.id
                            ? "#f3e8ff"
                            : "transparent",
                        fontWeight:
                          selectedDocument?.id === doc.id
                            ? "600"
                            : "400",
                      }}
                    >
                      <td>{doc.customer}</td>
                      <td>{doc.document}</td>
                      <td>{doc.inspector}</td>
                      <td>{doc.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="dashboard-section-title">
              Review Details
            </h2>

            <div className="summary-grid">

              <div className="summary-card">
                <h3>Customer</h3>
                <p>{selectedDocument.customer}</p>
              </div>

              <div className="summary-card">
                <h3>Inspector</h3>
                <p>{selectedDocument.inspector}</p>
              </div>

              <div className="summary-card">
                <h3>Date</h3>
                <p>{selectedDocument.date}</p>
              </div>

              <div className="summary-card">
                <h3>Result</h3>
                <p>{selectedDocument.result}</p>
              </div>

            </div>

            <div className="table-card">

              <h3>Inspector Notes</h3>

              <p style={{ margin: "20px 0 30px" }}>
                {selectedDocument.notes}
              </p>

              <h3>Attachment</h3>

              <p style={{ margin: "20px 0 35px" }}>
                📄 {selectedDocument.attachment}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  flexWrap: "wrap",
                }}
              >
                <button
                  className="action-card"
                  onClick={() => processDocument("approve")}
                >
                  ✅ Approve
                </button>

                <button
                  className="action-card"
                  onClick={() => processDocument("reject")}
                >
                  ❌ Reject
                </button>

                <button
                  className="action-card"
                  onClick={() => processDocument("correction")}
                >
                  💬 Request Correction
                </button>
              </div>

            </div>
          </>
        )}

      </div>
    </Layout>
  );
}

export default DocumentReview;