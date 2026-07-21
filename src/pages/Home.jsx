import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import "../styles/PageStyles.css";

function Home() {
  return (
    <Layout>
      <main className="home-page">
        <section
          className="hero"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "70vh",
            padding: "40px 20px",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "700px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div
              style={{
                background: "#e5f1ff",
                color: "#0759b5",
                padding: "8px 18px",
                borderRadius: "999px",
                fontWeight: "600",
                marginBottom: "24px",
              }}
            >
              Metro Water Connect
            </div>

            <h1
              style={{
                fontSize: "58px",
                lineHeight: "1.1",
                margin: "0 0 24px",
                color: "#102a43",
              }}
            >
              Manage Your
              <br />
              <span style={{ color: "#0759b5" }}>
                Backflow Compliance
              </span>
              <br />
              Online
            </h1>

            <p
              style={{
                maxWidth: "560px",
                fontSize: "18px",
                lineHeight: "1.7",
                color: "#486581",
              }}
            >
              A faster, easier way to manage inspections, schedule
              appointments, upload documents, and stay connected with Metro
              Water Services.
            </p>

            <div
              style={{
                display: "flex",
                gap: "16px",
                marginTop: "32px",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Link to="/login" className="btn btn-primary">
                Customer Login
              </Link>

              <Link to="/register" className="btn btn-secondary">
                Create Account
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;