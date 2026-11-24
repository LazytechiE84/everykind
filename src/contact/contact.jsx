import { useState } from "react";

const details = [
  {
    id: 1,
    icon: "fa-solid fa-location-dot",
    title: "Visit Us",
    lines: ["Abuja, Lagos, Calabar, Kaduna"],
  },
  {
    id: 2,
    icon: "fa-solid fa-phone",
    title: "Call Us",
    lines: ["+234-916-180-4230"],
  },
  {
    id: 3,
    icon: "fa-regular fa-envelope",
    title: "Email Us",
    lines: ["hello@everykind.com"],
  },
  {
    id: 4,
    icon: "fa-regular fa-clock",
    title: "Business Hours",
    lines: [
      "Monday - Friday: 9AM - 6PM",
      "Saturday: 10AM - 4PM",
      "Sunday: Closed",
    ],
  },
];

const faqs = [
  {
    id: 1,
    question: "Do you offer same-day delivery?",
    answer:
      "Yes! Orders placed before 2 PM can be delivered the same day within our local area.",
  },
  {
    id: 2,
    question: "Can I customize my gift?",
    answer:
      "Absolutely! We offer various customization options including personalized messages and special packaging.",
  },
  {
    id: 3,
    question: "What's your return policy?",
    answer:
      "We stand behind our products. If you’re not satisfied, contact us within 48 hours for a resolution.",
  },
];

const emptyForm = { name: "", email: "", phone: "", message: "" };

function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setSent(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Message:", form);
    setSent(true);
    setForm(emptyForm);
  }

  return (
    <section className="ct-page">
      <div className="ct-inner">
        <h1 className="head">
          <span>Get in Touch</span>
        </h1>
        <p className="par">
          Have questions? We'd love to hear from you. Send us a message and
          we'll respond as soon as possible.
        </p>

        <div className="ct-grid">
          {/* Form */}
          <div className="ct-card">
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="phone">Phone (Optional)</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+234 800 000 0000"
                value={form.phone}
                onChange={handleChange}
              />

              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="How can we help you?"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>

              <button type="submit">Send Message</button>

              {sent && (
                <p className="ct-success">
                  <i className="fa-solid fa-circle-check"></i> Thanks! Your
                  message has been sent. We'll get back to you soon.
                </p>
              )}
            </form>
          </div>

          {/* Right column */}
          <div className="ct-side">
            <div className="ct-info">
              <h2>Contact Information</h2>
              {details.map((item) => (
                <div className="ct-row" key={item.id}>
                  <span className="ct-icon">
                    <i className={item.icon}></i>
                  </span>
                  <div>
                    <h4>{item.title}</h4>
                    {item.lines.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="ct-card ct-faq">
              <h2>Frequently Asked Questions</h2>
              {faqs.map((item) => (
                <div className="faq-item" key={item.id}>
                  <h4>{item.question}</h4>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;