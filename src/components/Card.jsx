import React from 'react'
import styles from './Card.module.css'
import ButtonB from './ButtonB'

const Card = ({img, title, tech, description, repo, website}) => {
  return (
    <div className={styles.card}>
        <a href={website}>
            <img src={img} alt={title} />
        </a>
        <section>
            <h3>{title}</h3>
            <p><strong>Technology: </strong>{tech}</p>
            <p>{description}</p>
            <ButtonB text='Access my repository' />
        </section>
    </div>
  )
}

export default Card