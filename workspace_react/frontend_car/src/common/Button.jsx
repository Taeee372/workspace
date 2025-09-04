import React from 'react'
import styles from './Button.module.css'

const Button = ({title='버튼', size='80px', color='blue', onClick, ...props}) => {
  return (
    <button
      type='button'
      style={{width : size}}
      className={`${styles.btn} ${styles[color]}`}
      onClick={onClick}
      {...props}
    >
    {title}</button>
  )
}

export default Button