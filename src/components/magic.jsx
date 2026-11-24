import magicVideo from "../assets/pictures/everykind.mp4";

const steps = [
  {
    id: 1,
    icon: "fa-solid fa-magnifying-glass",
    title: "Browse & Choose",
    text: "Explore our curated catalog and pick the gift that fits the moment",
  },
  {
    id: 2,
    icon: "fa-solid fa-pen",
    title: "Customize",
    text: "Add a personal message and finishing touches that make it yours",
  },
  {
    id: 3,
    icon: "fa-solid fa-gift",
    title: "Receive & Celebrate",
    text: "Sit back as we deliver it fresh, on time, and ready to celebrate",
  },
];

function Magic() {
  return (
    <section className="magic">
      <div id="magic">
        <h1 className="head">
          See the <span>Magic</span> Unfold
        </h1>
        <p className="par">
          Watch how we create unforgettable moments with our handcrafted gifts
          and personalized touches
        </p>
        <div className="magic-video">
          <video src={magicVideo} controls></video>
        </div>
        <div className="standards">
          {steps.map((step) => (
            <div key={step.id}>
              <p className="one">
                <i className={step.icon}></i>
              </p>
              <p className="two">{step.title}</p>
              <p className="three">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Magic;