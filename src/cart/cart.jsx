import { Link } from "react-router-dom";
import { useCart } from "../context/cartcontext";       // header, productcard, cart

const WHATSAPP_NUMBER = "2349161804230";
const formatPrice = (n) => `$${n.toFixed(2)}`;

function Cart() {
  const { items, changeQty, removeItem, clearCart, totalCount, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <section className="cart-page">
        <div className="cart-inner">
          <h1 className="head">
            <span>Your Cart</span>
          </h1>
          <div className="cart-empty">
            <i className="fa-solid fa-cart-shopping"></i>
            <p>Your cart is empty.</p>
            <Link to="/products" className="cart-btn">
              Browse Products
            </Link>
          </div>
        </div>
      </section>
    );
  }

  const message =
    "Hello EveryKind, I'd like to order:\n" +
    items.map((i) => `• ${i.name} x${i.qty} — ${formatPrice(i.price * i.qty)}`).join("\n") +
    `\nTotal: ${formatPrice(totalPrice)}`;

  const checkoutLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <section className="cart-page">
      <div className="cart-inner">
        <h1 className="head">
          <span>Your Cart</span>
        </h1>
        <p className="par">
          {totalCount} {totalCount === 1 ? "item" : "items"} ready to be wrapped
        </p>

        <div className="cart-grid">
          <div className="cart-list">
            {items.map((item) => (
              <div className="cart-row" key={item.id}>
                <img src={item.image} alt={item.name} />
                <div className="cart-info">
                  <h3>{item.name}</h3>
                  <p>{item.category}</p>
                  <span>{formatPrice(item.price)}</span>
                </div>
                <div className="qty">
                  <button onClick={() => changeQty(item.id, -1)} aria-label="Decrease quantity">
                    −
                  </button>
                  <span>{item.qty}</span>
                  <button onClick={() => changeQty(item.id, 1)} aria-label="Increase quantity">
                    +
                  </button>
                </div>
                <p className="line-total">{formatPrice(item.price * item.qty)}</p>
                <button
                  className="remove"
                  onClick={() => removeItem(item.id)}
                  aria-label={`Remove ${item.name}`}
                >
                  <i className="fa-regular fa-trash-can"></i>
                </button>
              </div>
            ))}
          </div>

          <aside className="cart-summary">
            <h2>Order Summary</h2>
            <div className="sum-row">
              <span>Items</span>
              <span>{totalCount}</span>
            </div>
            <div className="sum-row sum-total">
              <span>Total</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>
            <a className="cart-btn" href={checkoutLink} target="_blank" rel="noreferrer">
              <i className="fa-brands fa-whatsapp"></i> Checkout on WhatsApp
            </a>
            <button className="cart-clear" onClick={clearCart}>
              Clear cart
            </button>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Cart;