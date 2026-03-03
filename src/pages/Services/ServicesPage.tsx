import serviceHero from "@/assets/images/service1.jpg";
import serviceBanner from "@/assets/images/service.jpg";
import imgBookkeeping from "@/assets/images/bookkeeping.jpg";
import imgPayroll from "@/assets/images/payroll.jpg";
import imgTax from "@/assets/images/taxPlanning.jpg";
import imgAudit from "@/assets/images/auditAndAssurance.jpg";
import imgFinancials from "@/assets/images/financialStatement.jpg";
import imgGST from "@/assets/images/gstCompliance.jpg";
import imgAdvisory from "@/assets/images/businessAdvisory.jpg";
import imgCFO from "@/assets/images/outsourcedCFO.jpg";

export function ServicesPage() {
  return (
    <>
      {/* HERO */}
      <section className="vc-services-hero">
        <div className="vc-services-hero__media">
          <img src={serviceHero} alt="Our Services" />
          <div className="vc-services-hero__overlay" />
        </div>
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

      {/* Alternating Services (simple markup) */}
      <section className="vc-servicesX">
        <div className="container vc-servicesX__inner">
          <div className="vc-servicesX__list">
            {/* 1. Bookkeeping */}
            <article className="vc-serviceRow">
              <div className="vc-serviceRow__media">
                <img src={imgBookkeeping} alt="Bookkeeping" />
                <div className="vc-serviceRow__mediaOverlay" />
              </div>
              <div className="vc-serviceRow__content">
                <h3 className="vc-serviceRow__title">Bookkeeping</h3>
                <p className="vc-serviceRow__desc">
                  Accurate, month-wise books with clean reconciliations so your numbers stay audit-ready and
                  decision-ready.
                </p>
                <div className="vc-serviceRow__cols">
                  <div className="vc-serviceRow__col">
                    <h4 className="vc-serviceRow__miniTitle">What you get</h4>
                    <ul className="vc-serviceRow__listBullets">
                      <li>Monthly bank & ledger reconciliation</li>
                      <li>Vendor/customer tracking and categorization</li>
                      <li>Error-free entries with documentation</li>
                    </ul>
                  </div>
                  <div className="vc-serviceRow__col">
                    <h4 className="vc-serviceRow__miniTitle">Deliverables</h4>
                    <ul className="vc-serviceRow__chips">
                      <li className="vc-chip">Monthly books</li>
                      <li className="vc-chip">Reconciliation report</li>
                      <li className="vc-chip">Outstanding summary</li>
                    </ul>
                  </div>
                </div>
                <div className="vc-serviceRow__actions">
                  <a className="vc-premium-btn" href="/contact">
                    <span className="vc-premium-btn__shine" />
                    <span className="vc-premium-btn__text">Request Consultation</span>
                  </a>
                  {/* <a className="vc-serviceRow__link" href="/services">Read More →</a> */}
                </div>
              </div>
            </article>

            {/* 2. Payroll Services */}
            <article className="vc-serviceRow vc-serviceRow--reverse">
              <div className="vc-serviceRow__media">
                <img src={imgPayroll} alt="Payroll Services" />
                <div className="vc-serviceRow__mediaOverlay" />
              </div>
              <div className="vc-serviceRow__content">
                <h3 className="vc-serviceRow__title">Payroll Services</h3>
                <p className="vc-serviceRow__desc">
                  End-to-end payroll processing with PF/ESIC, challans, payslips, and compliance handled on time.
                </p>
                <div className="vc-serviceRow__cols">
                  <div className="vc-serviceRow__col">
                    <h4 className="vc-serviceRow__miniTitle">What you get</h4>
                    <ul className="vc-serviceRow__listBullets">
                      <li>Payroll calculation + salary structuring support</li>
                      <li>PF/ESIC compliance and challans</li>
                      <li>Payslips + payroll register</li>
                    </ul>
                  </div>
                  <div className="vc-serviceRow__col">
                    <h4 className="vc-serviceRow__miniTitle">Deliverables</h4>
                    <ul className="vc-serviceRow__chips">
                      <li className="vc-chip">Payslips</li>
                      <li className="vc-chip">PF/ESIC filings</li>
                      <li className="vc-chip">Payroll reports</li>
                    </ul>
                  </div>
                </div>
                <div className="vc-serviceRow__actions">
                  <a className="vc-premium-btn" href="/contact">
                    <span className="vc-premium-btn__shine" />
                    <span className="vc-premium-btn__text">Request Consultation</span>
                  </a>
                  {/* <a className="vc-serviceRow__link" href="/services">Read More →</a> */}
                </div>
              </div>
            </article>

            {/* 3. Tax Planning */}
            <article className="vc-serviceRow">
              <div className="vc-serviceRow__media">
                <img src={imgTax} alt="Tax Planning" />
                <div className="vc-serviceRow__mediaOverlay" />
              </div>
              <div className="vc-serviceRow__content">
                <h3 className="vc-serviceRow__title">Tax Planning</h3>
                <p className="vc-serviceRow__desc">
                  Proactive tax planning to optimize exposure, prevent surprises, and keep filings fully compliant.
                </p>
                <div className="vc-serviceRow__cols">
                  <div className="vc-serviceRow__col">
                    <h4 className="vc-serviceRow__miniTitle">What you get</h4>
                    <ul className="vc-serviceRow__listBullets">
                      <li>Advance tax planning & projections</li>
                      <li>Return filing with accuracy checks</li>
                      <li>Notice support & documentation readiness</li>
                    </ul>
                  </div>
                  <div className="vc-serviceRow__col">
                    <h4 className="vc-serviceRow__miniTitle">Deliverables</h4>
                    <ul className="vc-serviceRow__chips">
                      <li className="vc-chip">Tax plan</li>
                      <li className="vc-chip">Return filing</li>
                      <li className="vc-chip">Compliance checklist</li>
                    </ul>
                  </div>
                </div>
                <div className="vc-serviceRow__actions">
                  <a className="vc-premium-btn" href="/contact">
                    <span className="vc-premium-btn__shine" />
                    <span className="vc-premium-btn__text">Request Consultation</span>
                  </a>
                  {/* <a className="vc-serviceRow__link" href="/services">Read More →</a> */}
                </div>
              </div>
            </article>

            {/* 4. Audit & Assurance */}
            <article className="vc-serviceRow vc-serviceRow--reverse">
              <div className="vc-serviceRow__media">
                <img src={imgAudit} alt="Audit & Assurance" />
                <div className="vc-serviceRow__mediaOverlay" />
              </div>
              <div className="vc-serviceRow__content">
                <h3 className="vc-serviceRow__title">Audit & Assurance</h3>
                <p className="vc-serviceRow__desc">
                  Statutory and internal audits with robust reviews, controls testing, and improvement recommendations.
                </p>
                <div className="vc-serviceRow__cols">
                  <div className="vc-serviceRow__col">
                    <h4 className="vc-serviceRow__miniTitle">What you get</h4>
                    <ul className="vc-serviceRow__listBullets">
                      <li>Internal controls and process review</li>
                      <li>Risk assessment & documentation</li>
                      <li>Audit-ready financial reporting</li>
                    </ul>
                  </div>
                  <div className="vc-serviceRow__col">
                    <h4 className="vc-serviceRow__miniTitle">Deliverables</h4>
                    <ul className="vc-serviceRow__chips">
                      <li className="vc-chip">Audit report</li>
                      <li className="vc-chip">Findings summary</li>
                      <li className="vc-chip">Action plan</li>
                    </ul>
                  </div>
                </div>
                <div className="vc-serviceRow__actions">
                  <a className="vc-premium-btn" href="/contact">
                    <span className="vc-premium-btn__shine" />
                    <span className="vc-premium-btn__text">Request Consultation</span>
                  </a>
                  {/* <a className="vc-serviceRow__link" href="/services">Read More →</a> */}
                </div>
              </div>
            </article>

            {/* 5. Financial Statements */}
            <article className="vc-serviceRow">
              <div className="vc-serviceRow__media">
                <img src={imgFinancials} alt="Financial Statements" />
                <div className="vc-serviceRow__mediaOverlay" />
              </div>
              <div className="vc-serviceRow__content">
                <h3 className="vc-serviceRow__title">Financial Statements</h3>
                <p className="vc-serviceRow__desc">
                  Preparation and review aligned with applicable standards to maintain credibility and clarity for stakeholders.
                </p>
                <div className="vc-serviceRow__cols">
                  <div className="vc-serviceRow__col">
                    <h4 className="vc-serviceRow__miniTitle">What you get</h4>
                    <ul className="vc-serviceRow__listBullets">
                      <li>P&L, Balance Sheet, Cash Flow preparation</li>
                      <li>Schedules and supporting working papers</li>
                      <li>Management-friendly summaries</li>
                    </ul>
                  </div>
                  <div className="vc-serviceRow__col">
                    <h4 className="vc-serviceRow__miniTitle">Deliverables</h4>
                    <ul className="vc-serviceRow__chips">
                      <li className="vc-chip">Financial statements</li>
                      <li className="vc-chip">Schedules</li>
                      <li className="vc-chip">Review notes</li>
                    </ul>
                  </div>
                </div>
                <div className="vc-serviceRow__actions">
                  <a className="vc-premium-btn" href="/contact">
                    <span className="vc-premium-btn__shine" />
                    <span className="vc-premium-btn__text">Request Consultation</span>
                  </a>
                  {/* <a className="vc-serviceRow__link" href="/services">Read More →</a> */}
                </div>
              </div>
            </article>

            {/* 6. GST Compliance */}
            <article className="vc-serviceRow vc-serviceRow--reverse">
              <div className="vc-serviceRow__media">
                <img src={imgGST} alt="GST Compliance" />
                <div className="vc-serviceRow__mediaOverlay" />
              </div>
              <div className="vc-serviceRow__content">
                <h3 className="vc-serviceRow__title">GST Compliance</h3>
                <p className="vc-serviceRow__desc">
                  Registrations, returns, reconciliations and audit support—done with a clear process and deadline discipline.
                </p>
                <div className="vc-serviceRow__cols">
                  <div className="vc-serviceRow__col">
                    <h4 className="vc-serviceRow__miniTitle">What you get</h4>
                    <ul className="vc-serviceRow__listBullets">
                      <li>GST registration & amendments</li>
                      <li>Monthly/Quarterly returns filing</li>
                      <li>GSTR-2B reconciliation support</li>
                    </ul>
                  </div>
                  <div className="vc-serviceRow__col">
                    <h4 className="vc-serviceRow__miniTitle">Deliverables</h4>
                    <ul className="vc-serviceRow__chips">
                      <li className="vc-chip">GST filings</li>
                      <li className="vc-chip">Reconciliation snapshot</li>
                      <li className="vc-chip">Compliance calendar</li>
                    </ul>
                  </div>
                </div>
                <div className="vc-serviceRow__actions">
                  <a className="vc-premium-btn" href="/contact">
                    <span className="vc-premium-btn__shine" />
                    <span className="vc-premium-btn__text">Request Consultation</span>
                  </a>
                  {/* <a className="vc-serviceRow__link" href="/services">Read More →</a> */}
                </div>
              </div>
            </article>

            {/* 7. Business Advisory */}
            <article className="vc-serviceRow">
              <div className="vc-serviceRow__media">
                <img src={imgAdvisory} alt="Business Advisory" />
                <div className="vc-serviceRow__mediaOverlay" />
              </div>
              <div className="vc-serviceRow__content">
                <h3 className="vc-serviceRow__title">Business Advisory</h3>
                <p className="vc-serviceRow__desc">
                  SOPs, MIS reporting, and finance strategy for scale—so your business runs on data, not guesswork.
                </p>
                <div className="vc-serviceRow__cols">
                  <div className="vc-serviceRow__col">
                    <h4 className="vc-serviceRow__miniTitle">What you get</h4>
                    <ul className="vc-serviceRow__listBullets">
                      <li>MIS dashboards & monthly reporting</li>
                      <li>Cost control and profitability review</li>
                      <li>SOP + process improvement guidance</li>
                    </ul>
                  </div>
                  <div className="vc-serviceRow__col">
                    <h4 className="vc-serviceRow__miniTitle">Deliverables</h4>
                    <ul className="vc-serviceRow__chips">
                      <li className="vc-chip">MIS reports</li>
                      <li className="vc-chip">SOP notes</li>
                      <li className="vc-chip">Strategy actions</li>
                    </ul>
                  </div>
                </div>
                <div className="vc-serviceRow__actions">
                  <a className="vc-premium-btn" href="/contact">
                    <span className="vc-premium-btn__shine" />
                    <span className="vc-premium-btn__text">Request Consultation</span>
                  </a>
                  {/* <a className="vc-serviceRow__link" href="/services">Read More →</a> */}
                </div>
              </div>
            </article>

            {/* 8. Outsourced CFO */}
            <article className="vc-serviceRow vc-serviceRow--reverse">
              <div className="vc-serviceRow__media">
                <img src={imgCFO} alt="Outsourced CFO" />
                <div className="vc-serviceRow__mediaOverlay" />
              </div>
              <div className="vc-serviceRow__content">
                <h3 className="vc-serviceRow__title">Outsourced CFO</h3>
                <p className="vc-serviceRow__desc">
                  Budgeting, cash-flow management, and board-ready reporting—built for growth and investor confidence.
                </p>
                <div className="vc-serviceRow__cols">
                  <div className="vc-serviceRow__col">
                    <h4 className="vc-serviceRow__miniTitle">What you get</h4>
                    <ul className="vc-serviceRow__listBullets">
                      <li>Cash flow planning & runway visibility</li>
                      <li>Budgeting + variance analysis</li>
                      <li>Board-ready packs and metrics</li>
                    </ul>
                  </div>
                  <div className="vc-serviceRow__col">
                    <h4 className="vc-serviceRow__miniTitle">Deliverables</h4>
                    <ul className="vc-serviceRow__chips">
                      <li className="vc-chip">CFO pack</li>
                      <li className="vc-chip">Budget plan</li>
                      <li className="vc-chip">Cash-flow forecast</li>
                    </ul>
                  </div>
                </div>
                <div className="vc-serviceRow__actions">
                  <a className="vc-premium-btn" href="/contact">
                    <span className="vc-premium-btn__shine" />
                    <span className="vc-premium-btn__text">Request Consultation</span>
                  </a>
                  {/* <a className="vc-serviceRow__link" href="/services">Read More →</a> */}
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>



      {/* MID BANNER WITH IMAGE 2 */}
      <section className="vc-services-banner">
        <div className="vc-services-banner__media">
          <img src={serviceBanner} alt="Financial management support" />
          <div className="vc-services-banner__overlay" />
        </div>
        <div className="container vc-services-banner__content">
          <h2>Having Trouble Managing Your Finances?</h2>
          <p>Let us handle compliance and numbers — you focus on growth.</p>
          <a href="/contact" className="vc-btn vc-btn--shine"><span className="vc-btn__label">Contact Us Now</span></a>
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
              <a className="vc-btn vc-btn--outline" href="/contact">Get Started</a>
            </div>

            <div className="vc-price-card is-featured">
              <h3>Professional</h3>
              <div className="vc-price-card__price">₹7,999<span>/month</span></div>
              <ul>
                <li>Monthly bookkeeping + MIS</li>
                <li>Payroll up to 30 employees</li>
                <li>PF/ESIC + GST returns</li>
              </ul>
              <a className="vc-btn vc-btn--outline" href="/contact">Get Started</a>
            </div>

            <div className="vc-price-card">
              <h3>Enterprise</h3>
              <div className="vc-price-card__price">₹14,999<span>/month</span></div>
              <ul>
                <li>Advanced reporting & reviews</li>
                <li>Payroll up to 75 employees</li>
                <li>Dedicated account manager</li>
              </ul>
              <a className="vc-btn vc-btn--outline" href="/contact">Get Started</a>
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
