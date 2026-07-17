import "../styles/Footer.css";
import { HashLink } from "react-router-hash-link";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left */}

        <div className="footer-about">

          <img src={logo} alt="Bright Minds Logo" className="footer-logo" />

          <p>Bright Minds</p>
           <p> Pre-Learning Skill Centre 
          </p>

          <div className="social-icons">

            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaWhatsapp />
            </a>

          </div>

        </div>

        {/* Quick Links */}

        <div className="footer-links">

          <h3>Quick Links</h3>

          <HashLink smooth to="/#home">Home</HashLink>
          <HashLink smooth to="/#about">About</HashLink>
          <HashLink smooth to="/#gallery">Gallery</HashLink>
          <HashLink smooth to="/#register">Register</HashLink>
          <HashLink smooth to="/#contact">Contact</HashLink>

        </div>

        {/* Programs */}

        <div className="footer-links">

          <h3>Our Programs</h3>

          <a href="#">Abacus</a>
          <a href="#">Vedic Maths</a>
          <a href="#">Phonics</a>

        </div>

        {/* Contact */}

        <div className="footer-contact">

          <h3>Contact</h3>

          <div className="contact-item">

            <FaMapMarkerAlt className="footer-icon"/>

            <p>
              Bright Minds Pre-Learning Skill Centre
              <br />
              Chennai, Tamil Nadu
            </p>

          </div>

          <div className="contact-item">

            <FaPhoneAlt className="footer-icon"/>

            <p>+91 98765 43210</p>

          </div>

          <div className="contact-item">

            <FaEnvelope className="footer-icon"/>

            <p>brightminds@gmail.com</p>

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        © 2026 Bright Minds Pre-Learning Skill Centre. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;