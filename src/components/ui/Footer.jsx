import { NavLink } from "react-router-dom";
import {
  FaEnvelope,
  FaInstagram,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import { FaGlobeAmericas } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container footer-grid grid grid-four-cols">
        <div className="footer-brand">
          <NavLink to="/" className="footer-logo">
            <FaGlobeAmericas />
            <span>Globe Guide</span>
          </NavLink>
          <p>
            Explore countries, capitals, populations, and facts that make the
            world easier to understand.
          </p>
          <div className="footer-socials" aria-label="Social links">
            
            <a href="https://instagram.com" aria-label="Instagram">
              <FaInstagram />
            </a>
            
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/country">Countries</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <ul>
            <li>Country facts</li>
            <li>World capitals</li>
            <li>Population data</li>
            <li>Travel inspiration</li>
          </ul>
        </div>

        <div className="footer-contact-info">
          <h3>Get In Touch</h3>
          <ul>
            <li>
              <FaLocationDot />
              <span>Global research desk</span>
            </li>
            <li>
              <FaEnvelope />
              <a href="mailto:hello@globeguide.com">hello@globeguide.com</a>
            </li>
            <li>
              <FaPhone />
              <a href="tel:+15550198765">+1 555 019 8765</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="copyright-area">
        <div className="container copyright-wrapper">
          <p>&copy; {currentYear} Globe Guide. All rights reserved.</p>
          <p>Built for curious minds and better world knowledge.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
