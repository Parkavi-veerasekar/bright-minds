import "../styles/About.css";

function About() {
  return (
    <section className="about">
      <h1>About Bright Minds</h1>

      <p>
        Bright Minds Pre-Learning Skill Centre is dedicated to helping
        children build a strong academic foundation through fun and
        interactive learning.
      </p>

      <div className="about-boxes">

        <div className="box">
          <h2>Abacus</h2>
          <p>
            Improves concentration, memory, speed and mental arithmetic.
          </p>
        </div>

        <div className="box">
          <h2>Vedic Maths</h2>
          <p>
            Learn fast calculation techniques and logical thinking.
          </p>
        </div>

        <div className="box">
          <h2>Phonics</h2>
          <p>
            Develop reading, pronunciation and communication skills.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;