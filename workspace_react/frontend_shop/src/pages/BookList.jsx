import React, { useEffect, useState } from 'react'
import axios from 'axios'
import styles from './BookList.module.css'
import { useNavigate, useParams } from 'react-router-dom'

const BookList = () => {

  const nav = useNavigate();
  const {bookNum} = useParams();

  //책 정보 가져와서 저장
  const [bookInfo, setBookInfo] = useState([])

  //책 정보 불러오기
  useEffect(() => {
    axios.get('/api/books')
    .then(res => setBookInfo(res.data))
    .catch(e => console.log(e));
  }, [])
  console.log(bookInfo)

  return (
    <div className={styles.container}>
      {
        bookInfo.map((book, i) => {
          return (
           <div className={styles.book} key={i}>
              <div className={styles.img_div}>
                <img src="./무작정 따라가기 홍콩 마카오.jpg" />
              </div>
              <p onClick={e => {nav(`/book-detial/${bookNum}`)}}>{book.title}</p>
              <p>{'￦' + book.price.toLocaleString()}</p>
           </div>
          )
        })
      }
    </div>
  )
}

export default BookList