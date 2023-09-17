import React from 'react'
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer} id='footer'>
      <ul>
        <li><a href="https://www.instagram.com/jrdereste/"><FaInstagram size={30} /></a></li>
        <li><a href="https://www.linkedin.com/in/ricardodereste/"><FaLinkedin size={30} /></a></li>
        <li><a href="https://github.com/RicardoDereste"><FaGithub size={30} /></a></li>
      </ul>
      <p>jrdereste@hotmail.com</p>
      <p>Ricardo Dereste &copy; 2023</p>
    </div>
  )
}

export default Footer