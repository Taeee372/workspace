import React, { useEffect, useState } from 'react'
import styles from './CartList.module.css'
import Button from '../common/Button'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import dayjs from 'dayjs'
import Input from '../common/Input'

const CartList = () => {

  const nav = useNavigate();

 

  //장바구니 목록 저장할 state 변수
  const [cartList, setCartList] = useState([]);

  //바뀐 상품 수량 저장할 변수
  const [newCnt, setNewCnt] = useState('');

  //장바구니 목록 가져오기
  useEffect(() => {
    //장바구니 페이지에 들어왔는데, 만약 로그인 되어있지 않으면
    //강제로 상품 목록 페이지로 이동시키기
    const loginInfo = sessionStorage.getItem('loginInfo');

    if(loginInfo === null){
      alert('접근 권한이 없습니다.')
      nav('/')
      return ;
    }

    //JSON -> 객체 변환
    const memId = JSON.parse(loginInfo).memId
    axios.get(`/api/carts/${memId}`)
    .then(res => {
      setCartList(res.data)
      console.log(res.data)
    })
    .catch(e => console.log(e));
  }, [])

  // //장바구니 상품 삭제
  // const deleteBook = () => {
  //   // const cartNum = JSON.parse(loginInfo).cartNum
  //   axios.delete(`api/carts`)
  //   .then(res => alert('삭제'))
  //   .catch(e => console.log(e));
  // }

  return (
    <div className={styles.container}>
      <div className={styles.cart_list_table}>
        <table>
          <colgroup>
            <col width='3%'/>
            <col width='3%'/>
            <col width='*'/>
            <col width='10%'/>
            <col width='22%'/>
            <col width='10%'/>
            <col width='20%'/>
            <col width='7%'/>
          </colgroup>
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
              cartList.length === 0 
              ? 
              <tr>
                <td colSpan={8}>장바구니에 담은 도서가 없습니다.</td>
              </tr>
              : 
              cartList.map((cart, i) => {
                return (
                  <tr key={i}>
                    <td><input type="checkbox" name="" /></td>
                    <td>{cartList.length - i}</td>
                    <td>
                     <div className={styles.item_info}>
                        <div><img src="/엑셀실무_메인.pg.jpg" width={'50px'}/></div>
                        <div>{cart.bookDTO.title}</div>
                     </div>
                    </td>
                    <td>{cart.bookDTO.price.toLocaleString()}</td>
                    <td>
                      <div className={styles.cnt_div}>
                        <Input size='50%' type="number" value={cart.cartCnt} onChange={e => {}}/>
                        <Button title='수량 변경' color='green' size='50%'/>
                      </div>
                    </td>
                    <td>{cart.totalPrice.toLocaleString()}</td>
                    <td>{dayjs(cart.cartDate).format('YYYY-MM-DD HH:mm')}</td>
                    <td><Button title='삭제' color='gray' onClick={e => {}}/></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <div className={styles.buy_div}>
        <p>구매가격 (얼마)</p>
        <Button title='선택 구매'/>
      </div>
    </div>
  )
}

export default CartList