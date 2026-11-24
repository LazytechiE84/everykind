import { createContext, useContext, useEffect, useState } from "react";
import { catalog } from "../data/catalog";

const CartContext = createContext(null);
const STORAGE_KEY = "everykind-cart";

function loadLines() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [lines, setLines] = useState(loadLines);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      /* storage unavailable, ignore */
    }
  }, [lines]);

  // Only ids and quantities are stored. Names, prices and images come from the catalog.
  const items = lines
    .map((line) => {
      const product = catalog.find((p) => p.id === line.id);
      return product ? { ...product, qty: line.qty } : null;
    })
    .filter(Boolean);

  function addItem(id) {
    setLines((prev) =>
      prev.some((l) => l.id === id)
        ? prev.map((l) => (l.id === id ? { ...l, qty: l.qty + 1 } : l))
        : [...prev, { id, qty: 1 }]
    );
  }

  function changeQty(id, delta) {
    setLines((prev) =>
      prev
        .map((l) => (l.id === id ? { ...l, qty: l.qty + delta } : l))
        .filter((l) => l.qty > 0)
    );
  }

  function removeItem(id) {
    setLines((prev) => prev.filter((l) => l.id !== id));
  }

  function clearCart() {
    setLines([]);
  }

  const totalCount = items.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.qty * i.price, 0);

  return (
    <CartContext.Provider
      value={{ items, addItem, changeQty, removeItem, clearCart, totalCount, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};