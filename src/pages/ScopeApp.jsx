import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Projects.css"

const ScopeApp = () => {
  return (
    <main>
      <div className="project-title">
        <div className="project-title-inner">
          <h1>Scope</h1>
          <h3><span className="highlighter">MongoDB</span> / <span className="highlighter">Express</span> / <span className="highlighter">React</span> / <span className="highlighter">Node.js</span> / <span className="highlighter">Firebase Auth</span></h3>
        </div>
        {/* <a href="" target="_blank">In Progress <FontAwesomeIcon icon={ faGears } /></a> */}
        <p className="in-progress">In Progress <FontAwesomeIcon icon={ faGears } /></p>
      </div>
      <p>This is a python script which checks whether a C program conforms to the style guideline found in the all_rules.txt file.</p>
    </main>
  )
}

export default ScopeApp;