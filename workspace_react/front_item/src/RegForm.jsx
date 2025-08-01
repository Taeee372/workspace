import React, { useState } from 'react'
import styles from './RegForm.module.css'
import axios from 'axios'

const RegForm = () => {

  const [insertItem, setInsertItem] = useState({
    'itemCategory' : 'basic',
    'itemStatus' : 'ready',
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
    axios.post('/api/items', insertItem)
    .then(res => alert('등록완료'))
    .catch(error => console.log(error));
  }

  return (
    <div>
      <p>상품 카테고리</p>
      <select name='itemCategory' value={insertItem.select} onChange={e => handleCheck(e)}>
        <option value="basic">선택</option>
        <option value="top">상의</option>
        <option value="bottom">하의</option>
        <option value="accessory">악세사리</option>
      </select>
      <p>상품명</p>
      <input type="text" name='itemName' onChange={e => handleCheck(e)}/>
      <p>상품 가격</p>
      <input type="text" name='itmePrice' onChange={e => handleCheck(e)}/>
      <p>상품 상태</p>
      <input type="radio" name='itemStatus' value={'ready'} checked={insertItem.itemStatus === 'ready'} onChange={e => handleCheck(e)}/> 준비 중 
      <input type="radio" name='itemStatus' value={'sell'} checked={insertItem.itemStatus === 'sell'} onChange={e => handleCheck(e)}/> 판매 중
      <input type="radio" name='itemStatus' value={'soldout'} checked={insertItem.itemStatus === 'soldout'} onChange={e => handleCheck(e)}/> 매진
      <p>상품 소개</p>
      <textarea name='itemIntro' value={insertItem.itemIntro} onChange={e => handleCheck(e)}></textarea>
      <button type='button' onClick={e => postItem()}>등록</button>
    </div>
  )
}

export default RegForm