import axios from 'axios';
import React, { useState } from 'react'

const Form2 = () => {

  const [order, setOrder] = useState({
    'chicken' : '후라이드 치킨',
    'cnt' : '1',
    'addr' : '',
    'addrDetail' : '',
    'request' : ''
  });

  const handleorder = (e) => {
    setOrder({
      ...order,
      [e.target.name] : e.target.value
    })
  };

  const regOrder = () => {
     axios.post('/api/orders', order)
        .then()
        .catch(error => console.log(error));
  }

  console.log(order);

  return (
    <div>
      <h2>치킨!!!</h2>
      <h3>치킨 종류와 상관없이 무조건 만원!</h3>
      <input name='chicken' type="radio" value={'후라이드 치킨'} 
             checked={order.chicken === '후라이드 치킨'}
             onChange={e => handleorder(e)}/> 후라이드 치킨
      <input name='chicken' type="radio" value={'양념치킨'} 
             checked={order.chicken === '양념치킨'}
             onChange={e => handleorder(e)}/> 양념치킨
      <input name='chicken' type="radio" value={'간장치킨'} 
             checked={order.chicken === '간장치킨'}
             onChange={e => handleorder(e)}/> 간장치킨 <br />
      <input name='chicken' type="radio" value={'고추바사삭'} 
             checked={order.chicken === '고추바사삭'}
             onChange={e => handleorder(e)}/> 고추바사삭
      <input name='chicken' type="radio" value={'뿌링클'} 
             checked={order.chicken === '뿌링클'}
             onChange={e => handleorder(e)}/> 뿌링클
      <input name='chicken' type="radio" value={'매운핫치킨'} 
             checked={order.chicken === '매운핫치킨'}
             onChange={e => handleorder(e)}/> 매운핫치킨 <br />
      몇 마리 <input name='cnt' type="number" value={order.cnt} onChange={e => handleorder(e)}/>
      <h3>배달주소</h3>
      <select name='addr' value={order.addr} onChange={e => handleorder(e)}>
        <option value="">동을 선택하세요</option>
        <option value="삼산동">삼산동</option>
        <option value="달동">달동</option>
        <option value="신천동">신천동</option>
      </select>
      <h3>배달주소 상세</h3>
      <input type="text" name='addrDetail' value={order.addrDetail} onChange={e => handleorder(e)}/>
      <h3>요청사항</h3>
      <textarea cols={50} rows={4} name='request' value={order.request} onChange={e => handleorder(e)}></textarea> <br />
      <button type='button' onClick={(e) => regOrder(e)}>주문하러 가기</button>
    </div>
  )
}

export default Form2