import React, { useState } from 'react'
import styles from './RegForm.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const RegForm = () => {

  const nav = useNavigate();

  const [insertItem, setInsertItem] = useState({
    'itemCategory' : '선택',
    'itemStatus' : '상품준비중',
    'itemName' : '',
    'itemPrice' : '',
    'itemIntro' : ''
  })

  const handleCheck = (e) => {
    setInsertItem({
      ...insertItem,
      [e.target.name] : e.target.value
    })
  }

  console.log(insertItem)

  const postItem = () => {
    if(insertItem.itemCategory === '선택' || insertItem.itemStatus === '' 
       || insertItem.itemName === '' || insertItem.itemPrice === '' || insertItem.itemIntro === ''){
      alert('모든 정보를 입력하세요')
      return;
    }

    axios.post('/api/items', insertItem)
    .then(res => {
      alert('등록완료');
      nav('/')
    })
    .catch(error => console.log(error));
  }

  return (
    <div className={styles.container3}>
      <p>상품 카테고리</p>
      <select name='itemCategory' value={insertItem.select} onChange={e => handleCheck(e)}>
        <option value="선택">선택</option>
        <option value="상의">상의</option>
        <option value="하의">하의</option>
        <option value="악세사리">악세사리</option>
      </select>

      <div className={styles.item_name_div}>
        <p>상품명</p>
        <input type="text" name='itemName' onChange={e => handleCheck(e)}/>
      </div>

      <div className={styles.item_price_div}>
        <p>상품 가격</p>
        <input type="text" name='itemPrice' onChange={e => handleCheck(e)}/>
      </div>

      <p>상품 상태</p>
      <input type="radio" name='itemStatus' value={'상품준비중'} checked={insertItem.itemStatus === '상품준비중'} onChange={e => handleCheck(e)}/> 준비 중 
      <input type="radio" name='itemStatus' value={'판매중'} checked={insertItem.itemStatus === '판매중'} onChange={e => handleCheck(e)}/> 판매 중
      <input type="radio" name='itemStatus' value={'매진'} checked={insertItem.itemStatus === '매진'} onChange={e => handleCheck(e)}/> 매진

      <p>상품 소개</p>
      <textarea name='itemIntro' value={insertItem.itemIntro} onChange={e => handleCheck(e)}></textarea> <br />

      <button type='button' onClick={e => postItem()}>등록</button>
    </div>
  )
}

export default RegForm