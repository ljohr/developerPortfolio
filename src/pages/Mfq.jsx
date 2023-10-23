import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Projects.css"

const Mfq = () => {
  return (
    <main>
      <div className="project-title">
        <div className="project-title-inner">
          <h1>Multi-Level Feedback Queue (MFQ) in xv6</h1>
          <h3><span className="highlighter">C</span></h3>
        </div>
        <a href="https://github.com/ljohr/xv6-mfq" target="_blank"><FontAwesomeIcon icon={ faGithub } /></a>
      </div>
      <p>This is a python script which checks whether a C program conforms to the style guideline found in the all_rules.txt file.</p>
    </main>
  )
}

export default Mfq;