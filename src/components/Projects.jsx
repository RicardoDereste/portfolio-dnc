import React from 'react'
import ButtonB from './ButtonB'
import styles from './Projects.module.css'
import Card from './Card'
import coffero from '../assets/img/coffero.png'
import blogHelloWorld from '../assets/img/blogHelloWorld.png'

const Projects = () => {
  return (
    <div className={styles.projects} id='projects'>
      <h1>Projects</h1>
      <Card
        img={coffero}
        title='Coffero'
        tech='HTML, CSS, JS, React'
        description='A coffee shop website'
        repo='https://github.com/RicardoDereste/coffero'
        website='https://coffero.vercel.app' />

      <Card
        img={blogHelloWorld}
        title='Blog Hello World'
        tech='HTML, CSS, JS, SASS, React'
        description='A blog website'
        repo='https://github.com/RicardoDereste/blog-hello-world'
        website='https://blog-hello-world.vercel.app/' />
        <div className={styles.button}>
          <ButtonB text='Access my repository' link='https://github.com/RicardoDereste' />
        </div>
      
    </div>
  )
}

export default Projects