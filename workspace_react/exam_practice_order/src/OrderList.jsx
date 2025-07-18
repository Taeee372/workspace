import React from 'react'
import './OrderList.css'

const OrderList = (props) => {

  return (
    <>
    <div className='container'>
      <table>
        <thead>
          <tr>
            <td>NO</td>
            <td>상품명</td>
            <td>상품가격</td>
            <td>수량</td>
            <td>총구매가격</td>
          </tr>
        </thead>
        <tbody>
          {
            props.orderList.map((e, i) => {
              return (
                <tr key={i} onClick={() => {
                  props.setSelectOrder(e);
                  props.setIsShow(true);
                }}>
                  <td>{props.orderList.length - i}</td>
                  <td>{e.itemName}</td>
                  <td>{e.price}</td>
                  <td>{e.cnt}</td>
                  <td>{e.price * e.cnt}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
    </>
  )
}

export default OrderList