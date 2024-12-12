import React from "react";
import "./Testimonials.css";
import example from "../assets/images/example.jpeg";

const testimonialsData = [
  {
    image: example,
    quote: "One of the best productivity tools",
    description:
      "Focusmate is one of the best productivity tools I’ve found. It is built around pre-commitment pacts — a psychological device that helps you get started and follow through on just about any task. Focusmate is an effective and accessible tool anyone can use — so much so that I mention it in my book Indistractable.",
    name: "Nir Eyal",
    role: "Author, Indistractable & Hooked",
    sessions: "40+ sessions",
    bgColor: "#f5faff",
  },
  {
    image: example,
    quote: "Plan and Achieve",
    description:
      "I had all these dreams about how I wanted my life to look, but no real plan to get there. Focusmate taught me how to plan things out and achieve a tiny chunk in each session. This platform is helping me become the version of myself I’ve always aspired to be.",
    name: "Kasturi Patra",
    role: "B2B Tech Content Writer",
    sessions: "3800+ sessions",
    bgColor: "#ffe5e5",
  },
  {
    image: example,
    quote: "Joyful productivity",
    description:
      "I have now logged more than 6,500 sessions on Focusmate. It has absolutely helped my business grow and enabled me to work with more joyful productivity.",
    name: "George Kao",
    role: "Business Coach for Soulpreneurs",
    sessions: "6500+ sessions",
    bgColor: "#e8ffe5",
  },
  {
    image: example,
    quote: "Astonishingly powerful",
    description:
      "As astonishingly powerful as it is simple. Focusmate can 100% change your life. Hands down, my number one favorite tool.",
    name: "Francisco R.",
    role: "Speaker, Trainer, Coach",
    sessions: "2900+ sessions",
    bgColor: "#fff0d4",
  },
  {
    image: example,
    quote: "Indispensable productivity tool",
    description:
      "Focusmate is the most indispensable productivity tool in my workflow. It helps me rack up deep work sessions, and as a bonus I’ve made a bunch of good friends through it.",
    name: "Ishan M.",
    role: "Software engineer",
    sessions: "3000+ sessions",
    bgColor: "#e5e5ff",
  },
  {
    image: example,
    quote: "Lifechanging!",
    description:
      "Focusmate has completely changed my life by giving me support to get a majillion things done. Without it, I wouldn’t have made such incredible progress on my independent business, or maintained my life, home, and routine to a level that I’ve never achieved before.",
    name: "Gemma D.",
    role: "Celebrant",
    sessions: "5500+ sessions",
    bgColor: "#fff5e5",
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="testimonials-heading">Testimonials</h2>
      {testimonialsData.map((testimonial, index) => (
        <div
          key={index}
          className="testimonial-block"
          style={{ backgroundColor: testimonial.bgColor }}
        >
          <div className="testimonial-image-wrapper">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="testimonial-image"
            />
          </div>
          <div className="testimonial-content">
            <h3 className="testimonial-quote">“{testimonial.quote}”</h3>
            <p className="testimonial-description">{testimonial.description}</p>
            <div className="testimonial-author">
              <h4 className="testimonial-name">{testimonial.name}</h4>
              <p className="testimonial-role">{testimonial.role}</p>
              <span className="testimonial-sessions">{testimonial.sessions}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
