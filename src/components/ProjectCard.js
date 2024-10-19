// ProjectCard.js
import React from "react";
import "../styles/ProjectCard.css"; // Import the styles separately

const ProjectCard = ({ imgSrc, title, description, link }) => {
  return (
    <div className="portfolio-col">
      <img src={imgSrc} alt={title} />
      <div className="layer">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <i className="fa-solid fa-link"></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
