import flower from "../assets/pictures/flower.jpg";
import money from "../assets/pictures/money.jpg";
import blackbox from "../assets/pictures/blackbox.jpg";
import balloon from "../assets/pictures/balloon.jpg";

const products = [
  {
    id: 1,
    image: flower,
    alt: "Flower bouquet",
    name: "Flower bouquets",
    description: "Fresh, handpicked flowers arranged beautifully",
    price: "₦100,000",
  },
  {
    id: 2,
    image: money,
    alt: "Money bouquet",
    name: "Money bouquets",
    description: "Creative money arrangements for special occasions",
    price: "₦100,000",
  },
  {
    id: 3,
    image: blackbox,
    alt: "Boxed present",
    name: "Boxed presents",
    description: "Elegantly wrapped gift boxes with premium ribbons",
    price: "₦100,000",
  },
  {
    id: 4,
    image: balloon,
    alt: "Balloon arrangement",
    name: "Helium treats",
    description: "Colorful balloon arrangements perfect for celebrations",
    price: "₦100,000",
  },
];

function ProductCard({ image, alt, name, description, price }) {
  return (
    <div className="item">
      <img src={image} alt={alt} />
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="add">
        <h2>{price}</h2>
        <button>Add</button>
      </div>
    </div>
  );
}

function Products() {
  return (
    <section id="products">
      <div className="prod">
        <h1 className="head">
          Our Featured <span id="product">Products</span>
        </h1>
        <p className="par">
          Discover our carefully curated collection of gifts that make every
          occasion memorable
        </p>
        <div className="cards">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Products;