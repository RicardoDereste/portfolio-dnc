import React from 'react'
import styles from './ButtonA.module.css'

const ButtonA = ({text, link}) => {
  return (
    <div>
        <a href={link}>
            <button className={styles.btn}>{text}</button>
        </a>
    </div>
  )
}

export default ButtonA