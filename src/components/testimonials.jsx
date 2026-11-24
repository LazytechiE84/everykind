const testimonials = [
  {
    id: 1,
    quote:
      "The balloon bouquet I ordered was stunning. It made my daughter's birthday so special, the attention to detail was amazing.",
    name: "Sarah Johnson",
    role: "Happy Customer",
  },
  {
    id: 2,
    quote:
      "Everykind handled our office anniversary gifting. Professional from start to finish, and the results exceeded what we expected.",
    name: "Michael Chen",
    role: "Corporate Client",
  },
  {
    id: 3,
    quote:
      "I've ordered multiple times for different occasions now. The flowers are always fresh and beautifully arranged. Highly recommend.",
    name: "Emily Rodriguez",
    role: "Repeat Customer",
  },
];

function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testi-wrap">
        <h1 className="head">
          What Our <span>Customers Say</span>
        </h1>
        <p className="par">
          Don't just take our word for it — hear it from the people we've
          celebrated with
        </p>
        <div className="testi-cards">
          {testimonials.map((item) => (
            <div className="testi-item" key={item.id}>
              <div className="stars">
                {[1, 2, 3, 4, 5].map((n) => (
                  <i key={n} className="fa-solid fa-star"></i>
                ))}
              </div>
              <p className="quote">{item.quote}</p>
              <div className="testi-author">
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;