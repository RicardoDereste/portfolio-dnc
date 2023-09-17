import React from 'react'
import styles from './Skills.module.css'
import html from '../assets/img/html.svg'
import css from '../assets/img/css.svg'
import javascript from '../assets/img/javascript.svg'
import react from '../assets/img/react.svg'
import typescript from '../assets/img/typescript.svg'

const Skills = () => {
  return (
    <div className={styles.skills} id='skills'>
      <h1>Skills</h1>
      <p>Get to know a little about my main skills and knowledge.</p>
      <div>
        <img src={html} alt="html" />
        <img src={css} alt="css" />
        <img src={javascript} alt="javascript" />
        <img src={react} alt="react" />
        <img src={typescript} alt="typescript" />
      </div>
    </div>
  )
}

export default Skills