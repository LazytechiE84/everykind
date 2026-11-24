import { useNavigate } from "react-router-dom";
import ctaImg from "../assets/pictures/cta.jpg";

function Cta() {
  const navigate = useNavigate();

  return (
    <section className="cta" id="cta">
      <div className="cta-text">
        <h1 className="head">
          Ready to Make Someone <span>Smile?</span>
        </h1>
        <p className="par">
          Browse our collection and find the perfect gift. With same-day
          delivery and expert curation, we make gift-giving easy and memorable.
        </p>
        <div className="cta-buttons">
          <button onClick={() => navigate("/products")}>Start Shopping</button>
          <a href="mailto:hello@everykind.com">Contact Us</a>
        </div>
      </div>
      <div className="cta-img">
        <img src={ctaImg} alt="Wrapped Everykind gift" />
      </div>
    </section>
  );
}

export default Cta;