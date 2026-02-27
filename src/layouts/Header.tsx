import { Link, NavLink } from "react-router-dom";
import { navLinks } from "@/config/navigation";
import logo from "@/assets/images/viraajlogo.png";

export function Header() {
  return (
    <>
      {/* Top Bar */}
      <div className="vc-topbar">
        <div className="container vc-topbar__inner">
          <div>info@viraajconsultancy.com</div>
          <div>+91 98765 43210</div>
        </div>
      </div>

      {/* Main Header */}
      <header className="vc-header">
        <div className="container vc-header__inner">
          <Link to="/" className="vc-header__brand">
            <img className="vc-header__logoimg" src={logo} alt="Viraaj Consultancy" />
          </Link>

          <nav className="vc-header__nav">
            {navLinks.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  isActive ? "vc-nav__item is-active" : "vc-nav__item"
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="vc-call">
            <span className="vc-call__label">Call Us</span>
            <span className="vc-call__num">+91 98765 43210</span>
          </div>
        </div>
      </header>
    </>
  );
}
