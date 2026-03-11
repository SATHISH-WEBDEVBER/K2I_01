import React, { useState } from "react";
import { useLanguage } from "../Contexts/LanguageContext.jsx";
import { translations } from "../Contexts/translations.js";
import "../assets/Css/Learning.css";

const learningData = [
  {
    id: 1, type: "tutorial", category: "embedded",
    title: "Getting Started with Arduino", titleTa: "Arduino இல் தொடங்குவது எப்படி",
    desc: "A complete beginner's guide to Arduino programming — from LED blinking to sensor interfacing.",
    descTa: "Arduino நிரலாக்கத்திற்கான முழுமையான தொடக்க வழிகாட்டி — LED தொடக்கம் முதல் சென்சார் வரை.",
    duration: "45 min", level: "Beginner", youtube: "https://youtube.com", docs: "#",
    gif: "https://k2i.s3.eu-north-1.amazonaws.com/whyk2i.gif",
  },
  {
    id: 2, type: "video", category: "iot",
    title: "ESP8266 WiFi Module Complete Guide", titleTa: "ESP8266 WiFi மாட்யூல் முழு வழிகாட்டி",
    desc: "Learn to connect ESP8266 to WiFi, send HTTP requests, and build your first IoT project from scratch.",
    descTa: "ESP8266 ஐ WiFi உடன் இணைக்கவும், HTTP கோரிக்கைகள் அனுப்பவும் கற்றுக்கொள்ளுங்கள்.",
    duration: "1hr 20min", level: "Intermediate", youtube: "https://youtube.com", docs: "#",
    gif: "https://k2i.s3.eu-north-1.amazonaws.com/homeherosec.gif",
  },
  {
    id: 3, type: "documentation", category: "webDev",
    title: "React.js Full Documentation", titleTa: "React.js முழுமையான ஆவணம்",
    desc: "Comprehensive React documentation covering components, hooks, state management, routing, and real project examples.",
    descTa: "கூறுகள், hooks, state management மற்றும் routing உள்ளடக்கிய React ஆவணம்.",
    duration: "Read", level: "Intermediate", youtube: null, docs: "#",
    gif: "https://k2i.s3.eu-north-1.amazonaws.com/whyk2i.gif",
  },
  {
    id: 4, type: "tutorial", category: "embedded",
    title: "UART, I2C, SPI Communication", titleTa: "UART, I2C, SPI தொடர்பு",
    desc: "Master serial communication protocols used in embedded systems with hands-on examples and wiring diagrams.",
    descTa: "எம்பெடட் சிஸ்டம்களில் பயன்படுத்தப்படும் தொடர் தொடர்பு நெறிமுறைகளை கற்றுக்கொள்ளுங்கள்.",
    duration: "1hr", level: "Intermediate", youtube: "https://youtube.com", docs: "#",
    gif: "https://k2i.s3.eu-north-1.amazonaws.com/homeherosec.gif",
  },
  {
    id: 5, type: "video", category: "webDev",
    title: "HTML & CSS Crash Course", titleTa: "HTML & CSS விரைவுப் பாடநெறி",
    desc: "Build beautiful responsive websites from scratch using HTML5 and CSS3. Covers Flexbox, Grid, and animations.",
    descTa: "HTML5 மற்றும் CSS3 மூலம் அழகான ரெஸ்பான்சிவ் இணையதளங்களை உருவாக்குங்கள்.",
    duration: "2hr", level: "Beginner", youtube: "https://youtube.com", docs: "#",
    gif: "https://k2i.s3.eu-north-1.amazonaws.com/whyk2i.gif",
  },
  {
    id: 6, type: "documentation", category: "iot",
    title: "MQTT Protocol for IoT", titleTa: "IoT க்கான MQTT நெறிமுறை",
    desc: "Deep-dive into MQTT protocol, broker setup with Mosquitto, and publishing/subscribing from embedded devices.",
    descTa: "MQTT நெறிமுறை, Mosquitto broker setup மற்றும் எம்பெடட் சாதனங்களில் இருந்து publish/subscribe.",
    duration: "Read", level: "Advanced", youtube: null, docs: "#",
    gif: "https://k2i.s3.eu-north-1.amazonaws.com/homeherosec.gif",
  },
  {
    id: 7, type: "tutorial", category: "ai",
    title: "Python for AI/ML Beginners", titleTa: "AI/ML தொடக்கர்களுக்கான Python",
    desc: "Learn Python fundamentals, NumPy, Pandas, and build your first machine learning model using scikit-learn.",
    descTa: "Python அடிப்படைகள், NumPy, Pandas மற்றும் scikit-learn மூலம் ML மாடல் உருவாக்குங்கள்.",
    duration: "3hr", level: "Beginner", youtube: "https://youtube.com", docs: "#",
    gif: "https://k2i.s3.eu-north-1.amazonaws.com/whyk2i.gif",
  },
  {
    id: 8, type: "video", category: "embedded",
    title: "PCB Design with KiCad", titleTa: "KiCad மூலம் PCB வடிவமைப்பு",
    desc: "Design your own printed circuit boards from schematic to layout using the free and open-source KiCad EDA tool.",
    descTa: "KiCad EDA கருவி மூலம் schema முதல் layout வரை PCB வடிவமைக்கவும்.",
    duration: "2hr 30min", level: "Advanced", youtube: "https://youtube.com", docs: "#",
    gif: "https://k2i.s3.eu-north-1.amazonaws.com/homeherosec.gif",
  },
];

