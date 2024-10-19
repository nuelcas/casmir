import React from "react";
import NavBar from "../components/NavBar";
import "../styles/Contact.css"; // Ensure this points to the correct CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <section className="contact-section">
      <NavBar />
      <div className="contact-content">
        <h1 className="contact-header">Contact Me</h1>
        <p className="contact-description">
          <i>So many things to build... let's grow together!</i>
        </p>

        {/* Netlify Form */}
        <form
          id="contact-form" // Updated ID
          name="contact"
          method="POST"
          data-netlify="true"
          className="contact-form" // Updated class
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-group">
            <label htmlFor="contact-name">Name:</label>
            <input
              type="text"
              id="contact-name" // Updated ID
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-email">Email:</label>
            <input
              type="email"
              id="contact-email" // Updated ID
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-message">Message:</label>
            <textarea
              id="contact-message" // Updated ID
              name="message"
              placeholder="Type your message"
              rows="8"
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>

        <div className="contact-info">
          <p>
            <strong>Email:</strong> casmir_ao@ymail.com
          </p>
        </div>
        <div className="social-icons">
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          </a>
          <a
            href="https://twitter.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} className="social-icon" />
          </a>
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          </a>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p className="copyright">
            © {new Date().getFullYear()} Casmir Onyekani. All Rights Reserved.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
