import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import "./Footer.css"

const Footer = () => {
  return(
    <footer>
      <p>Lilly Ohr &copy; 2023</p>
      <a href=""><FontAwesomeIcon icon={ faGithub } /></a>
      
    </footer>
  )
}

export default Footer