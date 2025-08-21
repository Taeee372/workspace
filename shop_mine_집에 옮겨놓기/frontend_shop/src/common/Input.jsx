import React from 'react'
import styles from './Input.module.css'

//({size=120}, props) 이렇게 넣으면 안됨
const Input = ({size='120px', ...props}) => {
  return (
    <input 
    style={{width : size}}
    className={styles.input} 
    {...props}/>
  )
}

export default Input