import React from 'react'
import styles from './Resume.module.css'
import ButtonA from './ButtonA'

const Resume = () => {
  return (
    <div className={styles.resume} id='resume'>
      <h4><strong>Welcome to my Portfolio</strong></h4>
      <h1>Hello, I'm Ricardo Dereste!</h1>
      <p>I'm Ricardo, a 24 years year old web developer dedicated to creating engaging websites. Skilled in HTML, CSS, JavaScript, Sass, and React. Committed to continuous learning and delivering exceptional web experiences. Eager to contribute and collaborate.</p>
      <ButtonA text='Connect with me!!' link='https://github.com/RicardoDereste' />
    </div>
  )
}

export default Resume