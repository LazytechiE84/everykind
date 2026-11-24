import { Link } from "react-router-dom";
import logo from "../assets/pictures/everykind_logo.png";
import { useCart } from "../context/cartcontext";       // header, productcard, cart
function Header() {
  const { totalCount } = useCart();
  return (
    <header>
      <nav>
        <span id="logo">
          <img src={logo} alt="Everykind logo" />
        </span>
        <ul>
          <li><Link to="/products">Shop</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
        <ul className="icons">
          <li><Link to="/favourites"><i className="fa-regular fa-heart"></i></Link></li>
          <li>
            <Link to="/cart" className="cart-link" aria-label="Cart">
              <i className="fa-solid fa-cart-shopping"></i>
              {totalCount > 0 && <span className="cart-badge">{totalCount}</span>}
            </Link>
          </li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;