const Learning = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;
  const [activeType, setActiveType] = useState("all");
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const types = ["all", "tutorial", "video", "documentation"];
  const typeLabels = { all: t.allCategories, tutorial: t.tutorials, video: t.videos, documentation: t.documentation };
  const typeIcons = { tutorial: "fa-graduation-cap", video: "fa-play-circle", documentation: "fa-file-alt" };

  const filtered = learningData.filter(item => {
    const matchType = activeType === "all" || item.type === activeType;
    const matchCat = activeCategory === "all" || item.category === activeCategory;
    const title = language === "ta" ? item.titleTa : item.title;
    const matchSearch = title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchType && matchCat && matchSearch;
  });

  const levelColors = { Beginner: "#14655b", Intermediate: "#d97706", Advanced: "#dc2626" };

  return (
    <div className="learning-page">
      {/* Hero */}
      <section className="learning-hero">
        <div className="learning-hero-inner" data-aos="fade-up">
          <img src="https://k2i.s3.eu-north-1.amazonaws.com/whyk2i.gif" alt="Learning" className="learning-hero-gif" />
          <h1 className={language === "ta" ? "tamil-text" : ""}>{t.learningHeroTitle}</h1>
          <p className={language === "ta" ? "tamil-text" : ""}>{t.learningHeroSub}</p>
        </div>
      </section>

      {/* Type Tabs */}
      <section className="learning-tabs-section">
        <div className="learning-tabs">
          {types.map(type => (
            <button
              key={type}
              className={`tab-btn ${activeType === type ? "tab-btn-active" : ""}`}
              onClick={() => setActiveType(type)}
            >
              {type !== "all" && <i className={`fas ${typeIcons[type]}`}></i>}
              <span className={language === "ta" ? "tamil-text" : ""}>{typeLabels[type]}</span>
            </button>
          ))}
        </div>

        <div className="learning-search">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      {/* Grid */}
      <section className="learning-grid-section">
        <div className="learning-grid">
          {filtered.map((item, i) => (
            <div className="learning-card" key={item.id} data-aos="fade-up" data-aos-delay={i * 70}>
              <div className="learning-card-image">
                <img src={item.gif} alt={language === "ta" ? item.titleTa : item.title} />
                <div className="learning-type-badge">
                  <i className={`fas ${typeIcons[item.type] || "fa-book"}`}></i>
                  {typeLabels[item.type]}
                </div>
              </div>
              <div className="learning-card-body">
                <div className="learning-meta">
                  <span className="learning-level" style={{ backgroundColor: levelColors[item.level] }}>{item.level}</span>
                  <span className="learning-duration"><i className="fas fa-clock"></i> {item.duration}</span>
                </div>
                <h3 className={language === "ta" ? "tamil-text" : ""}>
                  {language === "ta" ? item.titleTa : item.title}
                </h3>
                <p className={language === "ta" ? "tamil-text" : ""}>
                  {language === "ta" ? item.descTa : item.desc}
                </p>
                <div className="learning-actions">
                  {item.youtube && (
                    <a href={item.youtube} target="_blank" rel="noreferrer" className="learn-btn learn-btn-primary">
                      <i className="fab fa-youtube"></i>
                      <span className={language === "ta" ? "tamil-text" : ""}>{t.watchNow}</span>
                    </a>
                  )}
                  <a href={item.docs} className="learn-btn learn-btn-secondary">
                    <i className="fas fa-file-alt"></i>
                    <span className={language === "ta" ? "tamil-text" : ""}>{t.readMore}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Learning;
