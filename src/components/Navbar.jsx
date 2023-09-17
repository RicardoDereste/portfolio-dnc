import React from 'react'
import styles from './Navbar.module.css'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import Nav from 'react-bootstrap/Nav'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <ul>
        <li><Nav.Link href='#resume'>Resume</Nav.Link></li>
        <li><Nav.Link href='#skills'>Skills</Nav.Link></li>
        <li><Nav.Link href='#projects'>Projects</Nav.Link></li>
      </ul>
      <ul>
        <li><a href="https://www.instagram.com/jrdereste/"><FaInstagram size={30} /></a></li>
        <li><a href="https://www.linkedin.com/in/ricardodereste/"><FaLinkedin size={30} /></a></li>
        <li><a href="https://github.com/RicardoDereste"><FaGithub size={30} /></a></li>
      </ul>
    </div>
  )
}

export default Navbar