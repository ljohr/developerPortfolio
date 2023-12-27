import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <main className="Home load-animation">
      <Hero />
      <Projects />
      <Skills />
      <About />
      <ScrollUpBtn />
    </main>
  );
};

const Hero = () => {
  return (
    <section id="hero">
      <div className="container">
        <h1 className="title" data-text="Lilly Ohr">
          Lilly Ohr
        </h1>
        <h3>Full Stack Developer Based in Boston</h3>
        <div className="hero-links">
          <a href="https://github.com/ljohr" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/lillyohr/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="title-h2">Skills</h2>
        <div className="skills-group">
          <div className="skills-inner">
            <h3>Programming Languages</h3>
            <div className="icons-container">
              <div className="skills-icon">
                <img src="../src/assets/skills-img/html.png" alt="htm" />
                <p>HTML</p>
              </div>
              <div className="skills-icon">
                <img src="../src/assets/skills-img/css.png" alt="css" />
                <p>CSS</p>
              </div>
              <div className="skills-icon">
                <img src="../src/assets/skills-img/js.png" alt="javascript" />
                <p>JavaScript</p>
              </div>
              <div className="skills-icon">
                <img src="../src/assets/skills-img/python.png" alt="python" />
                <p>Python</p>
              </div>
              <div className="skills-icon">
                <img src="../src/assets/skills-img/c.png" alt="c" />
                <p>C</p>
              </div>
              <div className="skills-icon">
                <img src="../src/assets/skills-img/java.png" alt="java" />
                <p>Java</p>
              </div>
            </div>
          </div>
          <div className="skills-inner">
            <h3>Technologies</h3>
            <div className="icons-container">
              <div className="skills-icon">
                <img src="../src/assets/skills-img/nodejs.png" alt="node-js" />
                <p>Node.js</p>
              </div>
              <div className="skills-icon">
                <img src="../src/assets/skills-img/mongodb.svg" alt="mongodb" />
                <p>MongoDB</p>
              </div>
              <div className="skills-icon">
                <img src="../src/assets/skills-img/mysql.svg" alt="mysql" />
                <p>MySQL</p>
              </div>
              <div className="skills-icon">
                <img src="../src/assets/skills-img/git.svg" alt="git" />
                <p>Git</p>
              </div>
              <div className="skills-icon">
                <img
                  src="../src/assets/skills-img/firebase.svg"
                  alt="firebase"
                />
                <p>Firebase</p>
              </div>
              <div className="skills-icon">
                <img src="../src/assets/skills-img/vite.svg" alt="vite" />
                <p>Vite</p>
              </div>
            </div>
          </div>
          <div className="skills-inner">
            <h3>Frameworks</h3>
            <div className="icons-container">
              <div className="skills-icon">
                <img src="../src/assets/skills-img/react.svg" alt="react" />
                <p>React</p>
              </div>
              <div className="skills-icon">
                <img
                  src="../src/assets/skills-img/express.svg"
                  alt="express-js"
                />
                <p>Express.js</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="title-h2">Projects</h2>
        <div className="projects-group">
          <div className="projects-card">
            <div className="left img-card">
              <img
                className="project-img"
                src="../src/assets/projects/scope-app.png"
                alt=""
              />
            </div>
            <div className="right">
              <div className="project-header">
                <h3>Scope</h3>
                <div className="project-links">
                  <Link
                    className="project-single-link"
                    to="https://github.com/ljohr/scope"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                    <FontAwesomeIcon icon={faGithub} />
                  </Link>
                  <Link
                    className="project-single-link"
                    to="https://scopeapp.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    See Live
                    <FontAwesomeIcon icon={faSeedling} />
                  </Link>
                </div>
              </div>
              <p className="project-desc">
                Scope was created to provide an accessible and
              </p>
              <div className="project-langs">
                <ul>
                  <li>HTML / CSS</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>MongoDB</li>
                  <li>Firebase Auth</li>
                  <li>Mongoose</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="projects-card">
            <div className="left">
              <div className="project-header">
                <h3>Grad Connect</h3>
                <div className="project-links">
                  <Link
                    className="project-single-link"
                    to="https://github.com/fordesa/HackTheHeights"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github <FontAwesomeIcon icon={faGithub} />
                  </Link>
                  <Link
                    className="project-single-link"
                    to="https://gradconnect.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    See Live
                    <FontAwesomeIcon icon={faSeedling} />
                  </Link>
                </div>
              </div>

              <p className="project-desc">
                This is a website created with the purpose of connecting low
                resource high school students with undergraduate college
                students acting as mentors.
              </p>
              <p className="project-more-info">
                Winner of the Grand Prize and Best Use of Auth0 Prize at the
                2023 Boston College Hackathon.
              </p>
              <div className="project-langs">
                <ul>
                  <li>HTML / CSS</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>MongoDB</li>
                  <li>Auth0</li>
                  <li>Mongoose</li>
                </ul>
              </div>
            </div>
            <div className="right img-card">
              <img
                className="project-img"
                src="../src/assets/projects/gradconnect.png"
                alt=""
              />
            </div>
          </div>
          <div className="projects-card">
            <div className="left">
              <img
                className="project-img img-card"
                src="../src/assets/projects/eagleconnect.png"
                alt=""
              />
            </div>
            <div className="right">
              <div className="project-header">
                <h3>Eagle Connect</h3>
                <div className="project-links">
                  <Link
                    className="project-single-link"
                    to="https://github.com/ljohr/eagle-connect"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                    <FontAwesomeIcon icon={faGithub} />
                  </Link>
                  <Link
                    className="project-single-link"
                    to="https://eagleconnect.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    See Live
                    <FontAwesomeIcon icon={faSeedling} />
                  </Link>
                </div>
              </div>
              <p className="project-desc">
                This is a website created with the purpose of connecting low
                resource high school students with undergraduate college
                students acting as mentors.
              </p>
              <div className="project-langs">
                <ul>
                  <li>HTML / CSS</li>
                  <li>React</li>
                  <li>Node.js</li>
                  <li>MongoDB</li>
                  <li>Firebase Auth</li>
                  <li>Mongoose</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="title-h2">About</h2>
        <p>
          Hi, Lilly Ohr, a I’m full stack web developer studying Computer
          Science and Linguistics at Boston College. I’m passionate about
          building engaging, accessible, and robust web applications that solve
          user problems.
        </p>
        <p>
          I’ve recently been working on Scope, a web app made to streamline and
          simplify access to course evaluations at Boston College. I’ve also
          been working as a TA at BC’s Computer Science Department for over a
          year and have had the opportunity to co-found the Boston College
          Linguistics Club, where I currently serve as president.
        </p>
        <p>
          When I’m not programming, I like to spend my time playing guitar,
          reading, and drinking coffee.
        </p>
      </div>
    </section>
  );
};

const ScrollUpBtn = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 20) setVisible(true);
    else setVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      style={{ display: visible ? "flex" : "none" }}
      className="top"
    >
      <FontAwesomeIcon icon={faAngleUp} />
    </button>
  );
};

export default Home;
