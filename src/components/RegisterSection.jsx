import "../styles/RegisterSection.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function RegisterSection() {
  return (
    <section className="register-section">

      <div className="register-heading">

        <span>ADMISSIONS OPEN</span>

        <h2>Begin Your Child's Learning Journey</h2>

        <p>
          Give your child the best foundation through Abacus, Vedic Maths and
          Phonics. Contact us today to learn more about our programs.
        </p>

      </div>

      <div className="register-container">

        {/* LEFT - CONTACT */}

        <div id="contact" className="contact-side">

          <div className="contact-card">

            <FaMapMarkerAlt className="icon" />

            <div>
              <h4>ADDRESS</h4>
              <p>
                Bright Minds Pre-Learning Skill Centre
                <br />
                Your Academy Address
              </p>
            </div>

          </div>

          <div className="contact-card">

            <FaPhoneAlt className="icon" />

            <div>
              <h4>PHONE</h4>
              <p>
                +91 98765 43210
                <br />
                +91 98765 43211
              </p>
            </div>

          </div>

          <div className="contact-card">

            <FaEnvelope className="icon" />

            <div>
              <h4>EMAIL</h4>
              <p>brightminds@gmail.com</p>
            </div>

          </div>

          <div className="contact-card">

            <FaClock className="icon" />

            <div>
              <h4>WORKING HOURS</h4>
              <p>
                Monday - Saturday
                <br />
                9:00 AM - 6:00 PM
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT - REGISTER */}

        <form id="register" className="register-form">

          <div className="row">

            <input type="text" placeholder="Parent Name" />

            <input type="text" placeholder="Child Name" />

          </div>

          <input type="number" placeholder="Age" />

          <input type="tel" placeholder="Phone Number" />

          <select>
            <option>Select Course</option>
            <option>Abacus</option>
            <option>Vedic Maths</option>
            <option>Phonics</option>
          </select>

          <textarea
            rows="5"
            placeholder="Tell us about your child..."
          ></textarea>

          <button type="submit">
            REGISTER NOW
          </button>

        </form>

      </div>

    </section>
  );
}

export default RegisterSection;