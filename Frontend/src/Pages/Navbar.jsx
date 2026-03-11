import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { translations } from "../Contexts/translations.js";
import { useLanguage } from "../Contexts/LanguageContext.jsx";
import "../assets/Css/Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language] || translations.en;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <h1 className="logo">
          Knowledg2<br />Intelligence
        </h1>

        <div className="menu-section">
          <button onClick={toggleLanguage} className="lang-toggle-btn">
            {language === "en" ? "தமிழ்" : "ENGLISH"}
          </button>
          <div className="menu-icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>

        <ul className={isMobileMenuOpen ? "nav-menu active" : "nav-menu"}>
          {[
            { to: "/", label: t.home },
            { to: "/projects", label: t.projects },
            { to: "/learning", label: t.documents },
            { to: "/about", label: t.about },
            { to: "/contact", label: t.contact },
          ].map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} onClick={closeMenu} className="nav-link">
                <span className={language === "ta" ? "tamil-text" : ""}>{label}</span>
              </NavLink>
            </li>
          ))}
          <li className="lastchild" onClick={toggleLanguage} style={{ cursor: "pointer" }}>
            {language === "en" ? "தமிழ்" : "ENGLISH"}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
