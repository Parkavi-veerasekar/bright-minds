import { Link } from "react-router-dom";
import "../styles/GalleryPreview.css";

import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.jpg";

function GalleryPreview() {
  return (
    <section id="gallery" className="gallery-preview">

      <h2>Our Gallery</h2>

      <p className="gallery-subtitle">
        Explore some memorable moments from our Bright Minds
        Pre-Learning Skill Centre.
      </p>

      <div className="gallery-grid">

        <div className="gallery-card">
          <img src={img1} alt="Gallery 1" />
        </div>

        <div className="gallery-card">
          <img src={img2} alt="Gallery 2" />
        </div>

        <div className="gallery-card">
          <img src={img3} alt="Gallery 3" />
        </div>

      </div>

      <Link to="/gallery" className="gallery-btn">
        View Full Gallery →
      </Link>

    </section>
  );
}

export default GalleryPreview;