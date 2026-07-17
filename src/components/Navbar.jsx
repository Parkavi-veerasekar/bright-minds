import { HashLink } from "react-router-hash-link";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1 className="brand">
          <span className="bright">BRIGHT</span>{" "}
          <span className="m">M</span>
          <span className="i">I</span>
          <span className="n">N</span>
          <span className="d">D</span>
          <span className="s">S</span>
        </h1>

        <p className="tagline">
          Pre-Learning Skill Centre
        </p>
      </div>

      <ul className="nav-links">
        <li>
          <HashLink smooth to="/#home">
            Home
          </HashLink>
        </li>

        <li>
          <HashLink smooth to="/#about">
            About
          </HashLink>
        </li>

        <li>
          <HashLink smooth to="/#gallery">
            Gallery
          </HashLink>
        </li>

        <li>
          <HashLink smooth to="/#register">
            Register
          </HashLink>
        </li>

        <li>
          <HashLink smooth to="/#contact">
            Contact
          </HashLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;