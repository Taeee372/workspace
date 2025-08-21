import React, { useEffect, useState } from 'react'
import styles from './BoardDetail.module.css'
import Input from '../common/Input'
import Button from '../common/Button'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const BoardDetail = () => {
  const {bookNum} = useParams(); // {bookNum : 3}

  //조회한 상세 정보를 저장할 state 변수
  const [bookDetail, setBookDetail] = useState({});

  //상품 수량을 저장할 state 변수
  const [cnt, setCnt] = useState(1);

  //마운트되면 도서 상세 조회 및 조회된 데이터를 bookDetail 변수에 저장
  useEffect(() => {
    axios.get(`/api/books/${bookNum}`)
    .then(res => setBookDetail(res.data))
    .catch(e => console.log(e));
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.main}>
          <div>
            <img src="/엑셀실무_메인.pg.jpg" />
          </div>
          <div>
            <p>{bookDetail.title}</p>
            <p>{bookDetail.publisher}</p>
            <p>{bookDetail.price && bookDetail.price.toLocaleString()}</p>
            <Input type="number" value={cnt} min='1' 
                   onChange={e => {
                    setCnt(e.target.value)
                   }}/>
            <p>{bookDetail.price && (bookDetail.price * cnt).toLocaleString()}</p>
            <div className={styles.btn_div}>
              <Button title='장바구니' color='green' size='50%'/>
              <Button title='구매하기' size='50%'/>
            </div>
          </div>
        </div>
        <div className={styles.intro_div}>
          {bookDetail.bookIntro}
        </div>
      </div>
      <div className={styles.img_div}>
        <img src="/엑셀실무_상세1.jpg" />
      </div>
    </div>
  )
}

export default BoardDetail