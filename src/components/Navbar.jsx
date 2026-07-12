import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1 className="brand">
  <span className="bright">BRIGHT</span>{" "}
  <span className="m red">M</span>
  <span className="m orange">I</span>
  <span className="m green">N</span>
  <span className="m yellow">D</span>
  <span className="m purple">S</span>
</h1></div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;