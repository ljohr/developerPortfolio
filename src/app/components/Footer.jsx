import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import styles from "../components/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerMain}>
      <div className={styles.footerContainer}>
        <p>Copyright &copy; Lilly Ohr 2023</p>
        <div className={styles.footerLinks}>
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
    </footer>
  );
};

export default Footer;
