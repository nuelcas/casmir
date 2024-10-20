import React from "react";
import { Link } from "react-router-dom";
import ReactTypingEffect from "react-typing-effect";
import "../styles/LandingPage.css";

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

      <h1 className="name">Casmir Onyekani</h1>

      <h2 className="title">
        <ReactTypingEffect
          text={["Software Engineer", "Technical Writer"]}
          speed={100}
          eraseSpeed={50}
          typingDelay={500}
          eraseDelay={2000}
          cursorRenderer={(cursor) => <span>{cursor}</span>}
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
