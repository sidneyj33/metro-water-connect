import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="app-layout">
      <Navbar />

      <main className="page-content">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;