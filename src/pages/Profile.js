import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/Profile.css";

function Profile() {
  return (
    <div className="footer-container">
      <div className="profile-page">
        <NavBar />

        <section className="about-me">
          <h2>About Me</h2>
          <p>
            Hi, I’m Casmir Onyekani, but you can call me Cas. I’ve explored the tech world and grown into a versatile professional
          </p>
          <p>
            With a passion for software development, I craft digital experiences that
            not only captivate but also solve real-world problems. But my
            journey doesn't stop there. As a technical writer, I translate
            complex concepts into digestible insights, sharing knowledge and
            empowering others to thrive in the digital age. As a teacher, I
            foster learning environments where curiosity flourishes and minds
            are ignited. And as an entrepreneur, I'm driven to build solutions
            that make a difference.
          </p>
          <p>
            Together, let's embark on a journey of innovation, education, and
            growth.
          </p>
        </section>

        <section className="skills">
          <h2>Skills</h2>
          <h3>Languages</h3>
          <p>JavaScript, Python, SQL</p>
          <h3>Frameworks/Libraries</h3>
          <p>React.js, TypeScript, Node.js, Django, Flutter, and Tailwind</p>
          <h3>Version Control</h3>
          <p>Git and GitHub</p>
          <h3>Technical Writing</h3>
          <p>Clear and concise articles, User manuals, API guides, technical documentation</p>
          <h3>Soft Skills</h3>
          <p>Excellent communication, Teamwork, Creativity, Adaptability</p>
        </section>

        <section className="education">
          <h2>Education</h2>
          <p>B.Sc. Ed. in Computer Science</p>
          <p>Ebonyi State University, Abakaliki, Nigeria</p>
          <p>2006 - 2010</p>
        </section>

        <section className="certification">
          <h2>Certifications</h2>
          <p>Software Development and Entrepreneurship - PLP Academy</p>
          <p>Web Development - CWW Tech Africa</p>
          <p>Responsive Web Design - freeCodeCamp</p>
          <p>JavaScript, Algorithms and Data Structure - freeCodeCamp</p>
          <p>Front End Development Libraries - freeCodeCamp</p>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
