import { useNavigate } from "react-router-dom";
import heroPic from "../assets/pictures/heropic.jpg";

function Hero() {
  const navigate = useNavigate();
  return (
    <main>
      <div id="hero-section">
        <p className="label">Curated gifts for every occasion</p>
        <h1>
          Make Every <span id="moment">Moment</span> Special
        </h1>
        <p className="hero-text">
          From balloon treats to flower bouquets, we curate thoughtful gifts
          that express what words cannot. Celebrate life's precious moments
          with Everykind
        </p>
        <button onClick={() => navigate("/products")}>Shop now</button>
        <button onClick={() => navigate("/services")}>Explore Services</button>
        <div id="data">
          <div>
            <h3>500+</h3>
            <p>Happy Customers</p>
          </div>
          <div>
            <h3>50+</h3>
            <p>Unique Products</p>
          </div>
          <div>
            <span>
              <h3>4.9</h3>
              <i className="fa-solid fa-star"></i>
            </span>
            <p>Rating</p>
          </div>
        </div>
      </div>
      <div>
        <img src={heroPic} alt="Curated Everykind gift display" />
      </div>
    </main>
  );
}

export default Hero;