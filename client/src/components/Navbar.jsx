import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (event, toggle, isMenuOpen) => {
    if (isMenuOpen) {
      toggle();
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={isOpen ? "mobile-navbar" : "main-navbar"}>
      <div className="nav-toggle-menu">
        <h2 className="name-title">
          <a href="/">Lilly Ohr</a>
        </h2>
        <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
      <ul className={isOpen ? "mobile-inner-nav" : "navbar-nav"}>
        <li className="nav-item">
          <Link
            to="/#projects"
            onClick={(e) => handleLinkClick(e, toggleMenu, isOpen)}
          >
            <span className="link-text">Projects</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/#skills"
            onClick={(e) => handleLinkClick(e, toggleMenu, isOpen)}
          >
            <span className="link-text">Skills</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/#about"
            onClick={(e) => handleLinkClick(e, toggleMenu, isOpen)}
          >
            <span className="link-text">About</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/#resume"
            onClick={(e) => handleLinkClick(e, toggleMenu, isOpen)}
          >
            <span className="link-text">Resume</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

function HamburgerMenu({ isOpen, toggleMenu }) {
  return (
    <button
      onClick={toggleMenu}
      className={isOpen ? "hamburger is-active" : "hamburger"}
    >
      <div className="bars"></div>
    </button>
  );
}

export default Navbar;
