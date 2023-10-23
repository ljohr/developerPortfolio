import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faAngleRight, faEnvelope, faGears, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import "./Home.css"

const Home = () => {
  return (
    <main className="Home">
        <About/>
        <Row/>
    </main>
  )
}

function About(){
  return(
    <>
    <section className='about' id="about">  
      <section className="about-img">
        <img src="https://github.com/ljohr/personalWebsite/blob/main/src/assets/lillyohr-headshot.jpg" alt="Lilly Ohr Headshot" />
        <p className="small-text">/lɪli oʊɹ/</p>
        <section className="about-icons">
          <a href="https://www.linkedin.com/in/lillyohr/" target="_blank"><FontAwesomeIcon icon={ faLinkedin } /></a>
          <a href="https://github.com/ljohr" target="_blank"><FontAwesomeIcon icon={ faGithub } /></a>
          <a href="mailto:lillyohr@gmail.com"><FontAwesomeIcon icon={ faEnvelope }/></a>
        </section>
      </section>
      <section className="about-inner">
        <section className="about-text">
          <h3>Full Stack Web Developer / Student</h3>
          <p>Hello! I’m Lilly Ohr, a senior majoring in <span className="highlighter">Computer Science and Linguistics at Boston College.</span> My main interest lies in <span className="highlighter">full stack web development</span>, and I am most familiar with the <span className="highlighter">MERN Stack.</span></p>
          <p> I am working as a <span className="highlighter">teaching assistant</span> for Text Editing (CSCI2349) and have previously been a TA for Computer Systems (CSCI2271). I have leadership experience working as the project manager in the <span className="highlighter">NASA L'SPACE program,</span> and I currently serve as president of the Boston College Linguistics Club. Outside of my academic and professional pursuits, I enjoy reading, playing guitar, sipping on some coffee, and thinking about the oddities of language.</p>
          <p>I'm actively <span className="highlighter">seeking job opportunities for 2024.</span> Feel free to explore my projects below and don't hesitate to contact me with any questions or potential opportunities.</p>
        </section>
        
      </section>
    </section>
    </>
  )
}

function Skills(){
  return(
    <section className='skills' id="skills">
      <h2 className="title-h2">Skills</h2>
      <section className="skills-group">
        <section className="skills-inner">
          <h3>Programming Languages</h3>
          <ul>
            <li>Python</li>
            <li>Java</li>
            <li>C</li>
            <li>JavaScript</li>
            <li>HTML & CSS</li>
          </ul>
        </section>
        <section className="skills-inner">
          <h3>Technologies</h3>
          <ul>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>Firebase</li>
            <li>Git / GitHub</li>
            <li>Vite</li>
          </ul>
        </section>
        <section className="skills-inner">
          <h3>Frameworks and Libraries</h3>
          <ul>
            <li>React</li>
            <li>Node.js</li>
            <li>Express.js</li>
          </ul>
        </section>
      </section>
    </section>
  )
}
  
function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="title-h2">Projects</h2>
      <section className="projects-group">
        <section className="projects-inner">
          <div className="vert-top-container">
            <h3>Scope <FontAwesomeIcon icon={ faGears } /></h3>
            <h4><span className="highlighter">MongoDB</span> / <span className="highlighter">Express</span> / <span className="highlighter">React</span> / <span className="highlighter">Node.js</span> / <span className="highlighter">Firebase Auth</span></h4>
            <p>A full stack website made to improve the accessibility of course evaluations at Boston College.</p>
          </div>
          <div className="vert-bottom-container">
            <a className="read-more" href="/scope">Read More <FontAwesomeIcon icon={ faAngleRight }/></a>
          </div>
        </section>
        <section className="projects-inner">
          <div className="vert-top-container">
            <h3>BC Linguistics Club Website <FontAwesomeIcon icon={ faGears } /> </h3>
            <h4><span className="highlighter">MongoDB</span> / <span className="highlighter">Express</span> / <span className="highlighter">React</span> / <span className="highlighter">Node.js</span> / <span className="highlighter">Firebase Auth</span></h4>
            <p>A full stack website made for the Boston College Linguistics Club.</p>
          </div>
          <div className="vert-bottom-container">
            <a className="read-more" href="/ling-club">Read More <FontAwesomeIcon icon={ faAngleRight }/></a>
          </div>
        </section>
        <section className="projects-inner">
          <div className="vert-top-container">
            <h3>Course Evaluations Web Scrapper</h3>
            <h4><span className="highlighter">Selenium</span> / <span className="highlighter">Python</span> / <span className="highlighter">MongoDB</span></h4>
            <p>A program that scrapes public course reviews using Selenium and Python.</p>
          </div>
          <div className="vert-bottom-container">
            <a className="read-more" href="/web-scraper">Read More <FontAwesomeIcon icon={ faAngleRight }/></a>
          </div>
        </section>
        <section className="projects-inner">
          <div className="vert-top-container">
            <h3>xv6 Multi-Level Feedback Queue (MFQ)</h3>
            <h4><span className="highlighter">C</span></h4>
            <p>Implemented a multi-level feedback queue on the xv6 operating system.</p>
          </div>
          <div className="vert-bottom-container">
            <a className="read-more" href="/mfq">Read More <FontAwesomeIcon icon={ faAngleRight }/></a>
          </div>
        </section>
        <section className="projects-inner">
          <div className="vert-top-container">
            <h3>Tic Tac Toe</h3>
            <h4><span className="highlighter">HTML</span> / <span className="highlighter">CSS</span> / <span className="highlighter">JavaScript</span></h4>
            <p>A 3x3 grid Tic Tac Toe game written in JavaScript following object-oriented programming (OOP) principles.</p>
          </div>
          <div className="vert-bottom-container">
            <a className="read-more" href="">Read More <FontAwesomeIcon icon={ faAngleRight }/></a>
          </div>
        </section>
        <section className="projects-inner">
          <div className="vert-top-container">
            <h3>C Style Checker</h3>
            <h4><span className="highlighter">Python</span></h4>
            <p>A Python script that checks whether a given C file conforms to the specified styling rules.</p>
          </div>
          <div className="vert-bottom-container">
            <a className="read-more" href="/c-style-checker">Read More <FontAwesomeIcon icon={ faAngleRight }/></a>
          </div>
        </section>
      </section>
    </section>
  )
}

