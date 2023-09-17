import React from 'react'
import styles from './ButtonB.module.css'

const ButtonB = ({text, link}) => {
  return (
    <div>
        <a href={link}>
            <button className={styles.btn}>{text}</button>
        </a>
    </div>
  )
}

export default ButtonB