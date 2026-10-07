import "./App.css";

import ScrollToTop from "./components/ScrollToTop";
import Stats from "./components/Stats";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaExternalLinkAlt,
  FaFilePdf,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import { useState, useEffect } from "react";

function App() {
  /* =========================
     THEME
  ========================= */

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  /* =========================
     ACTIVE SECTION
  ========================= */

  const [activeSection, setActiveSection] = useState("");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setActiveSection(id);

      setTimeout(() => {
        setActiveSection("");
      }, 2000);
    }
  };

  /* =========================
     PUBLIC PATH
  ========================= */

  const publicPath = process.env.PUBLIC_URL;

  return (
    <>
      {/* =========================
          NAVBAR
      ========================= */}

      <nav className="navbar">
        <ul className="nav-links">
          <li>
            <button
              className={`nav-btn ${
                activeSection === "about" ? "active-nav" : ""
              }`}
              onClick={() => scrollToSection("about")}
            >
              About
            </button>
          </li>

          <li>
            <button
              className={`nav-btn ${
                activeSection === "education" ? "active-nav" : ""
              }`}
              onClick={() => scrollToSection("education")}
            >
              Education
            </button>
          </li>

          <li>
            <button
              className={`nav-btn ${
                activeSection === "projects" ? "active-nav" : ""
              }`}
              onClick={() => scrollToSection("projects")}
            >
              Projects
            </button>
          </li>

          <li>
            <button
              className={`nav-btn ${
                activeSection === "certificates" ? "active-nav" : ""
              }`}
              onClick={() => scrollToSection("certificates")}
            >
              Certificates
            </button>
          </li>

          <li>
            <button
              className={`nav-btn ${
                activeSection === "resume" ? "active-nav" : ""
              }`}
              onClick={() => scrollToSection("resume")}
            >
              Resume
            </button>
          </li>

          <li>
            <button
              className={`nav-btn ${
                activeSection === "contact" ? "active-nav" : ""
              }`}
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </button>
          </li>

          {/* Theme Toggle */}

          <li>
            <button
              className="theme-toggle"
              onClick={() =>
                setTheme(theme === "dark" ? "light" : "dark")
              }
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>
          </li>
        </ul>

        {/* Navbar Resume Button */}

        <a
          href="https://drive.google.com/file/d/1NmGn03KbL0F6A-nLFRR3sEClXge6wi6f/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-nav-btn"
        >
          Resume
        </a>
      </nav>

      {/* =========================
          MAIN CONTAINER
      ========================= */}

      <div className="container">

        {/* =========================
            HERO SECTION
        ========================= */}

        <section className="hero" id="home">
          <div className="hero-content">

            {/* Hero Text */}

            <div className="hero-text">

              <span className="hero-tag">
                👋 Hello, I'm
              </span>

              <h1>Balaji S</h1>

              <h2>Full Stack Developer</h2>

              <p>
                PG Computer Science student specializing in
                React, Django, Python, REST APIs, and modern backend
                development. Passionate about building scalable
                applications and solving real-world problems through
                software engineering.
              </p>

              {/* Technologies */}

              <div className="tech-stack">
                <span>React</span>
                <span>Python</span>
                <span>Django</span>
                <span>FastAPI</span>
                <span>MySQL</span>
                <span>Git</span>
              </div>

              {/* Hero Buttons */}

              <div className="hero-btns">

                <button
                  className="btn primary"
                  onClick={() => scrollToSection("projects")}
                >
                  View Projects
                </button>

                <a
                  href="https://drive.google.com/file/d/1NmGn03KbL0F6A-nLFRR3sEClXge6wi6f/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn secondary"
                >
                  <FaDownload />
                  Resume
                </a>

              </div>

              {/* Social Icons */}

              <div className="social-icons">

                <a
                  href="https://github.com/balaji20itl004"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com/in/balaji-s-498730192"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="mailto:balajihari571@gmail.com"
                  aria-label="Email"
                >
                  <FaEnvelope />
                </a>

              </div>

            </div>

            {/* Hero Image */}

            <div className="hero-image">
              <img
                src={`${publicPath}/images/balaji.jpg`}
                alt="Balaji"
              />
            </div>

          </div>
        </section>

        {/* =========================
            STATS
        ========================= */}

        <Stats />

        {/* =========================
            ABOUT SECTION
        ========================= */}

        <section
          className={`section ${
            activeSection === "about" ? "section-glow" : ""
          }`}
          id="about"
        >
          <h2 className="section-title">About Me</h2>

          <div className="about">
            <p>
              Results-driven M.E. Computer Science student
              specialising in full-stack development with Django
              and React JS. Delivered scalable systems including
              an e-commerce recommendation engine and a Hadoop-based
              Big Data pipeline. Strong command of Python, REST APIs,
              and DSA. Actively targeting a Software Developer /
              Backend Engineer role.
            </p>
          </div>
        </section>

        {/* =========================
            EDUCATION SECTION
        ========================= */}

        <section
          className={`section ${
            activeSection === "education" ? "section-glow" : ""
          }`}
          id="education"
        >
          <h2 className="section-title">Education</h2>

          <div className="education-card">

            {/* Master's Degree */}

            <div className="education-item">
              <h3>Master of Engineering (Computer Science)</h3>

              <p className="edu-institute">
                National Engineering College
              </p>

              <p className="edu-year">
                2025 – 2027
              </p>

              <p>
                Currently pursuing postgraduate studies with focus on
                Artificial Intelligence, Machine Learning, Cyber Security,
                Full Stack Development, and DevOps.
              </p>
            </div>

            {/* Bachelor's Degree */}

            <div className="education-item">
              <h3>Bachelor's Degree</h3>

              <p className="edu-institute">
                Francis Xavier Engineering College
              </p>

              <p className="edu-year">
                2021 – 2025
              </p>

              <p>
                Completed undergraduate studies in Computer Science
                with strong foundations in programming, databases,
                web development, and software engineering.
              </p>
            </div>

          </div>
        </section>

        {/* =========================
            PROJECTS SECTION
        ========================= */}

        <section
          className={`section ${
            activeSection === "projects" ? "section-glow" : ""
          }`}
          id="projects"
        >
          <h2 className="section-title">Projects</h2>

          <div className="project-grid">

            {/* =========================
                PROJECT 1
            ========================= */}

            <div className="project-card">

              <img
                src={`${publicPath}/images/neuro.png`}
                alt="Neuro Guardian"
              />

              <div className="project-content">

                <h3>Neuro-Guardian</h3>

                <p>
                  Hybrid CNN-Attention framework for real-time
                  phishing URL detection. Built with TensorFlow,
                  FastAPI, and browser extension integration for
                  enhanced web security.
                </p>

              </div>

              <div className="project-tech">
                <span>Python</span>
                <span>TensorFlow</span>
                <span>FastAPI</span>
                <span>CNN</span>
                <span>Attention Mechanisms</span>
              </div>

              <div className="project-buttons">

                {/* Replace # with actual GitHub URL when available */}

                <a href="#">
                  GitHub
                </a>

                <a href="#">
                  Live Demo
                </a>

              </div>

            </div>

            {/* =========================
                PROJECT 2
            ========================= */}

            <div className="project-card">

              <div className="project-placeholder">
                <span>Big Data</span>
              </div>

              <div className="project-content">

                <h3>Trending Hashtag Tracker</h3>

                <p>
                  Developed a Big Data analytics solution to identify
                  and analyze trending hashtags from large-scale
                  Twitter datasets using the Hadoop ecosystem.
                  The system leverages HDFS for distributed storage,
                  Apache Pig for text preprocessing and hashtag
                  extraction, and Apache Hive for analytical querying
                  and ranking of hashtags.
                </p>

              </div>

              <div className="project-tech">
                <span>Python</span>
                <span>Hadoop</span>
                <span>HDFS</span>
                <span>Apache Pig</span>
                <span>Apache Hive</span>
              </div>

              <div className="project-buttons">

                {/* Replace # with actual GitHub URL when available */}

                <a href="#">
                  GitHub
                </a>

                <a href="#">
                  Live Demo
                </a>

              </div>

            </div>

            {/* =========================
                PROJECT 3
            ========================= */}

            <div className="project-card">

              <img
                src={`${publicPath}/images/mcart.png`}
                alt="E-Commerce Website"
              />

              <div className="project-content">

                <h3>E-Commerce Website</h3>

                <p>
                  Full-stack e-commerce platform developed using
                  Django, MySQL, HTML, CSS, and JavaScript with
                  shopping cart and product management
                  functionalities.
                </p>

              </div>

              <div className="project-tech">
                <span>Python</span>
                <span>Django</span>
                <span>MySQL</span>
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>

              <div className="project-buttons">

                {/* Replace # with actual GitHub URL when available */}

                <a href="#">
                  GitHub
                </a>

                <a
                  href="https://mcart-xkmn.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </a>

              </div>

            </div>

          </div>
        </section>

        {/* =========================
            CERTIFICATIONS
        ========================= */}

        <section
          className={`section ${
            activeSection === "certificates" ? "section-glow" : ""
          }`}
          id="certificates"
        >
          <h2 className="section-title">
            Certifications
          </h2>

          <div className="certificate-grid">

            {/* NPTEL */}

            <div className="certificate-card">

              <div className="certificate-header">

                <img
                  src={`${publicPath}/images/nptel.png`}
                  alt="NPTEL"
                />

              </div>

              <h3>
                Introduction to Industry 4.0 and Industrial Internet
                of Things
              </h3>

              <p>NPTEL</p>

              <a
                href="https://drive.google.com/file/d/15XxIMojxetB5sgaKDVOvZOsQRovMWdkY/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-btn"
              >
                View Certificate
                <FaExternalLinkAlt />
              </a>

            </div>

            {/* Coursera */}

            <div className="certificate-card">

              <div className="certificate-header">

                <img
                  src={`${publicPath}/images/coursera.png`}
                  alt="Coursera"
                />

                <div>

                  <h3>
                    Programming with JavaScript
                  </h3>

                  <p>
                    Coursera
                  </p>

                  <p className="certificate-date">
                    2024
                  </p>

                </div>

              </div>

              <a
                href="https://drive.google.com/file/d/1NmGn03KbL0F6A-nLFRR3sEClXge6wi6f/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-btn"
              >
                View Certificate
                <FaExternalLinkAlt />
              </a>

            </div>

          </div>
        </section>

        {/* =========================
            RESUME SECTION
        ========================= */}

        <section
          className={`section ${
            activeSection === "resume" ? "section-glow" : ""
          }`}
          id="resume"
        >
          <h2 className="section-title">
            Resume
          </h2>

          <div className="resume-card">

            <FaFilePdf className="resume-icon" />

            <h3>
              My Resume
            </h3>

            <p>
              Download my resume to explore my education,
              technical skills, projects, certifications,
              internship experience, and achievements.
            </p>

            <div className="resume-actions">

              <a
                href={`${publicPath}/resume/Balaji_Resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-btn"
              >
                <FaDownload />
                Download Resume
              </a>

            </div>

          </div>
        </section>

        {/* =========================
            CONTACT SECTION
        ========================= */}

        <section
          className={`section ${
            activeSection === "contact" ? "section-glow" : ""
          }`}
          id="contact"
        >
          <h2 className="section-title">
            Contact
          </h2>

          <div className="contact">

            <p>
              Email:{" "}
              <a href="mailto:balajihari571@gmail.com">
                balajihari571@gmail.com
              </a>
            </p>

            <p>
              LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/balaji-s-498730192"
                target="_blank"
                rel="noopener noreferrer"
              >
                Balaji S
              </a>
            </p>

            <p>
              GitHub:{" "}
              <a
                href="https://github.com/balaji20itl004"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/balaji20itl004
              </a>
            </p>

            <p>
              Tamil Nadu, India
            </p>

          </div>
        </section>

        {/* =========================
            SCROLL TO TOP
        ========================= */}

        <ScrollToTop />

        {/* =========================
            FOOTER
        ========================= */}

        <footer>
          <p>
            © 2026 Balaji. All Rights Reserved.
          </p>
        </footer>

      </div>
    </>
  );
}

export default App;