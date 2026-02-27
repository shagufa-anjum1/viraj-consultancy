import { Link } from "react-router-dom";
import { navLinks } from "@/config/navigation";
import logo from "@/assets/images/viraajlogo.png";

const services = [
  { label: "Bookkeeping", to: "/services#bookkeeping" },
  { label: "Payroll Services", to: "/services#payroll" },
  { label: "Tax Planning", to: "/services#tax-planning" },
  { label: "Audit & Assurance", to: "/services#audit" },
  { label: "Financial Statement", to: "/services#financials" },
  { label: "Tech Consulting", to: "/services#tech" },
  { label: "Business Advisory", to: "/services#advisory" },
  { label: "Outsourced CFO", to: "/services#cfo" },
];

export function Footer() {
  return (
    <footer className="vc-footer">
      <div className="container vc-footer__grid">
        {/* Brand */}
        <div className="vc-footer__brand">
          <img className="vc-footer__logo" src={logo} alt="Viraaj Consultancy" />
          <p>
            Trusted CA partner for payroll, compliance and advisory —
            clarity, confidentiality and on‑time delivery.
          </p>
        </div>

        {/* Quick Links */}
        <div className="vc-footer__col">
          <h4>Quick Links</h4>
          <ul className="vc-footer__list">
            {navLinks.map((l) => (
              <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="vc-footer__col">
          <h4>Services</h4>
          <ul className="vc-footer__list">
            {services.map((s) => (
              <li key={s.to}><Link to={s.to}>{s.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div className="vc-footer__col">
          <h4>Information</h4>
          <ul className="vc-footer__info">
            <li>
              <strong>Phone:</strong> +91 98765 43210
            </li>
            <li>
              <strong>Email:</strong> info@viraajconsultancy.com
            </li>
            <li>
              <strong>Office:</strong> SCO‑12, Kamla Palace, Gurugram — 122001
            </li>
          </ul>
        </div>
      </div>

      <div className="vc-footer__bottom">
        <div className="container vc-footer__bottom__inner">
          <div>© {new Date().getFullYear()} Viraaj Consultancy. All rights reserved.</div>
          <div>Privacy • Terms</div>
        </div>
      </div>
    </footer>
  );
}
