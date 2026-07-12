import "../styles/Hero.css";
import heroImage from "../assets/hero.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Empowering Young Minds</h1>

        <p>
          Bright Minds Pre-Learning Skill Centre offers
          Abacus, Vedic Maths and Phonics classes to
          improve concentration, confidence and logical
          thinking.
        </p>

        <Link to="/register" className="hero-btn">
  Register Now
</Link>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Bright Minds" />
      </div>
    </section>
  );
}

export default Hero;