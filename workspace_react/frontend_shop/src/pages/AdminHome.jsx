import React from 'react'
import styles from './AdminHome.module.css'

const AdminHome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.first_row}>
        <div>오늘의 매출</div>
        <div>전체 매출</div>
        <div>오늘의 방문자 수</div>
        <div>이번 달 방문자 수</div>
      </div>
      <div className={styles.second_row}>
        최근 10일간 매출 차트(꺾은 선 그래프)
      </div>
    </div>
  )
}

export default AdminHome