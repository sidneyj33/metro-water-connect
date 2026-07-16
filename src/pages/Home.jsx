function Home() {
  return (
    <div className="app">
      <header className="hero">
        <div className="hero-overlay">
          <h1>Metro Water Connect</h1>

          <h2>Customer & Staff Portal</h2>

          <p>
            Schedule inspections, upload reports, and manage Metro Water services.
          </p>
        </div>
      </header>

      <section className="cards">
        <div className="card">
          <h3>Customer Portal</h3>
          <button>Enter</button>
        </div>

        <div className="card">
          <h3>Staff Portal</h3>
          <button>Enter</button>
        </div>

        <div className="card disabled">
          <h3>Inspector Portal</h3>
          <button disabled>Coming Soon</button>
        </div>
      </section>
    </div>
  );
}

export default Home;