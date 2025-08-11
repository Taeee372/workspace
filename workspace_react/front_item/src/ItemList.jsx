import React, { useEffect, useState } from 'react'
import styles from './ItemList.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

const ItemList = () => {

  const nav = useNavigate();

  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    axios.get('/api/items')
    .then(res => {
      // console.log(res.data);
      setItemList(res.data);
    })
    .catch(error => console.log(error));
  }, [])

  //상품의 총 가격
  let totalPrice = 0;
  for(const e of itemList){
    totalPrice = totalPrice + e.itemPrice;
  }
  // console.log(totalPrice)

  return (
   <>
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>NO</td>
            <td>카테고리</td>
            <td>상품명</td>
            <td>가격</td>
            <td>상태</td>
            <td>등록일</td>
          </tr>
        </thead>
        <tbody>
          {
            itemList.map((items, i) => {
              return (
                <tr key={i} onClick={e => {nav(`/detail/${items.itemNum}`)}}>
                  <td>{itemList.length - i}</td>
                  <td>{items.itemCategory}</td>
                  <td>{items.itemName}</td>
                  <td>{'￦' + items.itemPrice.toLocaleString()}</td> 
                  {/* toLocaleString() : 천 단위 나타내줌 > 1,000  */}
                  <td>{items.itemStatus}</td>
                  <td>{dayjs(items.regDate).format('YYYY-MM-DD HH:mm:ss')}</td> 
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <div className={styles.total_price}>
        <span>총 등록 가격</span>
        <span>{'￦' + totalPrice.toLocaleString()}</span>
      </div>
      <div className={styles.btn_div}><button type='button' onClick={e => nav('/reg')}>상품 등록</button></div>
    </div>
   </>
  )
}

export default ItemList