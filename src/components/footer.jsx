import logo from "../assets/pictures/everykind_logo.png";

const shopLinks = [
  "Flower bouquets",
  "Money bouquets",
  "Boxed presents",
  "Helium treats",
];

const serviceLinks = [
  "Custom curation",
  "Same-day delivery",
  "Event planning",
  "Gift consultation",
];

function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <span className="footer-logo">
            <img src={logo} alt="Everykind logo" />
          </span>
          <p>
            Making every moment special with thoughtfully curated gifts and
            exceptional service.
          </p>
          <div className="footer-socials">
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Shop</h4>
          <ul>
            {shopLinks.map((link) => (
              <li key={link}>
                <a href="#products">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            {serviceLinks.map((link) => (
              <li key={link}>
                <a href="#services">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <p>
            <i className="fa-solid fa-phone"></i>{" "}
            <a href="tel:+2349161804230">+234-916-180-4230</a>
          </p>
          <p>
            <i className="fa-solid fa-envelope"></i> hello@everykind.com
          </p>
          <p>
            <i className="fa-solid fa-location-dot"></i> Abuja, Lagos, Calabar,
            Kaduna
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Everykind. All rights reserved.</span>
        <span>
          Made with <i className="fa-solid fa-heart"></i> for every occasion
        </span>
      </div>
    </footer>
  );
}

export default Footer;