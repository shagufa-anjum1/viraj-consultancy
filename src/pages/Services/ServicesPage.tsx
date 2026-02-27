export function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="vc-services-hero">
        <div className="container vc-services-hero__content">
          <h1>Our Services</h1>
          <p>
            Real accounting and compliance services designed for growing businesses.
            Clear processes, on‑time filings, and audit‑ready documentation.
          </p>
        </div>
      </section>

      {/* INTRO + GRID */}
      <section className="section">
        <div className="container vc-services-intro">
          <p className="vc-section-label">OUR SERVICES</p>
          <h2>Real Accounting Services for You</h2>
          <p className="vc-services-intro__desc">
            From payroll to audits — get reliable, compliant and easy‑to‑track services.
          </p>
        </div>
      </section>

      <section className="section vc-services">
        <div className="container vc-services__grid">
          <div className="vc-service-card is-active">
            <h3>Bookkeeping</h3>
            <p>Accurate books, reconciliations, and audit‑ready schedules.</p>
            <a className="vc-link" href="#pricing">Read More →</a>
          </div>
          <div className="vc-service-card">
            <h3>Payroll Services</h3>
            <p>End‑to‑end payroll with PF/ESIC, challans and payslips.</p>
            <a className="vc-link" href="#pricing">Read More →</a>
          </div>
          <div className="vc-service-card">
            <h3>Tax Planning</h3>
            <p>Proactive planning to optimize tax exposure and ensure compliance.</p>
            <a className="vc-link" href="#pricing">Read More →</a>
          </div>
          <div className="vc-service-card">
            <h3>Audit & Assurance</h3>
            <p>Statutory and internal audits with robust process reviews.</p>
            <a className="vc-link" href="#pricing">Read More →</a>
          </div>
          <div className="vc-service-card">
            <h3>Financial Statements</h3>
            <p>Preparation and review aligned with applicable standards.</p>
            <a className="vc-link" href="#pricing">Read More →</a>
          </div>
          <div className="vc-service-card">
            <h3>GST Compliance</h3>
            <p>Registrations, returns, reconciliations and audit support.</p>
            <a className="vc-link" href="#pricing">Read More →</a>
          </div>
          <div className="vc-service-card">
            <h3>Business Advisory</h3>
            <p>SOPs, MIS, and finance strategy for scale.</p>
            <a className="vc-link" href="#pricing">Read More →</a>
          </div>
          <div className="vc-service-card">
            <h3>Outsourced CFO</h3>
            <p>Budgeting, cash flow, and board‑ready reporting.</p>
            <a className="vc-link" href="#pricing">Read More →</a>
          </div>
        </div>
      </section>

      {/* MID BANNER WITH IMAGE 2 */}
      <section className="vc-services-banner">
        <div className="container vc-services-banner__content">
          <h2>Having Trouble Managing Your Finances?</h2>
          <p>Let us handle compliance and numbers — you focus on growth.</p>
          <a href="/contact" className="vc-btn vc-btn--primary">Contact Us Now</a>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="section vc-pricing">
        <div className="container">
          <p className="vc-section-label">PRICING PLAN</p>
          <h2>The Best Price for You</h2>
          <div className="vc-pricing__grid">
            <div className="vc-price-card">
              <h3>Standard</h3>
              <div className="vc-price-card__price">₹3,999<span>/month</span></div>
              <ul>
                <li>Monthly bookkeeping</li>
                <li>Payroll up to 10 employees</li>
                <li>PF/ESIC filings</li>
              </ul>
              <a className="vc-btn vc-btn--outline" href="/contact">Get Started →</a>
            </div>

            <div className="vc-price-card is-featured">
              <h3>Professional</h3>
              <div className="vc-price-card__price">₹7,999<span>/month</span></div>
              <ul>
                <li>Monthly bookkeeping + MIS</li>
                <li>Payroll up to 30 employees</li>
                <li>PF/ESIC + GST returns</li>
              </ul>
              <a className="vc-btn vc-btn--primary" href="/contact">Get Started →</a>
            </div>

            <div className="vc-price-card">
              <h3>Enterprise</h3>
              <div className="vc-price-card__price">₹14,999<span>/month</span></div>
              <ul>
                <li>Advanced reporting & reviews</li>
                <li>Payroll up to 75 employees</li>
                <li>Dedicated account manager</li>
              </ul>
              <a className="vc-btn vc-btn--outline" href="/contact">Get Started →</a>
            </div>
          </div>
        </div>
      </section>

      {/* SIMPLE STEPS */}
      <section className="section vc-steps">
        <div className="container vc-steps__grid">
          <div className="vc-step">
            <h3>Consultation</h3>
            <p>Share your needs; we assess scope and timelines.</p>
          </div>
          <div className="vc-step">
            <h3>Choose a Package</h3>
            <p>Select a plan or ask for a custom quote.</p>
          </div>
          <div className="vc-step">
            <h3>Get Your Service</h3>
            <p>We implement SOPs and deliver on schedule every month.</p>
          </div>
        </div>
      </section>
    </>
  );
}
