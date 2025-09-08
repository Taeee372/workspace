import React, { useEffect, useState } from 'react'
import styles from './SaleList.module.css'
import axios from 'axios'
import dayjs from 'dayjs'

const SaleList = () => {

  //판매 목록 저장할 변수
  const [saleList, setSaleList] = useState([])

  //판매 목록 불러오기
  useEffect(() => {
    axios.get('/api/sales')
    .then(res => {
      console.log(res.data)
      setSaleList(res.data)
    })
    .catch(e => console.log(e));
  }, [])

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
            {
              saleList.map((e, i) => {
                return (
                  <tr key={i}>
                    <td>{saleList.length - i}</td>
                    <td>{e.buyerName}</td>
                    <td>{e.buyerTel}</td>
                    <td>{dayjs(e.saleDate).format('YYYY.MM.DD HH:mm') }</td>
                    <td>{e.color}</td>
                    <td>{e.carDTO.modelName}</td>
                    <td>{e.carDTO.price.toLocaleString() + '원'}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SaleList