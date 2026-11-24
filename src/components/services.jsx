const services = [
  {
    id: 1,
    icon: "fa-brands fa-dropbox",
    title: "Custom Gift Curation",
    text: "Personalized gift selection tailored to your recipient and occasion",
  },
  {
    id: 2,
    icon: "fa-solid fa-truck",
    title: "Same-Day Delivery",
    text: "Fast and reliable delivery to make sure your gift arrives on time",
  },
  {
    id: 3,
    icon: "fa-solid fa-gift",
    title: "Gift Wrapping",
    text: "Professional wrapping services with premium materials and ribbons",
  },
  {
    id: 4,
    icon: "fa-regular fa-calendar",
    title: "Event Planning",
    text: "Complete event decoration and setup for your special occasions",
  },
  {
    id: 5,
    icon: "fa-solid fa-screwdriver-wrench",
    title: "Customization",
    text: "Add personal touches with custom messages and special requests",
  },
  {
    id: 6,
    icon: "fa-regular fa-comment",
    title: "Gift Consultation",
    text: "Expert advice to help you choose the perfect gift for anyone",
  },
];

function Services() {
  return (
    <section className="services" id="services">
      <div id="service">
        <h1 className="head">
          Our <span>Services</span>
        </h1>
        <p className="par">
          We go beyond just products. Experience our comprehensive services that
          make gift-giving affordable
        </p>
        <div className="service">
          {services.map((item) => (
            <div key={item.id}>
              <p>
                <span>
                  <i className={item.icon}></i>
                </span>
              </p>
              <p>
                <strong>{item.title}</strong>
              </p>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;