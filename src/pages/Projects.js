import React from "react";
import ProjectCard from "../components/ProjectCard";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/Projects.css";

const Project = () => {
  const projectData = [
    {
      imgSrc: "/images/alphaplus.jpg",
      alt: "Alpha Plus Products Photo",
      title: "Alpha Plus Cleaning Products",
      description: "Specializing in the production of cleaning solutions",
      link: "https://nuelcas.github.io/alpha-plus-cleaning-products/frontend/contact.html",
    },
    {
      imgSrc: "/images/nuelcascleaners.jpg",
      alt: "Nuel Cas Cleaning Photo",
      title: "Nuel Cas Cleaners",
      description:
        "Nuel Cas Cleaners offers top-notch residential and commercial cleaning services.",
      link: "https://nuelcas.github.io/Nuel-cas-cleaners/",
    },

    {
      imgSrc: "/images/nerusfront.jpg",
      alt: "Ne-rux Travels Photo",
      title: "Ne-rux Travels",
      description: "Transportation and car rental service provider.",
      link: "https://nuelcas.github.io/Nerus_travels/",
    },

    {
      imgSrc: "/images/expensetrack.jpg",
      alt: "Expense Tracker Photo",
      title: "Expense Tracker",
      description:
        "Track your expenses, you can register, login and monitor your expenses",
      link: "https://nuelcas.github.io/expense-tracker-app/",
    },

    {
      imgSrc:
        "https://live.staticflickr.com/65535/52945386885_bf0b742557_n.jpg",
      alt: "Calculator Photo",
      title: "Calculator",
      description:
        "It employs formula logic and performs basic arithmetic operations.",
      link: "https://nuelcas.github.io/calculator/",
    },

    {
      imgSrc:
        "https://live.staticflickr.com/65535/53168952673_6f9de9f3ba_w.jpg",
      alt: "Temperature Coverter Photo",
      title: "Temperature Converter",
      description:
        "It renders temperatures in Celsius to Fahrenheit and vice versa.",
      link: "https://nuelcas.github.io/temperature-converter/",
    },
  ];

  return (
    <div>
      <NavBar />
      <div id="portfolio">
        <div className="container">
          <h2 className="sub-title">Projects</h2>
          <div className="row">
            {projectData.map((project, index) => (
              <ProjectCard
                key={index}
                imgSrc={project.imgSrc}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </div>
        <div className="ongoing-project">
          <h3>You are invited to participate on my ongoing project:</h3>
          <p>
            <a
              href="https://nuelcas.github.io/community_accountability_platform/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Community Accountability Platform - CAP
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Project;
