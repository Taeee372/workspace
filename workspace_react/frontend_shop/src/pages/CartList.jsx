import React, { useEffect, useState } from 'react'
import styles from './CartList.module.css'
import Button from '../common/Button'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import dayjs from 'dayjs'

const CartList = () => {

  const {memId} = useParams();
  // console.log(memId)

  //장바구니 목록 저장할 state 변수
  const [cartList, setCartList] = useState([]);

  //바뀐 상품 수량 저장할 변수
  const [newCnt, setNewCnt] = useState('');

  //장바구니 목록 가져오기
  useEffect(() => {
    axios.get(`/api/carts/${memId}`)
    .then(res => {
      setCartList(res.data)
      console.log(res.data)
    })
    .catch(e => console.log(e));
  }, [])

  //장바구니 상품 삭제
  const deleteBook = () => {
    axios.delete(`api/carts/`)
    .then(res => alert('삭제'))
    .catch(e => console.log(e));
  }

  return (
    <div className={styles.container}>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <td><input type="checkbox" name="" /></td>
              <td>No</td>
              <td>상품정보</td>
              <td>가격</td>
              <td>수량</td>
              <td>총 가격</td>
              <td>등록일</td>
              <td>삭제</td>
            </tr>
          </thead>
          <tbody>
            {
              cartList.map((e, i) => {
                return (
                  <tr key={i}>
                    <td><input type="checkbox" name="" /></td>
                    <td>{cartList.length - i}</td>
                    <td>
                     <div className={styles.img_div}>
                        <div><img src="/엑셀실무_메인.pg.jpg" /></div>
                        <div>{e.bookDTO.title}</div>
                     </div>
                    </td>
                    <td>{e.bookDTO.price}</td>
                    <td>
                      <div className={styles.cnt_div}>
                        <input type="number" value={e.cartCnt} onChange={e => {}}/>
                        <Button title='수량 변경' color='green'/>
                      </div>
                    </td>
                    <td>{e.totalPrice}</td>
                    <td>{dayjs(e.cartDate).format('YYYY-MM-DD HH:mm')}</td>
                    <td><Button title='삭제' color='gray' onClick={e => {}}/></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <div className={styles.buy}>
        <p>구매가격 (얼마)</p>
        <Button title='선택 구매'/>
      </div>
    </div>
  )
}

export default CartList