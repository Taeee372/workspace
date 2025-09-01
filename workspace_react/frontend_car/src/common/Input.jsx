import React from 'react'
import styles from './Input.module.css'

const Input = ({size='80px', ...props}) => {
  return (
    <input
      style={{width : size}}
      className={styles.input}
      {...props}
    >

    </input>
  )
}

export default Input