function Experience(){
  return(
    <section className='experience' id="experience">
      <h2 className="title-h2">Experience</h2>
      <div className="experiences-all">
      <section className="experience-inner">
          <div className="experience-title">
            <p className="employer">Boston College</p> 
            <p className="location">Chestnut Hill, MA</p>
          </div>
          <div className="experience-info">
            <p className="job-title"><span className="highlighter">Text Editing TA</span></p>
            <p className="date">August 2023 - Present</p>
          </div>
          <ul className="experience-description">
            <li>Grading assignments and holding weekly office hours to tutor students with class concepts and assignments</li> 
          </ul>
        </section>
        <section className="experience-inner">
          <div className="experience-title">
            <p className="employer">Boston College</p> 
            <p className="location">Chestnut Hill, MA</p>
            </div>
          <div className="experience-info">
            <p className="job-title"><span className="highlighter">Computer Systems TA</span></p>
            <p className="date">Jan 2023 - May 2023</p>
          </div>
          <ul className="experience-description">
            <li>Wrote C Style Checker Python script to reduce grading time of styling component by 90%</li>
            <li>Held weekly office hours to tutor students in debugging assignments and understanding key concepts (memory allocation, pointers, processes)</li>
            <li>Graded 90 assignments in C, provided detailed feedback to improve code functionality and style</li>
          </ul>
        </section>
        <section className="experience-inner">
          <div className="experience-title">
            <p className="employer">NASA</p>
            <p className="location">Remote</p>
          </div>
          <div className="experience-info">
            <p className="job-title"><span className="highlighter">L'SPACE NPWEE Business Team Lead</span></p>
            <p className="date">May 2022 - Aug 2022</p>
          </div>
          <ul className="experience-description">
            <li>Selected for leadership role in NASA's workforce development program for STEM college students</li>
            <li>Led 3-member team to propose an innovative improvement to NASA technology</li>
            <li>Responsibilities included managing tasks, conducting meetings, and communicating with the project manager</li>
            <li>Further explored strategies for how to work as an effective team member in hybrid and remote work conditions</li>
            <li><a href="https://drive.google.com/file/d/1e3RVvkMlDfaNZAuxrCcoiACa9rSUfLKF/view" target="_blank">
              New Technology Report
              <FontAwesomeIcon className="link-icon" icon={ faUpRightFromSquare }/>
            </a></li>
          </ul>
        </section>
        <section className="experience-inner">
          <div className="experience-title">
            <p className="employer">NASA</p>
            <p className="location">Remote</p>
          </div>
          <div className="experience-info">
            <p className="job-title"><span className="highlighter">L'SPACE MCA Project Manager</span></p>
            <p className="date">Aug 2021 - Dec 2021</p>
          </div>
          <ul className="experience-description">
            <li>Chosen as team leader in NASA's workforce development program for STEM college students</li>
            <li>Managed 9-member team in developing a 150-page Preliminary Design Review for a hypothetical Mars mission</li>
            <li>Led weekly team meetings, communicated with subteam leads, and set goals for subteams</li>
            <li>Learned principles of effective team management and work in hybrid and remote work conditions</li>
            <li><a href="https://drive.google.com/file/d/1bIIMl1pefHiWhEZNvwsxDlg36LiUmsmx/view" target="_blank">
              Preliminary Design Review 
              <FontAwesomeIcon className="link-icon" icon={ faUpRightFromSquare }/>
            </a></li>
          </ul>
        </section>
      </div>
    </section>
  )
}

function News(){
  return (
    <section className="news">
      <h2 className="title-h2">News</h2>
      <p><span className="bold-text">Now:</span> Working on Scope, a website aimed providing an easy to use interface for course evaluations.</p>
      <p><span className="bold-text">Aug 2023:</span> Started working as a TA for Text Processing</p>
      <p><span className="bold-text">June 2023:</span> Wrote a simple Tic Tac Toe Game to practice OOP<a href="https://github.com/ljohr/ticTacToe" target="_blank"><FontAwesomeIcon icon={ faGithub }/></a></p>
      <p><span className="bold-text">June 2023:</span> Started working on Scope</p>
      <p><span className="bold-text">May 2023:</span> Wrote a C Style Checker for Computer Systems<a href="https://github.com/ljohr/c-style-checker" target="_blank"><FontAwesomeIcon icon={ faGithub }/></a></p>
    </section>
  )
}

function Row() {
  return (
    <div className="row">
      <div className="leftCol">
        <Skills/>
        <Projects/>
        <Experience/>
      </div>
      <div className="rightCol">
        <News/>
      </div>
    </div>
  )
}

export default Home