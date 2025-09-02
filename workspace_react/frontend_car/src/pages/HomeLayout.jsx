import React from 'react'
import styles from './HomeLayout.module.css'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

const HomeLayout = () => {

  const nav = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <ul>
          <NavLink
            to={'/title'}
          >
            <li>홈</li>
          </NavLink>
          <NavLink
            to={'/car-manage'}
          >
            <li>차량관리</li>
          </NavLink>
          <NavLink
            to={'/reg-car-info'}
          >
            <li>판매정보등록</li>
          </NavLink>
          <NavLink
            to={'/sale-list'}
          >
            <li>판매목록조회</li>
          </NavLink>
        </ul>
      </div>
      <div className={styles.title}>
        <Outlet />
      </div>
    </div>
  )
}

export default HomeLayout