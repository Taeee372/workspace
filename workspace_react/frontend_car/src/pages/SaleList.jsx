import React from 'react'
import styles from './SaleList.module.css'

const SaleList = () => {
  return (
    <div>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <td rowSpan={2}>No</td>
              <td colSpan={4}>구매자 정보</td>
              <td colSpan={2}>차량 정보</td>
            </tr>
            <tr>
              <td>구매자명</td>
              <td>연락처</td>
              <td>구매일</td>
              <td>색상</td>
              <td>모델명</td>
              <td>가격</td>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SaleList