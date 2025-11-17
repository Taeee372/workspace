import React from 'react'
import styles from './Header.module.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const nav = useNavigate();

  return (
    <div className={styles.header_container}>
      <div onClick={() => nav('/join')}>회원가입</div>
      <div onClick={() => nav('/login')}>로그인</div>
    </div>
  )
}

export default Header