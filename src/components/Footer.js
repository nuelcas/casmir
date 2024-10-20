import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">
          <span className="copyright-icon">©</span> 2023 Casmir Onyekani. All
          rights reserved.
        </p>
        <div className="social-icons">
          <a
            href="https://github.com/nuelcas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github social-icon"></i>
          </a>
          <a
            href="https://twitter.com/casweb_dev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter social-icon"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/casmir-onyekani"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin social-icon"></i>
          </a>
          <a
            href="https://www.facebook.com/nuelcas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook social-icon"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
