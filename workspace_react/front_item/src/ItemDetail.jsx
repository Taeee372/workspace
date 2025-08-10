import React, { useEffect, useState } from 'react'
import styles from './ItemDetail.module.css'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const ItemDetail = () => {

  const [itemDetail, setItemDetail] = useState({});

  const nav = useNavigate();

  const {itemNum} = useParams();

  console.log(itemNum);useEffect(() => {
    axios.get(`/api/items/${itemNum}`)
    .then(res => {
      console.log(res.data)
      setItemDetail(res.data)
    })
    .catch(error => console.log(error));
  }, [])

  const deleteItem = () => {
    const result = confirm('정말 삭제할까요?')
    // console.log(result)
    if(result){
      axios.delete(`/api/items/${itemNum}`)
      .then(res => nav('/'))
      .catch(error => console.log(error));
    }
  }

  return (
    <div className={styles.container2}>
      <table className={styles.table}>
        <colgroup>
          <col width='20%'/> 
          <col width='25%'/> 
          <col width='20%'/> 
          <col width='*'/> 
        </colgroup>
        <tbody>
          <tr>
            <td>상품번호</td>
            <td>{itemDetail.itemNum}</td>
            <td>카테고리</td>
            <td>{itemDetail.itemCategory}</td>
          </tr>
          <tr>
            <td>상품명</td>
            <td>{itemDetail.itemName}</td>
            <td>가격</td>
            <td>{itemDetail.itemPrice}</td>
          </tr>
          <tr>
            <td>상태</td>
            <td>{itemDetail.itemStatus}</td>
            <td>등록일</td>
            <td>{itemDetail.regDate}</td>
          </tr>
          <tr>
            <td>상품 소개</td>
            <td colSpan={3}>{itemDetail.itemIntro}</td>
          </tr>
        </tbody>
      </table>
     <div className={styles.btn_div}>
        <button type='button' onClick={e => nav('/')}>목록가기</button>
        <button type='button' onClick={e => nav(`/update/${itemNum}`)}>수정</button>
        <button type='button' onClick={e => deleteItem()}>삭제</button>
     </div>
    </div>
  )
}

export default ItemDetail