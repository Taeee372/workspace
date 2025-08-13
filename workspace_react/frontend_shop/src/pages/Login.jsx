import React from 'react'
import styles from './Login.module.css'

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.id_div}>
        <input type="text" placeholder='Username'/> 
        <i class="bi bi-person-fill"></i>
      </div>
      <div className={styles.password_div}>
        <i class="bi bi-lock-fill"></i>
        <input type="password" placeholder='Password'/>
      </div>
      <div className={styles.btn_div}>
        <button type='button'>Sign In</button>
      </div>
    </div>
  )
}

export default Login