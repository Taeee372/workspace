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

  //선택한 체크박스 값을 저장할 state 변수
  //모든 체크박스가 선택된 채로 화면이 나오려면 조회한 모든 cartNum이 초기값으로 세팅되어야 함
  const [checkData, setCheckData] = useState([]); 

  console.log(checkData);

  //전체 구매가격
  let totalPrice = 0;
  for(const e of cartList){
    totalPrice = totalPrice + e.totalPrice
  }

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
      // console.log(res.data)
    
      //체크박스 초기값 세팅
      const arr = [];
      for(const e of res.data){
        arr.push(e.cartNum);
      }
      
      setCheckData(arr);
    })
    .catch(e => console.log(e));
  }, [])

  //체크박스 값 변경 시 실행 함수
  const handleCheckbox = (e) => {
    //체크가 됐다면...
    //cartNum을 숫자로 변환해서 저장  parseInt(문자열)
    if(e.target.checked){
      setCheckData([...checkData, parseInt(e.target.value)]);
    }

    //체크가 해제 됐다면...
    else{
      const result = checkData.filter((cartNum) => {return cartNum != e.target.value})
      setCheckData(result);
    }
  }


  return (
    <div className={styles.container}>
      <div className={styles.cart_list_table}>
        <table>
          <colgroup>
            <col width='4%'/>
            <col width='4%'/>
            <col width='*'/>
            <col width='10%'/>
            <col width='17%'/>
            <col width='10%'/>
            <col width='15%'/>
            <col width='10%'/>
          </colgroup>
          <thead>
            <tr>
              <td><input type="checkbox" /></td>
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
                    <td>
                      <input 
                        type="checkbox"
                        checked={checkData.includes(cart.cartNum)}
                        value={cart.cartNum}
                        onChange={e => handleCheckbox(e)}
                      />
                    </td>
                    <td>{cartList.length - i}</td>
                    <td>
                     <div className={styles.item_info}>
                        <div>
                          <img src={`http://localhost:8080/upload/${cart.bookDTO.imgList[0].attachedImgName}`} width={'50px'}/>
                        </div>
                        <div>{cart.bookDTO.title}</div>
                     </div>
                    </td>
                    <td>{cart.bookDTO.price.toLocaleString()}</td>
                    <td>
                      <div className={styles.cnt_div}>
                        <Input size='40%' type="number" value={cart.cartCnt} onChange={e => {setNewCnt(e.target.value)}}/>
                        <Button title='변경' color='green' size='40%'/>
                      </div>
                    </td>
                    <td>{cart.totalPrice.toLocaleString()}</td>
                    <td>{dayjs(cart.cartDate).format('YYYY-MM-DD HH:mm')}</td>
                    <td><Button size='100%' title='삭제' color='gray' onClick={e => {}}/></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
      <div className={styles.buy_div}>
        <p>구매가격 {totalPrice}</p>
        <Button title='선택 구매'/>
      </div>
    </div>
  )
}

export default CartList