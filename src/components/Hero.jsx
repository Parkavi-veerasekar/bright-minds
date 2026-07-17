import "../styles/Hero.css";
import { HashLink } from "react-router-hash-link";
import { useState, useEffect } from "react";

import hero1 from "../assets/Hero/hero1.jpg";
import hero2 from "../assets/Hero/hero2.jpg";
import hero3 from "../assets/Hero/hero3.jpg";

const slides = [
  {
    image: hero1,
    subtitle: "Pre-Learning Skill Centre",
    tags: ["Abacus", "Vedic Maths", "Phonics"],
    description:
      "Empowering young minds through fun, interactive and activity-based learning. We nurture confidence, concentration, logical thinking and academic excellence in every child.",
    button1: "Register Now",
    button2: "Learn More",
  },

  {
    image: hero2,
    subtitle: "Develop Skills for Life",
    tags: ["Creative Learning", "Brain Development", "Memory Skills"],
    description:
      "Building confidence, concentration and creativity through joyful learning experiences that children love every day.",
    button1: "Join Today",
    button2: "Explore",
  },

  {
    image: hero3,
    subtitle: "Small Batches • Personal Care",
    tags: ["Confidence", "Logical Thinking", "Personal Attention"],
    description:
      "Every child receives individual attention from experienced trainers to unlock their full potential.",
    button1: "Enroll Now",
    button2: "Know More",
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="hero"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)), url(${slides[current].image})`,
      }}
    >
      <div key={current} className="hero-content">

        <h1 className="hero-title">
          <span className="bright">BRIGHT</span>{" "}
          <span className="m">M</span>
          <span className="i">I</span>
          <span className="n">N</span>
          <span className="d">D</span>
          <span className="s">S</span>
        </h1>

        <h2>{slides[current].subtitle}</h2>

        <div className="course-tags">
          {slides[current].tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <p>{slides[current].description}</p>

        <div className="hero-buttons">
          <HashLink smooth to="/#register" className="hero-btn">
            {slides[current].button1}
          </HashLink>

          <HashLink smooth to="/#about" className="hero-outline-btn">
            {slides[current].button2}
          </HashLink>
        </div>

      </div>
    </section>
  );
}

export default Hero;