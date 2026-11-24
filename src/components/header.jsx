import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/pictures/everykind_logo.png";
import { useCart } from "../context/cartcontext";

const links = [
  { to: "/products", label: "Shop" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const linkClass = ({ isActive }) => (isActive ? "active" : "");

function Header() {
  const { totalCount } = useCart();
  const [scrolled, setScrolled] = useState(() => window.scrollY > 24);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className={scrolled ? "island-wrap scrolled" : "island-wrap"}>
        <nav className="island" aria-label="Main">
          <Link to="/" className="island-logo" onClick={close}>
            <img src={logo} alt="Everykind logo" />
          </Link>

          <ul className="island-links">
            {links.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} className={linkClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="island-actions">
            <Link to="/favourites" aria-label="Favourites" onClick={close}>
              <i className="fa-regular fa-heart"></i>
            </Link>
            <Link to="/cart" className="cart-link" aria-label="Cart" onClick={close}>
              <i className="fa-solid fa-cart-shopping"></i>
              {totalCount > 0 && <span className="cart-badge">{totalCount}</span>}
            </Link>
            <button
              className="burger"
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <i className={open ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i>
            </button>
          </div>
        </nav>

        <div className={open ? "mobile-menu open" : "mobile-menu"}>
          {links.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass} onClick={close}>
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;