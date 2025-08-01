import React, { useEffect, useState } from 'react'
import styles from './ItemList.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ItemList = () => {

  const nav = useNavigate();

  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    axios.get('/api/items')
    .then(res => {
      console.log(res.data);
      setItemList(res.data);
    })
    .catch(error => console.log(error));
  }, [])

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
                  <td>{items.itemPrice}</td>
                  <td>{items.itemStatus}</td>
                  <td>{items.regDate}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <p>총 등록 가격</p>
      <button type='button' onClick={e => nav('/reg')}>상품 등록</button>
    </div>
   </>
  )
}

export default ItemList