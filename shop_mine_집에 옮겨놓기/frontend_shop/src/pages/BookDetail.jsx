import React, { useEffect, useState } from 'react'
import Input from '../common/Input'
import Button from '../common/Button'
import styles from './BookDetail.module.css'
import axios from 'axios'

const BookDetail = () => {

  //책 상세 정보 담을 변수
  const [book, setBook] = useState([]);

  //상세 정보 가져오기
  useEffect(() => {
    axios.get(`/api/books`)
    .then(res => setBook(res.data))
    .catch(e => console.log(e));
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div><img src="./무작정 따라가기 홍콩 마카오.jpg" /></div>
        <div>
          <p>책이름</p>
          <p>출판사</p>
          <p>가격</p>
          <Input type='number'/>
          <p>총 구매가격</p>
          <div>
            <Button title='장바구니' color='green'/>
            <Button title='구매하기' color='blue'/>
          </div>
        </div>
      </div>
      <div>
        <p>상품 설명</p>
        <div><img src="" />상세 이미지</div>
      </div>
    </div>
  )
}

export default BookDetail