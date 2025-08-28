import React from 'react'
import UserHeader from './UserHeader'
import styles from './PersonalLayout.module.css'
import AdminSideMenu from './AdminSideMenu'
import { Outlet } from 'react-router-dom'
import CartList from '../pages/CartList'

const PersonalLayout = () => {
  return (
     <div className={styles.container}>
      <div className={styles.header_div}>
        <UserHeader />
      </div>
      <div className={styles.main}>
        <div className={styles.side}>
          <AdminSideMenu />
        </div>
        <div className={styles.content}>
          <Outlet />  
        </div>
      </div>
    </div>
  )
}

export default PersonalLayout