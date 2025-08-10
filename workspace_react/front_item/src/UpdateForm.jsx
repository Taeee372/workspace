import React, { useEffect, useState } from 'react'
import styles from './UpdateForm.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateForm = () => {

  const nav = useNavigate();
  const {itemNum} = useParams();

  const [itemInfo, setItemInfo] = useState({});

  const [updateInfo, setUpdateInfo] = useState({
    'itemCategory' : '',
    'itemName' : '',
    'itemPrice' : '',
    'itemStatus' : '',
    'itemIntro' : ''
  });

  useEffect(() => {
    if(itemInfo.itemName !== undefined){
      setUpdateInfo({
        'itemCategory' : itemInfo.itemCategory,
        'itemName' : itemInfo.itemName,
        'itemPrice' : itemInfo.itemPrice,
        'itemStatus' : itemInfo.itemStatus,
        'itemIntro' : itemInfo.itemIntro
      })
    }
  }, [itemInfo])

  useEffect(() => {
    axios.get(`/api/items/${itemNum}`)
    .then(res => setItemInfo(res.data))
    .catch(error => console.log(error));
  }, [])

  const handleUpdateInfo = (e) => {
    setUpdateInfo({
      ...updateInfo,
      [e.target.name] : e.target.value
    })
  }

  const setInfo = () => {
    axios.put(`/api/items/${itemNum}`, updateInfo)
    .then(res => {
      alert('수정이 완료되었습니다');
      nav(-1);
    })
    .catch(error => console.log(error));
  }

  console.log(updateInfo);

  return (
    <div className={styles.container4}>
      <p>상품 카테고리</p>
      <select name='itemCategory' value={updateInfo.itemCategory} onChange={e => handleUpdateInfo(e)}>
        <option value="선택">선택</option>
        <option value="상의">상의</option>
        <option value="하의">하의</option>
        <option value="악세사리">악세사리</option>
      </select> <br />

      <div className={styles.item_name_div}>
        <p>상품명</p> 
        <input type="text" name='itemName' value={updateInfo.itemName} onChange={e => handleUpdateInfo(e)}/> <br />
      </div>

      <div className={styles.item_price_div}>
        <p>상품가격</p> 
        <input type="text" name='itemPrice' value={updateInfo.itemPrice} onChange={e => handleUpdateInfo(e)}/> <br />
      </div>

      <p>상품 상태</p> 
      <input type="radio" name='itemStatus' value={'상품준비중'} onChange={e => handleUpdateInfo(e)} checked={updateInfo.itemStatus === '상품준비중'}/> 준비 중

      <input type="radio" name='itemStatus' value={'판매중'} onChange={e => handleUpdateInfo(e)} checked={updateInfo.itemStatus === '판매중'}/> 판매 중

      <input type="radio" name='itemStatus' value={'매진'} onChange={e => handleUpdateInfo(e)} checked={updateInfo.itemStatus === '매진'}/> 매진 <br />
      
      <p>상품 소개</p>
      <textarea name='itemIntro' value={updateInfo.itemIntro} onChange={e => handleUpdateInfo(e)}></textarea> <br />

      <div className={styles.btn_div}>
        <button type='button' onClick={e => nav(-1)}>취소</button>
        <button type='button' onClick={e => setInfo()}>수정</button>
      </div>
    </div>
  )
}

export default UpdateForm