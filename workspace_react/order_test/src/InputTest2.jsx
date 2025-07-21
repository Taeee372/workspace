import axios from 'axios';
import React, { useState } from 'react'

//상품명, 상품가격, 수량을 입력할 수 있는 input 태그 생성
const InputTest2 = () => {

  // const [itemName, setItemName] = useState('');
  // const [price, setPrice] = useState('');
  // const [cnt, setCnt] = useState('');
  // 얘네를 하나로 줄이면 밑 const

  //input 태그에 입력한 내용을 저장할 state 변수
  const [orderInfo, setOrderInfo] = useState({
    'itemName' : '',
    'price' : 0, 
    'cnt' : 1
  });
  //수량은 통상적으로 1이 기본값으로 들어가있으니까 '' 대신에 1
  //무조건 ''(빈 문자) 넣는 게 아니라 상황에 따라서 바꾸기 가능

  //잘 드갔는지 확인
  console.log(orderInfo);

  
  //함수는 return문 전에 적는다
  const regOrder = () => {
    axios.post('/api/orders', orderInfo)
    .then(res => console.log(res.data))
    .catch(error => console.log(error));
  }

  return (
    <div>
      <div>
        상품명 : <input value={orderInfo.itemName} type="text" onChange={e => {
          orderInfo.itemName = e.target.value;
          setOrderInfo({
            ...orderInfo, 
            'itemName' : e.target.value
          });
        }} /> <br />
        상품가격 : <input value={orderInfo.price} type="text" onChange={e => {
          setOrderInfo({
            ...orderInfo,
            'price' : e.target.value
          })
        }} /> <br />
        수량 : <input value={orderInfo.cnt} type="number" onChange={e => {
           setOrderInfo({
            ...orderInfo,
            'cnt' : e.target.value
          })
        }} /> <br />
        <button type='button' onClick={e => regOrder()}>등록</button>
      </div>
    </div>
  )
}

export default InputTest2