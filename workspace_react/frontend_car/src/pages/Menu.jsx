import React from 'react'
import styles from './Menu.module.css'
import { NavLink, Outlet} from 'react-router-dom'

const Menu = () => {


  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <ul>
          <NavLink
            to={'/home'}
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

export default Menu