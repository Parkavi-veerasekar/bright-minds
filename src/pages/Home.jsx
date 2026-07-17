import Hero from "../components/Hero";
import Courses from "../components/Courses";
import AdmissionBanner from "../components/AdmissionBanner";
import GalleryPreview from "../components/GalleryPreview";
import RegisterSection from "../components/RegisterSection";
import Footer from "../components/Footer";

import "../styles/Home.css";

function Home() {
  return (
    <>
      {/* Home */}
      <div id="home">
        <Hero />
      </div>

      {/* About */}
      <div id="about">
        <Courses />
      </div>

      {/* Why Choose Us */}
      <section className="why-choose">
        <h2>Why Choose Us?</h2>

        <p className="why-subtitle">
          Give your child the right start with engaging learning methods that
          improve concentration, confidence and logical thinking.
        </p>

        <div className="features">
          <div className="feature-card">
            <span className="icon">🧠</span>
            <h3>Strengthens Concentration & Memory</h3>
            <p>Improves focus and boosts memory through fun activities.</p>
          </div>

          <div className="feature-card">
            <span className="icon">📈</span>
            <h3>Improves Academic Performance</h3>
            <p>Helps children perform better in school and everyday learning.</p>
          </div>

          <div className="feature-card">
            <span className="icon">😊</span>
            <h3>Builds Confidence & Self-Esteem</h3>
            <p>Encourages independent thinking and self-confidence.</p>
          </div>

          <div className="feature-card">
            <span className="icon">💡</span>
            <h3>Develops Logical Thinking</h3>
            <p>Enhances analytical and problem-solving skills.</p>
          </div>

          <div className="feature-card">
            <span className="icon">👨‍🏫</span>
            <h3>Interactive Learning</h3>
            <p>Fun classroom activities keep children engaged and motivated.</p>
          </div>

          <div className="feature-card">
            <span className="icon">⭐</span>
            <h3>Personalized Attention</h3>
            <p>Small batches ensure every child receives individual guidance.</p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <div id="gallery">
        <GalleryPreview />
      </div>

      {/* Admission */}
      <AdmissionBanner />

      {/* Register */}
      <div id="register">
        <RegisterSection />
      </div>
      
      {/* Footer */}
      <Footer />
    </>
  );
}

export default Home;