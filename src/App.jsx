import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/footer";
import Home from "./home";
import Product from "./product/product";
import Service from "./service/service";
import About from "./about/about";
import Contact from "./contact/contact";
import Cart from "./cart/cart";
import Favourites from "./favourites/favourites.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product />} />
        <Route path="/services" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;