import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Projects.css"

const ScopeScraper = () => {
  return (
    <main>
      <div className="project-title">
        <div className="project-title-inner">
          <h1>Course Evaluations Web Scrapper</h1>
          <h3><span className="highlighter">Selenium</span> / <span className="highlighter">Python</span> / <span className="highlighter">MongoDB</span></h3>
        </div>
        <p className="private-project">Available Upon Request <FontAwesomeIcon icon={ faLock } /></p>
      </div>
      <p>This is a python script which checks whether a C program conforms to the style guideline found in the all_rules.txt file.</p>
    </main>
  )
}

export default ScopeScraper;