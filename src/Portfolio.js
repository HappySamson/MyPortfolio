import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaMoon, FaSun } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './animation.css';
import myPhoto from './sam.jpg';
import weather from './weather.jpg';
import tic_tac_toe from './tic_tac_toe.jpg';
import quiz_app from './quiz app.png';
import portfolio from './portfolio.jpg';
import client1 from './c1.jpg';
import samresume from './sam.pdf';
import dbcy from './provisional.pdf';
import ten from './10th .jpg';
import twelve from './12th.jpg';
import client2 from './c2.jpg';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import "sweetalert2/dist/sweetalert2.min.css";





export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("en");
  const [navCollapsed, setNavCollapsed] = useState(true);
  const [activeSection, setActiveSection] = useState("about");

  const texts = {
    en: {
      aboutTitle: "Hi, I'm Sam",
      aboutDesc: "A passionate freelance developer creating modern and responsive web applications using React.js, Bootstrap CSS, and more.",
      education: "Education",
      projects: "Projects",
      skills: "Skills",
      testimonials: "Testimonials",
      contact: "Get in Touch",
      resume: "Resume",
      resumeDownload: "Download my latest resume here:",
      download: "Download Resume",
      available: "I'm available for freelance work and collaborations.",
      nav: ["About", "Education", "Projects", "Skills", "Testimonials", "Resume", "Contact"]
    },
    ta: {
      aboutTitle: "வணக்கம், நான் சாம்",
      aboutDesc: "நவீன மற்றும் பதிலளிக்கும் வலைப்பக்கங்களை உருவாக்கும் ஆர்வமுள்ள ஃப்ரீலான்ஸ் டெவலப்பர்.",
      education: "கல்வி",
      projects: "திட்டங்கள்",
      skills: "திறன்கள்",
      testimonials: "பரிந்துரைகள்",
      contact: "தொடர்பு கொள்ளுங்கள்",
      resume: "சுயவிவரம்",
      resumeDownload: "என்னுடைய சமீபத்திய சுயவிவரத்தை இங்கு பதிவிறக்குங்கள்:",
      download: "சுயவிவரத்தை பதிவிறக்கு",
      available: "நான் ஃப்ரீலான்ஸ் வேலைக்காக கிடைக்கிறேன்.",
      nav: ["என்னைப் பற்றி", "கல்வி", "திட்டங்கள்", "திறன்கள்", "பரிந்துரைகள்",  "சுயவிவரம்", "தொடர்பு"]
    }
  };

  function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      'service_fxqid4h',      // replace with your EmailJS service ID
      'template_m1qx82a',     // replace with your EmailJS template ID
      e.target,
      'OkCDek4LLO5c_kXh-'       // replace with your EmailJS public key
    )
    .then(
      (result) => {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Thank you for reaching out. I will respond shortly.',
          confirmButtonText: 'OK'
        });
        e.target.reset();
      },
      (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong. Please try again later.',
        });
      }
    );
}


  const t = texts[language];

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

  
export default function EducationSection({ t, dbcy, twelve, ten }) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [inputPassword, setInputPassword] = useState("");

  // 🔑 Change this to your own secret password
  const correctPassword = "SAM1607";

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


  return (
    <div className={`min-vh-100 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark gradient-bg'}`}>
     <header className="py-3 shadow-sm">
  <div className="container">
    <nav className="navbar navbar-expand-lg">
      <h1 className="navbar-brand mb-0">My Portfolio</h1>
      <button className="navbar-toggler" type="button" onClick={() => setNavCollapsed(!navCollapsed)}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${navCollapsed ? '' : 'show'}`}>
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          {t.nav.map((item, index) => {
            const id = item.toLowerCase();
            return (
              <li key={index} className="nav-item">
                <a className={`nav-link ${activeSection === id ? 'active' : ''}`} href={`#${id}`} onClick={() => setNavCollapsed(true)}>
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
    <div className="d-flex align-items-center gap-2 ms-lg-3">
      <button onClick={() => setDarkMode(!darkMode)} className="btn btn-outline-secondary">
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
      <select onChange={(e) => setLanguage(e.target.value)} value={language} className="form-select form-select-sm">
        <option value="en">EN</option>
        <option value="ta">TA</option>
      </select>
    </div>
  </div>
</nav>

        </div>
      </header>

  <section id="about" className="container py-5">
  <div className="row align-items-center">
    {/* Left Side – Text Content */}
    <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
      <h2 className="display-4 text-primary">{t.aboutTitle}</h2>
      <p className="lead mb-4">{t.aboutDesc}</p>
      <a href="#contact" className="btn btn-warning btn-lg">Hire Me</a>
    </div>

    {/* Right Side – Large Circular Image */}
    <div className="col-md-6 text-center">
      <img
        src={myPhoto}
        alt="Sam"
        className="about-photo-large animate-bounce"
      />
    </div>
  </div>
</section>





 <section
      id="education"
      className="container-fluid py-5 text-center education-bg border-top border-bottom animate-fadein"
    >
      <h2 className="mb-5 text-secondary animate-fadein">
        🎓 {t.education}
      </h2>

      {/* 🔐 Password prompt */}
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
        <div className="timeline-item animate-fadein-up">
          <h5>
            <strong>Master in Computer Applications [MCA]</strong> – Ganadipathy Tulsi's Jain Engineering College (2024–2026)
          </h5>
          <p>Learned full-stack development, data structures, and cloud computing.</p>
          {isUnlocked ? (
            <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">
              View Certificate
            </a>
          ) : (
            <span className="badge bg-secondary">Locked 🔒</span>
          )}
        </div>

        <div className="timeline-item animate-fadein-up">
          <h5>
            <strong>Bachelors in Computer Applications</strong> – Don Bosco College (Co-Ed), Yelagiri Hills (2021–2024)
          </h5>
          <p>Focused on developing personal career and to the new technologies.</p>
          {isUnlocked ? (
            <a href={dbcy} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">
              View Certificate
            </a>
          ) : (
            <span className="badge bg-secondary">Locked 🔒</span>
          )}
        </div>

        <div className="timeline-item animate-fadein-up">
          <h5>
            <strong>HSC</strong> – TMKV Govt.Boys.Hr.Sec.School (2020–2021)
          </h5>
          <p>Basic education and foundation of programming logic.</p>
          {isUnlocked ? (
            <a href={twelve} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">
              View Certificate
            </a>
          ) : (
            <span className="badge bg-secondary">Locked 🔒</span>
          )}
        </div>

        <div className="timeline-item animate-fadein-up">
          <h5>
            <strong>SSLC</strong> – TMKV Govt.Boys.Hr.Sec.School (2018–2019)
          </h5>
          <p>Getting education and focusing on ambition.</p>
          {isUnlocked ? (
            <a href={ten} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">
              View Certificate
            </a>
          ) : (
            <span className="badge bg-secondary">Locked 🔒</span>
          )}
        </div>
      </div>
    </section>



      

      <section id="projects" className="container py-5">
  <h2 className="text-center mb-4 text-success">{t.projects}</h2>
  <div className="row g-4">
    
    {/* Project 1 */}
    <div className="col-md-6">
      <div className="card h-100 border-success shadow-sm">
        <img
          src={weather}
          className="card-img-top"
          alt="Weather App"
          style={{ objectFit: 'cover', height: '200px' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">React Weather App</h5>
          <p className="card-text">
            A modern weather application using OpenWeatherMap API.
          </p>
          <a
            href="https://weather-app-mu-vert-76.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-success mt-auto"
          >
            View Project
          </a>
        </div>
      </div>
    </div>

    {/* Project 2 */}
    <div className="col-md-6">
      <div className="card h-100 border-success shadow-sm">
        <img
          src={portfolio}
          className="card-img-top"
          alt="Portfolio Website"
          style={{ objectFit: 'cover', height: '200px' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">Portfolio Website</h5>
          <p className="card-text">
            My personal portfolio built with React and Bootstrap CSS.
          </p>
          <a
            href="https://happysamson.github.io/sam-portfolio/index.html"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-success mt-auto"
          >
            View Project
          </a>
        </div>
      </div>
    </div>

{/*project 3 */}      
    <div className="col-md-6">
      <div className="card h-100 border-success shadow-sm">
        <img
          src={tic_tac_toe}
          className="card-img-top"
          alt="TIC-TAC-TOE Game"
          style={{ objectFit: 'cover', height: '200px' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">TIC-TAC-TOE Game</h5>
          <p className="card-text">
            Game is to refresh our minds.
          </p>
          <a
            href="https://tictactoegame-dun.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-success mt-auto"
          >
            View Project
          </a>
        </div>
      </div>
    </div>
               {/*project 4 */}     
    <div className="col-md-6">
      <div className="card h-100 border-success shadow-sm">
        <img
          src={quiz_app}
          className="card-img-top"
          alt="Quiz App"
          style={{ objectFit: 'cover', height: '200px' }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">Quiz App</h5>
          <p className="card-text">
            It is to gain knowledge.
          </p>
          <a
            href="https://quiz-app-one-roan-39.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline-success mt-auto"
          >
            View Project
          </a>
        </div>
      </div>
    </div> 
         

  </div>
</section>


   <section id="skills" className="container py-5 text-center">
  <h2 className="mb-4 text-info">{t.skills}</h2>

  <div className="skills-wrapper position-relative overflow-hidden py-3">
    <div className="skills-marquee d-flex">
      {[
        { name: "React.js", color: "linear-gradient(90deg, #61dafb, #21a1f1)" },
        { name: "Bootstrap CSS", color: "linear-gradient(90deg, #563d7c, #7952b3)" },
        { name: "JavaScript", color: "linear-gradient(90deg, #f7df1e, #f0c300)" },
        { name: "HTML & CSS", color: "linear-gradient(90deg, #e34c26, #264de4)" },
        { name: "Node.js", color: "linear-gradient(90deg, #3c873a, #68a063)" },
        { name: "Express.js", color: "linear-gradient(90deg, #000000, #444444)" },
        { name: "MongoDB", color: "linear-gradient(90deg, #4db33d, #116149)" },
        { name: "Git & GitHub", color: "linear-gradient(90deg, #f1502f, #24292e)" }
      ].map((skill, i) => (
        <span
          key={i}
          className="badge rounded-pill skill-badge text-white mx-2 fs-6"
          style={{
            background: skill.color,
            boxShadow: "0 3px 8px rgba(0,0,0,0.2)"
          }}
        >
          {skill.name}
        </span>
      ))}
    </div>
  </div>

  <style>{`
    .skills-marquee {
      display: inline-flex;
      white-space: nowrap;
      animation: scroll-left 25s linear infinite;
    }

    @keyframes scroll-left {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }

    .skill-badge {
      transition: transform 0.3s ease, filter 0.3s ease;
    }

    .skill-badge:hover {
      transform: scale(1.15);
      filter: brightness(1.15);
    }

    .skills-wrapper {
      overflow: hidden;
      width: 100%;
    }
  `}</style>
</section>




     <section id="testimonials" className="container py-5 text-center">
  <h2 className="mb-4 text-warning">{t.testimonials}</h2>
  <div className="row justify-content-center g-4">
    
    {/* Testimonial 1 */}
    <div className="col-md-5">
      <div className="bg-light p-4 rounded shadow h-100 d-flex flex-column align-items-center">
        <img
          src= {client1}
          alt="Client A"
          className="rounded-circle mb-3"
          style={{ width: "100px", height: "100px", objectFit: "cover", border: "3px solid #ffc107" }}
        />
        <blockquote className="blockquote mb-0">
          <p>"Sam delivered exactly what we needed, on time and beyond expectations."</p>
          <footer className="blockquote-footer mt-2">Client A</footer>
        </blockquote>
      </div>
    </div>

    {/* Testimonial 2 */}
    <div className="col-md-5">
      <div className="bg-light p-4 rounded shadow h-100 d-flex flex-column align-items-center">
        <img
          src= {client2}
          alt="Client B"
          className="rounded-circle mb-3"
          style={{ width: "100px", height: "100px", objectFit: "cover", border: "3px solid #ffc107" }}
        />
        <blockquote className="blockquote mb-0">
          <p>"Fantastic work. The website looks great and performs perfectly!"</p>
          <footer className="blockquote-footer mt-2">Client B</footer>
        </blockquote>
      </div>
    </div>

  </div>
</section>


      <section id="resume" className="container py-5 text-center">
        <h2 className="mb-3 text-danger">{t.resume}</h2>
        <p>{t.resumeDownload}</p>
      <a
  href= {samresume}
  download
  className="btn btn-outline-danger btn-lg"
  onClick={() => {
    setTimeout(() => {
      Swal.fire({
        title: language === "ta" ? "வெற்றி!" : "Success!",
        text: language === "ta" ? "உங்கள் சுயவிவரம் பதிவிறக்கப்பட்டது." : "Your resume has been downloaded.",
        icon: 'success',
        confirmButtonText: 'OK',
        timer: 3000,
        timerProgressBar: true
      });
    }, 500);
  }}
>
  {t.download}
</a>


      </section>

<section id="contact" className="container-fluid py-5 text-center contact-section-bg">
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
    <a href="https://github.com/HappySamson" target="_blank" rel="noreferrer"><FaGithub /></a>
    <a href="https://www.instagram.com/mr.phoenix_03?igsh=eTJldnh2ZGNmbjBx" target="_blank" rel="noreferrer"><FaInstagram /></a>
    <a href="https://www.facebook.com/share/1BYhuDCjdt/" target="_blank" rel="noreferrer"><FaFacebook /></a>
    <a href="https://www.linkedin.com/in/sam-son-3491932a2/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
    {/* <a href="http://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"><FaEnvelope /></a> */}
  </div>
</section>


      <footer className={`text-center py-3 border-top ${darkMode ? 'bg-secondary text-light' : 'bg-white text-muted'}`}>
        &copy; 2025 Sam. All rights reserved.
      </footer>

      
    </div>
  );
}
