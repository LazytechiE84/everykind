import { useNavigate } from "react-router-dom";

const stats = [
  { id: 1, icon: "fa-regular fa-heart", value: "10,000+", label: "Happy Customers" },
  { id: 2, icon: "fa-solid fa-award", value: "5 Years", label: "Crafting Joy" },
  { id: 3, icon: "fa-solid fa-users", value: "25+", label: "Passionate Team" },
  { id: 4, icon: "fa-solid fa-cube", value: "500+", label: "Curated Products" },
  { id: 5, icon: "fa-regular fa-star", value: "4.9★", label: "Average Rating" },
  { id: 6, icon: "fa-solid fa-spa", value: "12,000+", label: "Bouquets Delivered" },
];

const milestones = [
  {
    id: 1,
    year: "2019",
    title: "Where It All Began",
    text: "EveryKind started in a small home studio — a kitchen table covered in ribbon, tissue paper, and wildflowers. Our founder Kemi simply wanted to give people a way to say “I thought of you” without compromise.",
  },
  {
    id: 2,
    year: "2020",
    title: "Growing Through Challenges",
    text: "When the world paused, connection became more important than ever. We pivoted to contactless gift delivery and helped thousands of people celebrate birthdays, graduations, and milestones from a safe distance.",
  },
  {
    id: 3,
    year: "2021",
    title: "The Studio Opens",
    text: "We moved into our first dedicated studio space and expanded our team. Custom balloon installations and money bouquets were born here — innovations that quickly became our most beloved offerings.",
  },
  {
    id: 4,
    year: "2022",
    title: "Corporate & Events",
    text: "Word spread. Corporates, event planners, and hotels began commissioning us for large-scale installations and branded gift experiences, bringing EveryKind into hundreds of new spaces.",
  },
  {
    id: 5,
    year: "2023",
    title: "Community First",
    text: "We launched our “Pay It Forward” gifting programme — partnering with local charities so every 50th order sends a gift box to someone who needs a reason to smile.",
  },
  {
    id: 6,
    year: "2024+",
    title: "Still Curating, Always Kindly",
    text: "Today we ship nationwide, serve thousands of returning customers, and wake up every morning driven by the same belief we started with: every person deserves to feel celebrated.",
  },
];

const values = [
  {
    id: 1,
    title: "Intentional Curation",
    text: "We never fill a box for the sake of filling it. Every item is chosen because it earns its place — the texture, the scent, the colour, the sentiment.",
  },
  {
    id: 2,
    title: "Radical Kindness",
    text: "Kindness is in our name and our bones. We treat suppliers, customers, and each other with the same generosity we pour into every gift.",
  },
  {
    id: 3,
    title: "Sustainable Joy",
    text: "We source locally where possible, choose recyclable packaging, and partner with eco-conscious vendors — because the world we celebrate in matters.",
  },
];

function About() {
  const navigate = useNavigate();

  return (
    <>
      {/* Banner */}
      <section className="about-hero">
        <div className="about-wrap">
          <p className="eyebrow">Our story</p>
          <h1>
            Made with <em>every</em>
            <br />
            kind of love.
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="about-intro">
        <p>
          EveryKind was built on one quiet conviction:{" "}
          <strong>every person deserves to feel seen.</strong> We turn that
          belief into bouquets, balloon arrangements, gift boxes, and moments
          that outlast any occasion.
        </p>
      </section>

      {/* Stats strip */}
      <section className="about-stats">
        <div className="stats-row">
          {stats.map((item) => (
            <div className="stat" key={item.id}>
              <span className="stat-icon">
                <i className={item.icon}></i>
              </span>
              <h3>{item.value}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Origin */}
      <section className="about-origin">
        <div className="origin-inner">
          <div className="origin-photo">
            <img src="/about/founder.jpg" alt="Kemi Adeyemi, founder of EveryKind" />
            <div className="founder-note">
              <h4>A note from our founder</h4>
              <p>
                “I started EveryKind because I kept noticing that gifts were an
                afterthought. I wanted to make them the whole point.”
              </p>
              <span>— Kemi Adeyemi</span>
            </div>
          </div>

          <div className="origin-text">
            <p className="eyebrow">Our origin</p>
            <h2>
              A kitchen table.
              <br />
              A big idea.
            </h2>
            <p>
              In 2019, Kemi Adeyemi cleared her kitchen table, surrounded
              herself with ribbons, dried flowers, and the unwavering belief
              that gifting could be more than a last-minute errand — it could
              be an act of genuine intention.
            </p>
            <p>
              She began hand-curating gift boxes for friends. Then friends of
              friends. Then strangers who heard about “the woman who makes
              gifts feel personal.” Word moved faster than she expected.
            </p>
            <p>
              Today, EveryKind has a dedicated studio, a team of 25+ passionate
              creators, and ships nationwide. But our DNA hasn’t changed: we
              still think obsessively about every ribbon, every card, every
              carefully chosen item inside each box we send.
            </p>
            <button onClick={() => navigate("/products")}>
              Explore Our Collections <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </section>

            {/* Timeline */}
      <section className="about-journey">
        <div className="journey-inner">
          <p className="eyebrow">The journey</p>
          <h2>Five years of milestones</h2>
          <p className="journey-sub">
            Every chapter shaped who we are. Here are the moments that mattered.
          </p>

          <div className="timeline">
            {milestones.map((item, index) => (
              <div
                key={item.id}
                className={index % 2 === 0 ? "tl-item left" : "tl-item right"}
              >
                <div className="tl-content">
                  <span className="tl-year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values">
        <div className="values-inner">
          <p className="eyebrow">What drives us</p>
          <h2>Our values in practice</h2>

          <div className="values-grid">
            {values.map((item) => (
              <div className="value-card" key={item.id}>
                <span className="value-bar"></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;