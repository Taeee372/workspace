import React from 'react'
import styles from './Menu.module.css'
import { NavLink, Outlet} from 'react-router-dom'

const Menu = () => {


  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <ul>
          <li className={styles.menu_li}>
            <NavLink
              to={'/'}
              className={({isActive}) => isActive ? styles.active : null}
            >
              홈
            </NavLink>
          </li>
          <li className={styles.menu_li}>
              <NavLink
                to={'/car-manage'}
                className={({isActive}) => isActive ? styles.active : null}
              >
                차량관리
              </NavLink>
          </li>
          <li className={styles.menu_li}>
              <NavLink
                to={'/reg-car-info'}
                className={({isActive}) => isActive ? styles.active : null}
              >
                판매정보등록
              </NavLink>
          </li>
          <li className={styles.menu_li}>
            <NavLink
              to={'/sale-list'}
              className={({isActive}) => isActive ? styles.active : null}
            >
              판매목록조회
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={styles.title}>
        <Outlet />
      </div>
    </div>
  )
}

export default Menu