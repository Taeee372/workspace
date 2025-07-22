import React, { useState } from 'react'

//구매 정보 데이터를 입력받은 input 태그를 만들고, 해당 인풋태그에 입력한 정보를
//buyInfo 변수에 저장시켜보세요.
//입력 받는 구매 정보로는 상품명, 수량, 가격, 구매자명이 있다.
//이때, 수량의 초기값은 1, 가격의 초기값은 0으로 지정
//수량 input 태그의 type은 number로 지정

const InputTest5 = () => {

  const [buy, setBuy] = useState({
    'itemName' : '',
    'cnt' : 1,
    'price' : 0,
    'buyer' : ''
  });

  console.log(buy);

  const buyInfo = (e) => {
     setBuy({
      ...buy,
      [e.target.name] : e.target.value
    })
  }

  return (
    <div>
      상품명 <input name='itemName' type="text" value={buy.itemName} onChange={e => buyInfo(e)} /> <br />
      수량 <input name='cnt' type="number" value={buy.cnt} onChange={e => buyInfo(e)} /> <br />
      가격 <input name='price' type="text" value={buy.price} onChange={e => buyInfo(e)} /> <br />
      구매자명 <input name='buyer' type="text" value={buy.buyer} onChange={e => buyInfo(e)} /> <br />
    </div>
  )
}

export default InputTest5