import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import "../styles/NavBar.css"; // Assuming you are saving the CSS in the styles folder

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header id="header">
      <div className="container">
        <nav className="navbar">
          {/* Hamburger Menu for mobile */}
          <div id="hamburger-menu" onClick={toggleMenu}>
            <div className={`bar ${isOpen ? "change" : ""}`}></div>
            <div className={`bar ${isOpen ? "change" : ""}`}></div>
            <div className={`bar ${isOpen ? "change" : ""}`}></div>
          </div>

          {/* Navigation Links */}
          <div id="nav-links" className={isOpen ? "active" : ""}>
            <ul id="sticky-menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
