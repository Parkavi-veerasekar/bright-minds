import "../styles/Courses.css";
import { HashLink } from "react-router-hash-link";
import abacus from "../assets/Courses/Abacus.jpg";
import vedic from "../assets/Courses/vedic.jpg";
import phonics from "../assets/Courses/phonics.jpg";

function Courses() {
  return (
    <section id="about" className="courses">

      <span className="section-tag">OUR PROGRAMS</span>

      <h2>Explore Our Courses</h2>

      <p className="course-subtitle">
        Interactive learning programs designed to improve concentration,
        confidence, logical thinking and communication skills in every child.
      </p>

      <div className="course-grid">

        <div className="course-card">

          <div className="course-image">
            <img src={abacus} alt="Abacus" />
            <span className="badge">Most Popular</span>
          </div>

          <div className="course-content">

            <h3>ABACUS</h3>

            <p>
              Enhance concentration, memory, mental arithmetic,
              visualization skills and overall brain development
              through our interactive Abacus program.
            </p>

            <ul>
              <li>✔ Brain Development</li>
              <li>✔ Memory Boost</li>
              <li>✔ Faster Calculations</li>
            </ul>

            <button>Learn More →</button>

          </div>

        </div>

        <div className="course-card">

          <div className="course-image">
            <img src={vedic} alt="Vedic Maths" />
            <span className="badge">New Batch</span>
          </div>

          <div className="course-content">

            <h3>VEDIC MATHS</h3>

            <p>
              Learn powerful calculation techniques that improve
              speed, accuracy, logical thinking and mathematical confidence.
            </p>

            <ul>
              <li>✔ Speed Maths</li>
              <li>✔ Logical Thinking</li>
              <li>✔ Exam Confidence</li>
            </ul>

            <button>Learn More →</button>

          </div>

        </div>

        <div className="course-card">

          <div className="course-image">
            <img src={phonics} alt="Phonics" />
            <span className="badge">Kids Favourite</span>
          </div>

          <div className="course-content">

            <h3>PHONICS</h3>

            <p>
              Improve reading, pronunciation, vocabulary and communication
              skills through engaging phonics activities.
            </p>

            <ul>
              <li>✔ Reading Skills</li>
              <li>✔ Vocabulary</li>
              <li>✔ Communication</li>
            </ul>
            <div className="learnmore">
              <button>Learn More →</button>
          
            </div>
            

          </div>

        </div>

      </div>

    </section>
  );
}

export default Courses;