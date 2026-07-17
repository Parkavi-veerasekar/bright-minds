import { Link } from "react-router-dom";
import "../styles/AdmissionBanner.css";

function AdmissionBanner() {
  return (
    <section className="admission-banner">

      <div className="banner-content">

        <h2>Admissions Open 2026</h2>

        <p>
          Give your child the best start with Bright Minds
          Pre-Learning Skill Centre.
        </p>

        <div className="banner-points">

          <div>✅ Age 4+ Years</div>

          <div>✅ Certified Trainers</div>

          <div>✅ Limited Seats</div>

          <div>✅ Activity Based Learning</div>

        </div>

        <Link to="/register" className="banner-btn">
          Register Now
        </Link>

      </div>

    </section>
  );
}

export default AdmissionBanner;