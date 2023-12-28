"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import favicon from "../favicon.ico";
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
          <a href="/">
            <Image src={favicon} alt="Lilly Ohr" height={32} width={32} />
          </a>
        </h2>
        <HamburgerMenu isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
      <ul className={isOpen ? "mobile-inner-nav" : "navbar-nav"}>
        <li className="nav-item">
          <Link
            href="/#projects"
            onClick={(e) => handleLinkClick(e, toggleMenu, isOpen)}
          >
            <span className="link-text">Projects</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            href="/#skills"
            onClick={(e) => handleLinkClick(e, toggleMenu, isOpen)}
          >
            <span className="link-text">Skills</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            href="/#about"
            onClick={(e) => handleLinkClick(e, toggleMenu, isOpen)}
          >
            <span className="link-text">About</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            href="/blog"
            onClick={(e) => handleLinkClick(e, toggleMenu, isOpen)}
          >
            <span className="link-text">Blog</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            href="/#resume"
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
