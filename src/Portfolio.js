import React, { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./animation.css";
import myPhoto from "./sam.jpg";
import weather from "./weather.jpg";
import tic_tac_toe from "./tic_tac_toe.jpg";
import quiz_app from "./quiz app.png";
import portfolio from "./portfolio.jpg";
import client1 from "./c1.jpg";
import client2 from "./c2.jpg";
import samresume from "./SAMSON V.pdf";
import dbcy from "./provisional.pdf";
import ten from "./10th .jpg";
import twelve from "./12th.jpg";
import Swal from "sweetalert2";
import emailjs from "emailjs-com";
import { FaWhatsapp } from "react-icons/fa";
import "sweetalert2/dist/sweetalert2.min.css";

export default function Portfolio() {
  // 🌙 State management
  // const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");
  const [navCollapsed, setNavCollapsed] = useState(true);
  const [activeSection, setActiveSection] = useState("about");

  // 🔐 Password lock for certificates
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [inputPassword, setInputPassword] = useState("");
  const correctPassword = "SAM1607"; // change this to your own password

  const texts = {
    en: {
      aboutTitle: "Hi, I'm Sam",
      aboutDesc:
        "A passionate freelance developer creating modern and responsive web applications using React.js, Bootstrap CSS, and more.",
      education: "Education",
      projects: "Projects",
      skills: "Skills",
      testimonials: "Testimonials",
      contact: "Get in Touch",
      resume: "Resume",
      resumeDownload: "Download my latest resume here:",
      download: "Download Resume",
      available: "I'm available for freelance work and collaborations.",
      nav: [
        "About",
        "Education",
        "Projects",
        "Skills",
        "Testimonials",
        "Resume",
        "Contact",
      ],
    },
    ta: {
      aboutTitle: "வணக்கம், நான் சாம்",
      aboutDesc:
        "நவீன மற்றும் பதிலளிக்கும் வலைப்பக்கங்களை உருவாக்கும் ஆர்வமுள்ள ஃப்ரீலான்ஸ் டெவலப்பர்.",
      education: "கல்வி",
      projects: "திட்டங்கள்",
      skills: "திறன்கள்",
      testimonials: "பரிந்துரைகள்",
      contact: "தொடர்பு கொள்ளுங்கள்",
      resume: "சுயவிவரம்",
      resumeDownload: "என்னுடைய சமீபத்திய சுயவிவரத்தை இங்கு பதிவிறக்குங்கள்:",
      download: "சுயவிவரத்தை பதிவிறக்கு",
      available: "நான் ஃப்ரீலான்ஸ் வேலைக்காக கிடைக்கிறேன்.",
      nav: [
        "என்னைப் பற்றி",
        "கல்வி",
        "திட்டங்கள்",
        "திறன்கள்",
        "பரிந்துரைகள்",
        "சுயவிவரம்",
        "தொடர்பு",
      ],
    },
  };

  const t = texts[language];

  // 📩 Email sending function
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fxqid4h",
        "template_m1qx82a",
        e.target,
        "OkCDek4LLO5c_kXh-"
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thank you for reaching out. I will respond shortly.",
          });
          e.target.reset();
        },
        () => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again later.",
          });
        }
      );
  }

  // 🔑 Password unlock handler
  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (inputPassword === correctPassword) {
      setIsUnlocked(true);
      setShowPassword(false);
      Swal.fire({
        icon: "success",
        title: "Access Granted!",
        text: "Certificates are now visible.",
        confirmButtonColor: "#3085d6",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Incorrect Password",
        text: "Please try again.",
        confirmButtonColor: "#d33",
      });
    }
    setInputPassword("");
  };

  // 🧭 Scroll active section highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "about";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          current = section.getAttribute("id");
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🌟 Return UI
  return (
    <div
      className={`min-vh-100 ${
        darkMode ? "bg-dark text-light" : "bg-light text-dark gradient-bg"
      }`}
    >
      {/* ---------------- NAVBAR ---------------- */}
     <header className="sticky-top navbar-gradient">

  <div className="container">
    <nav className="navbar navbar-expand-lg">
      <a className="navbar-brand brand-glow" href="#">My Portfolio</a>

      <button
        className="navbar-toggler"
        type="button"
        onClick={() => setNavCollapsed(!navCollapsed)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${navCollapsed ? "" : "show"}`}>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          {t.nav.map((item, index) => {
            const id = item.toLowerCase();
            return (
              <li key={index} className="nav-item">
                <a
                  className={`nav-link text-uppercase fw-semibold px-3 ${
                    activeSection === id ? "active-link" : "nav-text"
                  }`}
                  href={`#${id}`}
                  onClick={() => setNavCollapsed(true)}
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Language Selector */}
        <div className="ms-lg-3">
          <select
            onChange={(e) => setLanguage(e.target.value)}
            value={language}
            className="form-select form-select-sm bg-transparent text-light border-light fw-bold"
          >
            <option value="en">EN</option>
            <option value="ta">TA</option>
          </select>
        </div>
      </div>
    </nav>
  </div>
</header>




      {/* ---------------- ABOUT ---------------- */}
      <section id="about" className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h2 className="display-4 text-primary">{t.aboutTitle}</h2>
            <p className="lead mb-4">{t.aboutDesc}</p>
            <a href="#contact" className="btn btn-warning btn-lg">
              Hire Me
            </a>
          </div>
          <div className="col-md-6 text-center">
            <img src={myPhoto} alt="Sam" className="about-photo-large animate-bounce" />
          </div>
        </div>
      </section>

      {/* ---------------- EDUCATION ---------------- */}
      <section
        id="education"
        className="container-fluid py-5 text-center education-bg border-top border-bottom animate-fadein"
      >
        <h2 className="mb-5 text-secondary animate-fadein">🎓 {t.education}</h2>

        {/* Password unlock */}
        {!isUnlocked && (
          <div className="mb-4">
            {!showPassword ? (
              <button
                className="btn btn-primary btn-sm"
                onClick={() => setShowPassword(true)}
              >
                Enter Password to View Certificates
              </button>
            ) : (
              <form
                onSubmit={handlePasswordSubmit}
                className="d-flex justify-content-center align-items-center gap-2 flex-wrap"
              >
                <input
                  type="password"
                  value={inputPassword}
                  onChange={(e) => setInputPassword(e.target.value)}
                  className="form-control"
                  placeholder="Enter password"
                  style={{ maxWidth: "250px" }}
                />
                <button type="submit" className="btn btn-outline-primary">
                  Unlock
                </button>
              </form>
            )}
          </div>
        )}

        <div className="timeline-container mx-auto text-start">
          {[
            {
              title: "Master in Computer Applications [MCA]",
              desc: "Ganadipathy Tulsi's Jain Engineering College (2024–2026)",
              cert: "#",
            },
            {
              title: "Bachelors in Computer Applications",
              desc: "Don Bosco College (Co-Ed), Yelagiri Hills (2021–2024)",
              cert: dbcy,
            },
            {
              title: "HSC",
              desc: "TMKV Govt.Boys.Hr.Sec.School (2020–2021)",
              cert: twelve,
            },
            {
              title: "SSLC",
              desc: "TMKV Govt.Boys.Hr.Sec.School (2018–2019)",
              cert: ten,
            },
          ].map((edu, i) => (
            <div key={i} className="timeline-item animate-fadein-up mb-3">
              <h5>
                <strong>{edu.title}</strong> – {edu.desc}
              </h5>
              {isUnlocked ? (
                <a
                  href={edu.cert}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary btn-sm mt-2"
                >
                  View Certificate
                </a>
              ) : (
                <span className="badge bg-secondary mt-2">Locked 🔒</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- PROJECTS ---------------- */}
      <section id="projects" className="container py-5">
        <h2 className="text-center mb-4 text-success">{t.projects}</h2>
        <div className="row g-4">
          {[
            {
              img: weather,
              title: "React Weather App",
              desc: "A modern weather application using OpenWeatherMap API.",
              link: "https://weather-app-mu-vert-76.vercel.app/",
            },
            {
              img: portfolio,
              title: "Portfolio Website",
              desc: "My personal portfolio built with React and Bootstrap CSS.",
              link: "https://happysamson.github.io/sam-portfolio/index.html",
            },
            {
              img: tic_tac_toe,
              title: "TIC-TAC-TOE Game",
              desc: "Fun game to refresh our minds.",
              link: "https://tictactoegame-dun.vercel.app/",
            },
            {
              img: quiz_app,
              title: "Quiz App",
              desc: "A simple quiz app to gain knowledge.",
              link: "https://quiz-app-one-roan-39.vercel.app/",
            },
          ].map((proj, i) => (
            <div key={i} className="col-md-6">
              <div className="card h-100 border-success shadow-sm">
                <img
                  src={proj.img}
                  className="card-img-top"
                  alt={proj.title}
                  style={{ objectFit: "cover", height: "200px" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{proj.title}</h5>
                  <p className="card-text">{proj.desc}</p>
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-success mt-auto"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- SKILLS ---------------- */}
 <section id="skills" className="skills-section text-center py-5">
  <h2 className="mb-4 text-white fw-bold">💡 Skills</h2>

  <div className="marquee-container">
    <div className="marquee">
      {[
        { name: "React.js", color: "#61DBFB" },
        { name: "Bootstrap", color: "#7952B3" },
        { name: "JavaScript", color: "#F7DF1E" },
        { name: "HTML", color: "#E34C26" },
        { name: "CSS", color: "#264DE4" },
        { name: "PHP", color: "#777BB3" },
        { name: "MySQL", color: "#00758F" },
        { name: "MongoDB", color: "#4DB33D" },
        { name: "GitHub", color: "#24292F" },
      ].map((skill, index) => (
        <span
          key={index}
          className="skill-badge m-2 px-3 py-2 rounded-pill fw-bold text-white"
          style={{ backgroundColor: skill.color }}
        >
          {skill.name}
        </span>
      ))}
    </div>
  </div>
</section>




      {/* ---------------- TESTIMONIALS ---------------- */}
      <section id="testimonials" className="container py-5 text-center">
        <h2 className="mb-4 text-warning">{t.testimonials}</h2>
        <div className="row justify-content-center g-4">
          {[client1, client2].map((client, i) => (
            <div key={i} className="col-md-5">
              <div className="bg-light p-4 rounded shadow h-100 d-flex flex-column align-items-center">
                <img
                  src={client}
                  alt={`Client ${i + 1}`}
                  className="rounded-circle mb-3"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    border: "3px solid #ffc107",
                  }}
                />
                <blockquote className="blockquote mb-0">
                  <p>
                    {i === 0
                      ? `"Sam delivered exactly what we needed, on time and beyond expectations."`
                      : `"Fantastic work. The website looks great and performs perfectly!"`}
                  </p>
                  <footer className="blockquote-footer mt-2">
                    Client {i + 1}
                  </footer>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------- RESUME ---------------- */}
     <section
  id="resume"
  className="container-fluid py-7 text-center"
  style={{
    background: "linear-gradient(135deg, #ffe6e6, #fff)",
    minHeight: "80vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <h2 className="mb-4 text-danger fw-bold" style={{ fontSize: "2.5rem" }}>
    {t.resume}
  </h2>
  <p className="mb-4" style={{ fontSize: "1.2rem" }}>
    {t.resumeDownload}
  </p>
  <a
    href={samresume}
    download
    className="btn btn-outline-danger btn-lg px-5 py-3 rounded-pill shadow-sm"
    onClick={() => {
      setTimeout(() => {
        Swal.fire({
          title: language === "ta" ? "வெற்றி!" : "Success!",
          text:
            language === "ta"
              ? "உங்கள் சுயவிவரம் பதிவிறக்கப்பட்டது."
              : "Your resume has been downloaded.",
          icon: "success",
          timer: 3000,
          timerProgressBar: true,
        });
      }, 500);
    }}
  >
    {t.download}
  </a>
</section>


      {/* ---------------- CONTACT ---------------- */}
      <section
        id="contact"
        className="container-fluid py-5 text-center contact-section-bg"
      >
        <h2 className="mb-3 text-secondary">{t.contact}</h2>
        <p>{t.available}</p>

        <form className="row justify-content-center" onSubmit={sendEmail}>
          <div className="col-md-6">
            <input
              type="text"
              name="name"
              className="form-control mb-3"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              className="form-control mb-3"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="4"
              className="form-control mb-3"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary btn-lg">
              Submit
            </button>
          </div>
        </form>

        <div className="d-flex justify-content-center gap-4 fs-3 mt-4 social-icons">
          <a
            href="https://github.com/HappySamson"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/mr.phoenix_03?igsh=eTJldnh2ZGNmbjBx"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/share/1BYhuDCjdt/"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/sam-son-3491932a2/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </section>


      {/* ---------------- FOOTER ---------------- */}
      <footer
        className={`text-center py-3 border-top ${
          darkMode ? "bg-secondary text-light" : "bg-white text-muted"
        }`}
      >
        &copy; 2025 Sam. All rights reserved.
      </footer>
{/* ---------------- FLOATING WHATSAPP BUTTON ---------------- */}
<a
  href="https://wa.me/9363125355"
  target="_blank"
  rel="noopener noreferrer"
  className={`whatsapp-float ${darkMode ? "whatsapp-dark" : "whatsapp-light"}`}
>
  <FaWhatsapp size={32} />
</a>


    </div>
  );
}
