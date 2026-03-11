import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Pages/Navbar.jsx";
import Footer from "./Pages/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from "./Pages/Home.jsx";
import Projects from "./Pages/Projects.jsx";
import Learning from "./Pages/Learning.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 900, once: false, easing: "ease-in-out" });
  }, []);

  useEffect(() => {
    AOS.refresh();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
