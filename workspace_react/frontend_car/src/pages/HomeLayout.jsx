import React from 'react'
import styles from './HomeLayout.module.css'
import { Outlet, useNavigate } from 'react-router-dom'

const HomeLayout = () => {

  const nav = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <ul>
          <li onClick={e => nav('/title')}>홈</li>
          <li onClick={e => nav('/car-manage')}>차량관리</li>
          <li onClick={e => nav('/reg-car-info')}>판매정보등록</li>
          <li onClick={e => nav('/sale-list')}>판매목록조회</li>
        </ul>
      </div>
      <div className={styles.title}>
        <Outlet />
      </div>
    </div>
  )
}

export default HomeLayout