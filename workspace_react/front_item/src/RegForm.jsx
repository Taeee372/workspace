import React, { useState } from 'react'
import styles from './RegForm.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const RegForm = () => {

  const nav = useNavigate();

  const [insertItem, setInsertItem] = useState({
    'itemCategory' : '',
    'itemStatus' : '상품준비중',
    'itemName' : '',
    'itemPrice' : '',
    'itemIntro' : ''
  })

   //데이터베이스에 데이터 저장 시, 데이터가 올바른지 검사 -> 유효성 검사(validation 처리)

  //상품명 유효성 검사에 사용할 변수
  const [isNotValid, setIsNotValid] = useState({
    'itemCategory' : false,
    'itemName' : false,
    'itemPrice' : false
  })

  const handleCheck = (e) => {
    setInsertItem({
      ...insertItem,
      [e.target.name] : e.target.value
    })
  }

  console.log(insertItem)

  //등록 버튼 클릭 시 실행
  const postItem = () => {
    //유효성 검사 함수 호출
    //const result = checkValid(); 원래는 if(result)
    
    if(checkValid()){
      axios.post('/api/items', insertItem)
      .then(res => {
        alert('등록완료');
        nav('/')
      })
      .catch(error => console.log(error));
    }
  }

  //유효성 검사 함수
  const checkValid = () => {
    //유효성 검사 결과
    const isValid = true;

    //유효성 검사(상품명)
    if(insertItem.itemName === ''){
      setIsNotValid({
        ...isNotValid,
        'itemName' : true
      });
      isValid = false;
    }

    //유효성 검사(카테고리)
    if(insertItem.itemCategory === ''){
      setIsNotValid({
        ...isNotValid,
        'itemCategory' : true
      })
      isValid = false;
    }

    //유효성 검사(가격)
    if(insertItem.itemPrice === '' || insertItem.itemPrice < 0){
      setIsNotValid({
        ...isNotValid,
        'itemPrice' : true
      })
      isValid = false;
    }
    return isValid; //유효성 검사가 하나도 안 걸리면 true, 하나라도 걸리면 false 리턴
  }

  return (
    <div className={styles.container3}>
     <div>
      <p>상품 카테고리</p>
        <select name='itemCategory' value={insertItem.itemCategory} onChange={e => handleCheck(e)}>
          <option value="">선택</option>
          <option value="상의">상의</option>
          <option value="하의">하의</option>
          <option value="악세사리">악세사리</option>
        </select>
        {
          isNotValid.itemCategory &&
          <p className={styles.not_valid}>상품 카테고리를 선택하세요</p>
        }
     </div>
      <div>
        <p>상품명</p>
        <input type="text" name='itemName' onChange={e => handleCheck(e)}/>
        {/* 단락평가 : &&로 참 거짓 판단하는 거 */}
        { 
          isNotValid.itemName &&
          <p className={styles.not_valid}>상품명은 필수입력입니다</p>
        }
        
      </div>
      <div>
        <p>상품 가격</p>
        <input type="text" name='itemPrice' onChange={e => handleCheck(e)}/>
        {
          isNotValid.itemPrice &&
          <p className={styles.not_valid}>상품가격은 필수입력이며, 음수가 들어올 수 없습니다</p>
        }
        
      </div>
      <div>
        <p>상품 상태</p>
        <input type="radio" name='itemStatus' value={'상품준비중'} 
                checked={insertItem.itemStatus === '상품준비중'} onChange={e => handleCheck(e)}/> 준비 중 
  
        <input type="radio" name='itemStatus' value={'판매중'} 
                checked={insertItem.itemStatus === '판매중'} onChange={e => handleCheck(e)}/> 판매 중
  
        <input type="radio" name='itemStatus' value={'매진'}
                checked={insertItem.itemStatus === '매진'} onChange={e => handleCheck(e)}/> 매진
      </div>
      <div>
        <p>상품 소개</p>
        <textarea name='itemIntro' value={insertItem.itemIntro} onChange={e => handleCheck(e)}></textarea> <br />
      </div>
      <div className={styles.btn_div}>
        <button type='button' onClick={e => postItem()}>등록</button>
      </div>
    </div>
  )
}

export default RegForm