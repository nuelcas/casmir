import React from "react";
import { Link } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect"; // Import the typing effect library
import "../styles/LandingPage.css"; // Import the CSS file for styling

function LandingPage() {
  return (
    <div className="landing-container">
      {/* Photo */}
      <div className="photo-container">
        <img
          src="/images/casprofile.jpg"
          alt="Casmir"
          className="profile-photo"
        />
      </div>

      {/* Name */}
      <h1 className="name">Casmir Onyekani</h1>

      {/* Title with typing effect */}
      <h2 className="title">
        <ReactTypingEffect
          text={["Software Engineer", "Technical Writer"]}
          speed={100} // Typing speed
          eraseSpeed={50} // Speed for erasing
          typingDelay={500} // Delay before typing starts
          eraseDelay={2000} // Delay before erasing starts
          cursorRenderer={(cursor) => <span>{cursor}</span>} // Customize cursor
          displayTextRenderer={(text, i) => {
            return <span>{text}</span>;
          }}
        />
      </h2>

      {/* Learn More Button */}
      <Link to="/profile" className="learn-more-link">
        Learn more about me <span className="arrow">→</span>
      </Link>
    </div>
  );
}

export default LandingPage;
