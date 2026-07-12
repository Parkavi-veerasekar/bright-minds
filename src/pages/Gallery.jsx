import "../styles/Gallery.css";

import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/2.jpg";
import img3 from "../assets/gallery/3.jpg";

function Gallery() {
  return (
    <section className="gallery">
      <h1>Our Gallery</h1>

      <p>
        Explore some memorable moments from our Bright Minds learning centre.
      </p>

      <div className="gallery-grid">
        <img src={img1} alt="Gallery 1" />
        <img src={img2} alt="Gallery 2" />
        <img src={img3} alt="Gallery 3" />
      </div>
    </section>
  );
}

export default Gallery;