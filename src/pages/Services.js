import React from "react";
import NavBar from "../components/NavBar"; // Import the NavBar component
import Footer from "../components/Footer"; // Import the Footer component
import "../styles/Services.css"; // Import the Profile CSS for styling

function Services() {
  return (
    <div>
      <NavBar />
      <div id="services">
        <div className="container">
          <h2 className="sub-title">Services</h2>
          <div className="services-row">
            <div className="services-col">
              <i className="fas fa-code"></i>
              <br />
              <h3>Software Development</h3>
              <p>
                Creates visually appealing and interactive interfaces by coding
                layouts, navigation menus, forms, and other frontend elements,
                while also developing backend functionality to ensure seamless
                performance across all devices.
              </p>
              <br />
            </div>
            <div className="services-col">
              <i className="fas fa-book"></i>
              <br />
              <h3>Technical Writing</h3>
              <p>
                Crafts comprehensive articles that not only explain the 'how'
                but also the 'why' behind various web development practices and
                emerging technologies.
              </p>
              <br />
            </div>
            <div className="services-col">
              <i className="fas fa-chalkboard-teacher"></i>
              <br />
              <h3>Teaching</h3>
              <p>
                Provides one-on-one tutoring, creative lessons, and engaging
                classroom instruction to promote literacy, critical thinking,
                problem-solving, collaboration skills, and real-world
                applications for all learners.
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
      <Footer /> {/* Place the footer outside of the services container */}
    </div>
  );
}

export default Services;
