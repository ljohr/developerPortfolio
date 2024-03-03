import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faSeedling } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import styles from "./page.module.css";

import htmlImg from "../assets/skills-img/html.png";
import cssImg from "../assets/skills-img/css.png";
import jsImg from "../assets/skills-img/js.png";
import pythonImg from "../assets/skills-img/python.png";
import cImg from "../assets/skills-img/c.png";
import javaImg from "../assets/skills-img/java.png";
import nodeImg from "../assets/skills-img/nodejs.png";
import mongodbImg from "../assets/skills-img/mongodb.svg";
import mysqlImg from "../assets/skills-img/mysql.svg";
import gitImg from "../assets/skills-img/git.svg";
import firebaseImg from "../assets/skills-img/firebase.svg";
import viteImg from "../assets/skills-img/vite.svg";
import reactImg from "../assets/skills-img/react.svg";
import expressImg from "../assets/skills-img/express.svg";

import scopeapp from "../assets/projects/scope-app.png";
import gradconnect from "../assets/projects/gradconnect.png";
import eagleconnect from "../assets/projects/eagleconnect.png";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <h1 className={styles.title} data-text="Lilly Ohr">
          Lilly Ohr
        </h1>
        <h3>Fullstack Developer Based in Boston</h3>
        <p>
          Hi I’m Lilly, a full stack developer studying{" "}
          <span className={styles.highlighter}>
            Computer Science and Linguistics at Boston College.
          </span>{" "}
          I’m passionate about developing engaging, accessible, and performant
          applications applications. I’m currently working as a{" "}
          <span className={styles.highlighter}>
            software engineering research assistant
          </span>{" "}
          under Professor Mira Yun, developing a fullstack mentorship networking
          application.
        </p>
        {/* <div className={styles.links}>
          <a href="https://github.com/ljohr" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} className={styles.faIcon} />
          </a>
          <a
            href="https://www.linkedin.com/in/lillyohr/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className={styles.faIcon} />
          </a>
        </div> */}
      </div>
    </section>
  );
};

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.titleH2}>Skills</h2>
      <div className={styles.skillsGroup}>
        <div>
          <h3>Programming Languages</h3>
          <div className={styles.iconsContainer}>
            <div className={styles.skillsIcon}>
              <Image src={htmlImg} alt="html" height={50} width={50} />
              <p>HTML</p>
            </div>
            <div className={styles.skillsIcon}>
              <Image src={cssImg} alt="css" height={50} width={50} />
              <p>CSS</p>
            </div>
            <div className={styles.skillsIcon}>
              <Image src={jsImg} alt="javascript" height={50} width={50} />
              <p>JavaScript</p>
            </div>
            <div className={styles.skillsIcon}>
              <Image src={pythonImg} alt="python" height={50} width={50} />
              <p>Python</p>
            </div>
            <div className={styles.skillsIcon}>
              <Image src={cImg} alt="c" height={50} width={50} />
              <p>C</p>
            </div>
            <div className={styles.skillsIcon}>
              <Image src={javaImg} alt="java" height={50} width={50} />
              <p>Java</p>
            </div>
          </div>
        </div>
        <div>
          <h3>Technologies</h3>
          <div className={styles.iconsContainer}>
            <div className={styles.skillsIcon}>
              <Image src={nodeImg} alt="node-js" height={50} width={50} />
              <p>Node.js</p>
            </div>
            <div className={styles.skillsIcon}>
              <Image src={mongodbImg} alt="mongodb" height={50} width={50} />
              <p>MongoDB</p>
            </div>
            <div className={styles.skillsIcon}>
              <Image src={mysqlImg} alt="mysql" height={50} width={50} />
              <p>MySQL</p>
            </div>
            <div className={styles.skillsIcon}>
              <Image src={gitImg} alt="git" height={50} width={50} />
              <p>Git</p>
            </div>
            <div className={styles.skillsIcon}>
              <Image src={firebaseImg} alt="firebase" height={50} width={50} />
              <p>Firebase</p>
            </div>
            <div className={styles.skillsIcon}>
              <Image src={viteImg} alt="vite" height={50} width={50} />
              <p>Vite</p>
            </div>
          </div>
        </div>
        <div>
          <h3>Frameworks</h3>
          <div className={styles.iconsContainer}>
            <div className={styles.skillsIcon}>
              <Image src={reactImg} alt="react" height={50} width={50} />
              <p>React</p>
            </div>
            <div className={styles.skillsIcon}>
              <Image src={expressImg} alt="express-js" height={50} width={50} />
              <p>Express.js</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.projectsInner}>
        <h2 className={styles.titleH2}>Projects</h2>
        <div className={styles.projectsGroup}>
          <div className={styles.projectsCard}>
            <div className={styles.projectInfo}>
              <div className={styles.projectHeader}>
                <h3>Scope</h3>
                <div className={styles.projectLinks}>
                  <a
                    className={styles.projectSingleLink}
                    href="https://github.com/ljohr/scope"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                    <FontAwesomeIcon icon={faGithub} className={styles.faGit} />
                  </a>
                  <a
                    className={styles.projectSingleLink}
                    href="https://scopeapp.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    See Live
                    <FontAwesomeIcon
                      icon={faSeedling}
                      className={styles.faSeedling}
                    />
                  </a>
                </div>
              </div>
              <p className={styles.projectDesc}>
                Scope was created to provide an accessible course evaluations
                platform for Boston College students.
              </p>
              <p>
                17,000 course reviews were scraped using a Python script. Users
                can add, update, and delete their own reviews as they search for
                existing courses that fit their needs.
              </p>
              <div className={styles.projectLangs}>
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
            <div className={styles.imgCard}>
              <Image
                className={styles.projectImg}
                src={scopeapp}
                alt="scope"
                height={204}
                width={374}
              />
            </div>
          </div>
          <div className={styles.projectsCard}>
            <div className={styles.projectInfo}>
              <div className={styles.projectHeader}>
                <h3>Grad Connect</h3>
                <div className={styles.projectLinks}>
                  <a
                    className={styles.projectSingleLink}
                    href="https://github.com/fordesa/HackTheHeights"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github{" "}
                    <FontAwesomeIcon icon={faGithub} className={styles.faGit} />
                  </a>
                  <a
                    className={styles.projectSingleLink}
                    href="https://gradconnect.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    See Live
                    <FontAwesomeIcon
                      icon={faSeedling}
                      className={styles.faSeedling}
                    />
                  </a>
                </div>
              </div>

              <p className={styles.projectDesc}>
                Grad Connect was created to connect low resource high school
                students with undergraduate college students acting as mentors.
              </p>
              <p className={styles.moreInfo}>
                Winner of the Grand Prize and Best Use of Auth0 Prize at the
                2023 Boston College Hackathon.
              </p>
              <div className={styles.projectLangs}>
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
            <div className={styles.imgCard}>
              <Image
                className={styles.projectImg}
                src={gradconnect}
                alt="Grad Connect"
                height={204}
                width={374}
              />
            </div>
          </div>
          <div className={styles.projectsCard}>
            <div className={styles.projectInfo}>
              <div className={styles.projectHeader}>
                <h3>Eagle Connect</h3>
                <div className={styles.projectLinks}>
                  <a
                    className={styles.projectSingleLink}
                    href="https://github.com/ljohr/eagle-connect"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                    <FontAwesomeIcon icon={faGithub} className={styles.faGit} />
                  </a>
                  <a
                    className={styles.projectSingleLink}
                    href="https://eagleconnect.onrender.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    See Live
                    <FontAwesomeIcon
                      icon={faSeedling}
                      className={styles.faSeedling}
                    />
                  </a>
                </div>
              </div>
              <p className={styles.projectDesc}>
                Eagle Connect was created to connect undergraduate students at
                Boston College with BC alumni. The platform allows mentors to
                indicate what help they are willing to offer (general career,
                resume review, interview help).
              </p>
              <p>
                The MVP is currently live, and V1 is under development with the
                aim of being launched by March 2024. Developed by a team of 3,
                we aim to make this platform the leading networking solution for
                all BC students by the end of the year.
              </p>
              <div className={styles.projectLangs}>
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
            <div className={styles.imgCard}>
              <Image
                className={styles.projectImg}
                src={eagleconnect}
                alt="Eagle Connect"
                height={204}
                width={374}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactInner}>
        <h2 className={styles.titleH2}>Contact</h2>
        <div className={styles.contactContent}>
          <div className={styles.contactTitle}>
            <p>GitHub</p>
            <p>LinkedIn</p>
          </div>
          <div className={styles.contactLinks}>
            <a href="https://github.com/ljohr" target="_blank" rel="noreferrer">
              git/ljohr
            </a>
            <a
              href="https://www.linkedin.com/in/lillyohr/"
              target="_blank"
              rel="noreferrer"
            >
              in/lillyohr
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <main className={styles.mainArea}>
      <header>
        <Navbar />
      </header>
      <main className={`${styles.loadAnimation} ${styles.mainContent}`}>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </main>
  );
};

export default Home;
