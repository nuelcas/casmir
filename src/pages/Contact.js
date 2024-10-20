// import React from "react";
// import NavBar from "../components/NavBar";
// import "../styles/Contact.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faGithub,
//   faLinkedin,
//   faTwitter,
//   faFacebook,
// } from "@fortawesome/free-brands-svg-icons";

// const Contact = () => {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission
//     alert("Form submitted successfully");
//   };

//   return (
//     <section className="contact-section">
//       <NavBar />
//       <div className="contact-content">
//         <h1 className="contact-header">Contact Me</h1>
//         <p className="contact-description">
//           <i>So many things to build... let's grow together!</i>
//         </p>

//         {/* Netlify Form */}
//         <form
//           id="contact-form"
//           name="contact"
//           method="POST"
//           data-netlify="true"
//           className="contact-form"
//           onSubmit={handleSubmit}
//         >
//           <input type="hidden" name="form-name" value="contact" />
//           <div className="form-group">
//             <label htmlFor="contact-name">Name:</label>
//             <input
//               type="text"
//               id="contact-name"
//               name="name"
//               placeholder="Enter your name"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="contact-email">Email:</label>
//             <input
//               type="email"
//               id="contact-email"
//               name="email"
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="contact-message">Message:</label>
//             <textarea
//               id="contact-message"
//               name="message"
//               placeholder="Type your message"
//               rows="8"
//               required
//             />
//           </div>
//           <button type="submit" className="submit-btn">
//             Send Message
//           </button>
//         </form>
//         <div className="contact-info">
//           <p>
//             <strong>Email:</strong> casmir_ao@ymail.com
//           </p>
//         </div>
//         <div className="social-icons">
//           <a
//             href="https://github.com/yourprofile"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FontAwesomeIcon icon={faGithub} className="social-icon" />
//           </a>
//           <a
//             href="https://linkedin.com/in/yourprofile"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
//           </a>
//           <a
//             href="https://twitter.com/yourprofile"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FontAwesomeIcon icon={faTwitter} className="social-icon" />
//           </a>
//           <a
//             href="https://facebook.com/yourprofile"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <FontAwesomeIcon icon={faFacebook} className="social-icon" />
//           </a>
//         </div>
//       </div>

//       <footer className="footer">
//         <div className="footer-content">
//           <p className="copyright">
//             © {new Date().getFullYear()} Casmir Onyekani. All Rights Reserved.
//           </p>
//         </div>
//       </footer>
//     </section>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import NavBar from "../components/NavBar";
import "../styles/Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // Handle form submission here (e.g., send the data to Netlify or your backend)
    console.log("Form submitted successfully!");

    // Show a success message (optional)
    alert("Form submitted successfully!");

    // Clear the form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  // Update form data when inputs change
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

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
          id="contact-form"
          name="contact"
          method="POST"
          data-netlify="true"
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-group">
            <label htmlFor="contact-name">Name:</label>
            <input
              type="text"
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-email">Email:</label>
            <input
              type="email"
              id="contact-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="contact-message">Message:</label>
            <textarea
              id="contact-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
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
