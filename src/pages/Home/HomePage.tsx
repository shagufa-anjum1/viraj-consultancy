import heroImage from "@/assets/images/hero1.jpg";
import hero1 from "@/assets/images/viraaj1.jpg";



export function HomePage() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="vc-hero">
        <img className="vc-hero__bg" src={heroImage} alt="" />
        <div className="vc-hero__overlay" />

        <div className="vc-hero__content">
          <p className="vc-hero__subtitle">WELCOME TO Viraaj Consultancy</p>

          <h1 className="vc-hero__title">
            The Most Trusted Payroll & Compliance Partner
          </h1>

          <p className="vc-hero__desc">
            Structured payroll processing, PF/ESIC management, employee insurance handling and
            regulatory compliance documentation for growing businesses.
          </p>

          <a href="/services" className="vc-btn vc-btn--primary">
            Discover More →
          </a>
        </div>
      </section>

      {/* ================= FEATURE CARDS ================= */}
      <section className="vc-features">
        <div className="container vc-features__grid">

          <div className="vc-feature-card">
            <h3>Time Saving</h3>
            <p>
              Automated payroll workflows with structured compliance
              validation reduce operational delays.
            </p>
          </div>

          <div className="vc-feature-card vc-feature-card--light">
            <h3>Cost Effective</h3>
            <p>
              Avoid penalties, ensure accurate deductions, and optimize
              payroll efficiency.
            </p>
          </div>

        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="section">
        <div className="container vc-about">

          <div className="vc-about__image">
            <img src={hero1} alt="About Company" />
          </div>

          <div className="vc-about__content">
            <p className="vc-section-label">ABOUT COMPANY</p>

            <h2>Your Financial Partner for Success</h2>

            <p>
              We help organizations build structured payroll systems,
              ensure statutory compliance, and maintain audit-ready
              documentation aligned with regulatory standards.
            </p>

            <ul className="vc-about__list">
              <li>✔ PF & ESIC Calculation Accuracy</li>
              <li>✔ Compliance Risk Reduction</li>
              <li>✔ Transparent Payroll Reporting</li>
              <li>✔ Dedicated HR Support</li>
            </ul>

            <a href="/about" className="vc-btn vc-btn--primary">
              More About Us →
            </a>
          </div>

        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="vc-stats">
        <div className="container vc-stats__grid">
          <div className="vc-stat">
            <h2>15+</h2>
            <p>Years Experience</p>
          </div>

          <div className="vc-stat">
            <h2>1,700+</h2>
            <p>Happy Clients</p>
          </div>

          <div className="vc-stat">
            <h2>4,300+</h2>
            <p>Projects Completed</p>
          </div>
        </div>
      </section>

      {/* ================= SERVICES INTRO ================= */}
      <section className="section">
        <div className="container vc-services-intro">

          <p className="vc-section-label">OUR SERVICES</p>

          <h2>Real Payroll & Compliance Services for You</h2>

          <p className="vc-services-intro__desc">
            Comprehensive solutions covering payroll processing,
            statutory compliance, insurance handling and HR support.
          </p>

        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="section vc-services">
        <div className="container vc-services__grid">
          <div className="vc-service-card is-active">
            <h3>Bookkeeping</h3>
            <p>Accurate books, reconciliations, and audit-ready records each month.</p>
            <a className="vc-link" href="/services/bookkeeping">Read More →</a>
          </div>

          <div className="vc-service-card">
            <h3>Payroll Services</h3>
            <p>End-to-end payroll with PF/ESIC, challans, and payslips handled.</p>
            <a className="vc-link" href="/services/payroll">Read More →</a>
          </div>

          <div className="vc-service-card">
            <h3>Tax Planning</h3>
            <p>Proactive planning to optimize tax exposure and ensure compliance.</p>
            <a className="vc-link" href="/services/tax-planning">Read More →</a>
          </div>

          <div className="vc-service-card">
            <h3>Audit & Assurance</h3>
            <p>Statutory, internal audits and process reviews for robust controls.</p>
            <a className="vc-link" href="/services/audit">Read More →</a>
          </div>

          <div className="vc-service-card">
            <h3>Financial Statements</h3>
            <p>Preparation and review compliant with standards and timelines.</p>
            <a className="vc-link" href="/services/financials">Read More →</a>
          </div>

          <div className="vc-service-card">
            <h3>GST Compliance</h3>
            <p>Registrations, monthly returns, reconciliations, and audit support.</p>
            <a className="vc-link" href="/services/gst">Read More →</a>
          </div>

          <div className="vc-service-card">
            <h3>Business Advisory</h3>
            <p>Entity structuring, SOPs, MIS, and growth-focused financial insights.</p>
            <a className="vc-link" href="/services/advisory">Read More →</a>
          </div>

          <div className="vc-service-card">
            <h3>Outsourced CFO</h3>
            <p>Strategic finance partner for cash flow, budgeting, and fundraising.</p>
            <a className="vc-link" href="/services/cfo">Read More →</a>
          </div>
        </div>
      </section>
    </>
  );
}
