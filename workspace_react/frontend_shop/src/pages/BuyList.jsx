import React, { useEffect, useState } from 'react'
import PageTitle from '../common/PageTitle'
import Input from '../common/Input'
import Button from '../common/Button'
import styles from './BuyList.module.css'
import axios from 'axios'
import dayjs from 'dayjs'

const BuyList = () => {
  //조회한 구매 목록 데이터를 저장할 state 변수
  const [buyList, setBuyList] = useState([]);
  console.log(buyList);
  
  //마운트하면 조회한 목록 데이터 buyList 변수에 저장
  useEffect(() => {
    axios.get('/api/buys/buy-list-admin')
    .then(res => {
      // console.log(res.data);
      setBuyList(res.data);
    })
    .catch(e => console.log(e));
  }, [])

  return (
    <div className={styles.container}>
      <div>
        <PageTitle title='구매 이력 조회'/>
      </div>
      <div className={styles.search}>
        <span>주문번호</span>
        <Input size='100px' />
        <span>구매자 ID</span>
        <Input size='100px' />
        <span>구매일시</span>
        <Input size='120px' type='date'/>-  
        <Input size='120px' type='date' />
        <Button title='검색' />
      </div>
      <div className={styles.table}>
        <p>총 {buyList.length}건이 검색되었습니다</p>
        <table>
         <thead>
            <tr>
              <td>No</td>
              <td>주문번호</td>
              <td>구매상품</td>
              <td>구매자 ID</td>
              <td>결제금액</td>
              <td>구매일시</td>
            </tr>
         </thead>
         <tbody>
            {
              buyList.map((e, i) => {
                return (
                  <tr key={i}>
                    <td>{buyList.length - i}</td>
                    <td>{e.orderNum}</td>
                    <td>{e.title}</td>
                    <td>{e.memId}</td>
                    <td>{e.price.toLocaleString() + '원'}</td>
                    <td>{dayjs(e.buyDate).format('YYYY.MM.DD HH:mm')}</td>
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

export default BuyList