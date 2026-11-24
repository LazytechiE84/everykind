import Hero from "./components/hero";
import Products from "./components/products";
import Magic from "./components/magic";
import Services from "./components/services";
import Testimonials from "./components/testimonials";
import Cta from "./components/cta";

function Home() {
  return (
    <>
      <Hero />
      <Products />
      <Magic />
      <Services />
      <Testimonials />
      <Cta />
    </>
  );
}

export default Home;