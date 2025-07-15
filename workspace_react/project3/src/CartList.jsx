import React from 'react'
import './CartList.css'

//장바구니 목록
const CartList = () => {
  const cartList = [
    {
      category : '상의',
      itemName : '셔츠',
      itemPrice : 10000,
      cartCnt : 2
    }, 
    {
      category : '하의',
      itemName : '청바지',
      itemPrice : 15000,
      cartCnt : 1
    }, 
    {
      category : '신발',
      itemName : '로퍼',
      itemPrice : 20000,
      cartCnt : 2
    }, 
    {
      category : '상의',
      itemName : '맨투맨',
      itemPrice : 30000,
      cartCnt : 3
    }, 
    {
      category : '하의',
      itemName : '슬랙스',
      itemPrice : 15000,
      cartCnt : 1
    }
  ];  

  return (
    <div>
      <h1>CartList</h1>
      
      {/* 리액트에서는 thead, tbody 필수!!! */}
      <table>
        <thead>
        <tr>
          <td>NO</td>
          <td>카테고리</td>
          <td>상품명</td>
          <td>단가</td>
          <td>수량</td>
          <td>총가격</td>
        </tr>
       </thead>
       <tbody>
          {
            cartList.map((e, i) => {
              return (
                // 반복문을 쓸 때는 구분할 수 있게 중복되지 않는 값을 key에 넣어줘야 함 
                <tr key={i}>
                  <td>{i + 1}</td>
                  <td>{e.category}</td>
                  <td>{e.itemName}</td>
                  <td>{e.itemPrice}</td>
                  <td>{e.cartCnt}</td>
                  <td>{e.itemPrice * e.cartCnt}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </div>
  )
}

export default CartList