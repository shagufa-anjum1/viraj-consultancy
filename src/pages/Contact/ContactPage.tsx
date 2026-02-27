export function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="vc-contact-hero">
        <div className="vc-contact-hero__bg" />
        <div className="container vc-contact-hero__content">
          <h1>Contact <span>Us</span></h1>
          <p>Turn your ideas into compliant, growth-ready solutions — let’s talk.</p>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="vc-contact-why section">
        <div className="container vc-contact-why__grid">
          <div className="vc-contact-why__text">
            <h2>Why Viraaj <span>Consultancy?</span></h2>
            <p>
              Because your business deserves more than routine filings. We focus on
              reliability, compliance, and clarity — so you grow without penalties or surprises.
            </p>
            <p>
              From payroll to audits, we work as your long‑term financial partner.
            </p>
          </div>
          <div className="vc-contact-why__image" />
        </div>
      </section>

      {/* LET'S TALK */}
      <section className="vc-contact-talk section">
        <div className="container">
          <h2>Let’s talk about your project</h2>
          <p className="vc-contact-talk__sub">
            Got an idea? Need help with compliance or payroll? Drop us a line — we’re ready to help.
          </p>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="vc-contact-form section">
        <div className="container vc-contact-form__grid">
          <form className="vc-form" onSubmit={(e) => e.preventDefault()}>
            <h3>Contact Us</h3>
            <label>
              <span>Full Name</span>
              <input type="text" placeholder="Your name" required />
            </label>
            <label>
              <span>Email Address</span>
              <input type="email" placeholder="you@email.com" required />
            </label>
            <label>
              <span>Phone Number</span>
              <input type="tel" placeholder="+91 XXXXXX XXXX" />
            </label>
            <label className="is-textarea">
              <span>Your Message</span>
              <textarea rows={5} placeholder="Tell us how we can help..." />
            </label>
            <button type="submit" className="vc-btn vc-btn--primary">Send Message</button>
          </form>

          <aside className="vc-contact-info">
            <div className="vc-contact-info__image" />
            <ul className="vc-contact-info__list">
              <li><strong>Address:</strong> SCO-12, Kamla Palace, Near Sohna Chowk, Gurugram - 122001</li>
              <li><strong>Phone:</strong> +91 9870179510</li>
              <li><strong>Email:</strong> info@viraajconsultancy.com</li>
              <li><strong>Hours:</strong> Mon–Sat: 10AM–7PM</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* HELP CARDS */}
      <section className="vc-contact-help section">
        <div className="container">
          <h2 className="vc-contact-help__title">What we help you with</h2>
          <div className="vc-contact-help__grid">
            <div className="vc-help-card">
              <h3>Payroll Management</h3>
              <p>Accurate salary processing with PF/ESIC, challans and payslips.</p>
            </div>
            <div className="vc-help-card">
              <h3>Compliance & Tax</h3>
              <p>Returns, registrations, reconciliations and audit support.</p>
            </div>
            <div className="vc-help-card">
              <h3>Business Advisory</h3>
              <p>Structuring, SOPs and MIS for growth with financial discipline.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
