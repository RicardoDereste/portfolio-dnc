import React from 'react'
import styles from './Card.module.css'
import ButtonB from './ButtonB'
import { useState } from 'react'

const Card = ({ img, title, tech, description, repo, website }) => {

  const [info, setInfo] = useState(false)

  function infoOn() {
    setInfo(true)
  }

  function infoOff() {
    setInfo(false)
  }

  return (
    <div onMouseLeave={infoOff} className={styles.card}>
      <a onMouseEnter={infoOn} href={website}>
        <img src={img} alt={title} />
      </a>

      {info === true && (
        <section>
          <h3>{title}</h3>
          <p><strong>Technology: </strong>{tech}</p>
          <p>{description}</p>
          <ButtonB text='Access my repository' link={repo} />
        </section>
      )}

    </div>
  )
}

export default Card