import contactHero from "@/assets/images/contact1.jpg";
import contactWhy from "@/assets/images/contact2.jpg";
import contactInfo from "@/assets/images/contact3.jpg";

export function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="vc-contact-hero">
        <div className="vc-contact-hero__media">
          <img src={contactHero} alt="Contact us" />
          <div className="vc-contact-hero__overlay" />
        </div>
        <div className="container vc-contact-hero__content">
          <h1>Contact <span>Us</span></h1>
          <p>Turn your ideas into compliant, growth-ready solutions — let’s talk.</p>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="vc-contact-why section">
        <div className="container vc-contact-why__grid">
          <div className="vc-contact-why__text">
            <h2>Why Viraj <span>Consultancy?</span></h2>
            <p>
              Because your business deserves more than routine filings. We focus on
              reliability, compliance, and clarity — so you grow without penalties or surprises.
            </p>
            <p>
              From payroll to audits, we work as your long‑term financial partner.
            </p>
          </div>
          <div className="vc-contact-why__image">
            <img src={contactWhy} alt="Why choose us" />
          </div>
        </div>
      </section>


      {/* FORM + INFO (Bhumi Labs style) */}
      <section className="vc-contact-connect section">
        <div className="container">
          {/* Center heading like Bhumi Labs */}
          <div className="vc-contact-connect__head">
            <h2>Let’s talk about your project</h2>
            <p>
              Got an idea? Need help with compliance or payroll? Drop us a line — we’re ready to help.
            </p>
          </div>

          <div className="vc-contact-connect__grid">
            {/* LEFT: FORM */}
            <form className="vc-form vc-form--fancy" onSubmit={(e) => e.preventDefault()}>
              <h3>CONTACT US</h3>
              <div className="vc-form__divider" />

              <label className="vc-field vc-field--name">
                <span>Full Name</span>
                <input type="text" placeholder="Your name" required />
              </label>

              <label className="vc-field vc-field--email">
                <span>Email Address</span>
                <input type="email" placeholder="you@email.com" required />
              </label>

              <label className="vc-field vc-field--phone">
                <span>Phone Number</span>
                <input type="tel" placeholder="+91 XXXXXX XXXX" />
              </label>

              <label className="vc-field vc-field--msg is-textarea">
                <span>Your Message</span>
                <textarea rows={5} placeholder="Tell us how we can help..." />
              </label>

              <button type="submit" className="vc-btn vc-btn--primary vc-btn--xl">
                Send Message
              </button>
            </form>

            {/* RIGHT: IMAGE BACKGROUND + INFO ON TOP */}
            <aside className="vc-office">
              <div className="vc-office__bg">
                <img src={contactInfo} alt="Our office" />
                <div className="vc-office__overlay" />
              </div>

              <div className="vc-office__card">
                <div className="vc-office__row">
                  <span className="vc-office__label">Address</span>
                  <span className="vc-office__value">
                    SCO-12, Kamla Palace, Near Sohna Chowk, Gurugram - 122001
                  </span>
                </div>

                <div className="vc-office__row">
                  <span className="vc-office__label">Phone</span>
                  <span className="vc-office__value">+91 9870179510</span>
                </div>

                <div className="vc-office__row">
                  <span className="vc-office__label">Email</span>
                  <span className="vc-office__value">info@virajconsultancy.com</span>
                </div>

                <div className="vc-office__row">
                  <span className="vc-office__label">Hours</span>
                  <span className="vc-office__value">Mon–Sat: 10AM–7PM</span>
                </div>
              </div>
            </aside>
          </div>
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
