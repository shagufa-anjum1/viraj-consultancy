export function AboutPage() {
  return (
    <>
      <section className="vc-about-hero">
        <div className="vc-about-hero__content container">
          <h1>About Viraaj Consultancy</h1>
          <p>We help businesses stay compliant, audit-ready and growth-focused.</p>
        </div>
      </section>

      <section className="section">
        <div className="container vc-about-intro">
          <div className="vc-about-intro__image" />
          <div className="vc-about-intro__content">
            <p className="vc-section-label">ABOUT COMPANY</p>
            <h2>Your Financial Partner for Success</h2>
            <p>
              Viraaj Consultancy provides structured payroll, tax and compliance services for
              growing organizations. We combine precision with clarity so leaders can make
              confident decisions while avoiding penalties and delays.
            </p>

            <div className="vc-about-columns">
              <div>
                <h3>Our Vision</h3>
                <ul>
                  <li>Compliance made simple and predictable</li>
                  <li>Reliable finance operations for scale</li>
                  <li>Transparent reporting and documentation</li>
                </ul>
              </div>
              <div>
                <h3>Our Mission</h3>
                <ul>
                  <li>On‑time payroll and statutory filings</li>
                  <li>Risk‑aware advisory for growth</li>
                  <li>Confidentiality and integrity in every process</li>
                </ul>
              </div>
            </div>

            {/* <blockquote className="vc-quote">
              “Numbers tell your story — our job is to make them clear, compliant and useful.”
            </blockquote> */}

            <div className="vc-founder">
              <div className="vc-founder__name">Founder</div>
              <div className="vc-founder__title">Viraaj Consultancy</div>
            </div>
          </div>
        </div>
      </section>

      <section className="vc-choose section">
        <div className="container vc-choose__grid">
          <div className="vc-choose__text">
            <p className="vc-section-label">WHY CHOOSE US</p>
            <h2>Accounting With Unity</h2>
            <p>
              Experienced professionals, clear processes and proactive guidance. We keep you audit‑ready
              with accurate filings and robust documentation.
            </p>

            <div className="vc-bars">
              <div className="vc-bar">
                <div className="vc-bar__label"><span>Expertise</span><span>96%</span></div>
                <div className="vc-bar__track"><div className="vc-bar__fill" style={{ width: "96%" }} /></div>
              </div>
              <div className="vc-bar">
                <div className="vc-bar__label"><span>Reputation</span><span>93%</span></div>
                <div className="vc-bar__track"><div className="vc-bar__fill" style={{ width: "93%" }} /></div>
              </div>
              <div className="vc-bar">
                <div className="vc-bar__label"><span>Knowledge</span><span>97%</span></div>
                <div className="vc-bar__track"><div className="vc-bar__fill" style={{ width: "97%" }} /></div>
              </div>
              <div className="vc-bar">
                <div className="vc-bar__label"><span>Communication</span><span>91%</span></div>
                <div className="vc-bar__track"><div className="vc-bar__fill" style={{ width: "91%" }} /></div>
              </div>
            </div>
          </div>
          <div className="vc-choose__image">
            <div className="vc-choose__badge">
              <div className="vc-choose__badge__num">15</div>
              <div className="vc-choose__badge__label">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
