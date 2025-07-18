import React from 'react'
import './OrderList.css'

const OrderDetail = (props) => {
  return (
    <>
      <div className='container'>
        <table>
          <colgroup>
            <col width='23%'/>
            <col width='20%'/>
            <col width='23%'/>
            <col width='*'/>
          </colgroup>
          <tbody>
            <tr>
              <td>상품번호</td>
              <td>{props.selectOrder.itemNum}</td>
              <td>상품명</td>
              <td>{props.selectOrder.itemName}</td>
            </tr> 
            <tr>
              <td>가격</td>
              <td>{props.selectOrder.price}</td>
              <td>수량</td>
              <td>{props.selectOrder.cnt}</td>
            </tr> 
            <tr>
              <td>주문자ID</td>
              <td>{props.selectOrder.orderID}</td>
              <td>구매금액</td>
              <td>{props.selectOrder.price * props.selectOrder.cnt}</td>
            </tr> 
          </tbody>
        </table>
      </div>
    </>
  )
}

export default OrderDetail