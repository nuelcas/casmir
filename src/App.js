import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Profile from "./pages/Profile";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route to Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Route to Profile Page */}
        <Route path="/profile" element={<Profile />} />

        {/* Route to Services Page */}
        <Route path="/services" element={<Services />} />

        {/* Route to Projects Page */}
        <Route path="/projects" element={<Projects />} />

        {/* Route to Blog Page */}
        <Route path="/blog" element={<Blog />} />

        {/* Route to Contact Page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
