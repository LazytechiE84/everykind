import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { CartProvider } from "./context/cartcontext";   // main.jsx
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <CartProvider>
      <App />
    </CartProvider>
  </HashRouter>
);