import React, { useEffect, useState } from 'react'
import styles from './RegSaleInfo.module.css'
import Input from '../common/Input'
import Select from '../common/Select'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Button from '../common/Button'

const RegSaleInfo = () => {
  //연락처 유효성 검사
  const telRegex = /^010-\d{4}-\d{4}$/;

  const nav = useNavigate();

  //모델명 기존 데이터 가져오기 위한 변수
  const [modelName, setModelName] = useState([]);

  //필수 입력 에러메세지 저장
  const [errorMsg, setErrorMsg] = useState({
    'buyerName' : '',
    'color' : '',
    'modelNum' : ''
  });

  //등록할 판매 정보를 담을 변수
  const [saleInfo, setSaleInfo] = useState({
    'buyerName' : '',
    'color' : '',
    'modelNum' : '',
    'buyerTel' : ''
  });
  console.log(saleInfo)

  //모델명 불러오기
  useEffect(() => {
    axios.get('/api/cars')
    .then(res => {
      setModelName(res.data);
    })
    .catch(e => console.log(e));
  }, [])
 

  //판매 정보 등록
  const regSaleInfo = () => {
    if(saleInfo.buyerName === '' || saleInfo.color === '' || saleInfo.modelNum === ''){
      alert('필수정보 입력하셍요');
      return ;
    }
    axios.post('/api/sales', saleInfo)
    .then(res => {
      alert('등.완');
      nav('/sale-list');
    })
    .catch(e => console.log(e));
  }

  //input에 입력한 내용으로 saleInfo 정보 변경
  const handleSaleInfo = (e) => {
    setSaleInfo({
      ...saleInfo,
      [e.target.name] : e.target.value
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.sale_info_form}>
        <div className={styles.buyer_name_div}>
          <span>고객명</span>
          <Input name='buyerName' value={saleInfo.buyerName} 
                 onChange={e => {
                  handleSaleInfo(e);
                  setErrorMsg({
                    ...errorMsg,
                    'buyerName' : e.target.value === '' ? '고객명은 필수 입력입니다.' : ''
                  });
                }}  
          />
          <p className={styles.error}>{errorMsg.buyerName}</p>
        </div>
        
        <div className={styles.color_div}>
          <span>색상</span>
          <Select name='color' value={saleInfo.color} 
                  onChange={e => {
                    handleSaleInfo(e);
                    setErrorMsg({
                    ...errorMsg,
                    'color' : e.target.value === '' ? '색상 선택은 필수입니다.' : ''
                  });
                  }}
          >
            <option value="">선택</option>
            <option value="화이트">화이트</option>
            <option value="블랙">블랙</option>
            <option value="레드">레드</option>
          </Select>
          <p className={styles.error}>{errorMsg.color}</p>
        </div>
        <div className={styles.model_name_div}>
          <span>모델명</span>
          <Select name='modelNum' value={saleInfo.modelNum} 
                  onChange={e => {
                    handleSaleInfo(e);
                    setErrorMsg({
                    ...errorMsg,
                    'modelNum' : e.target.value === '' ? '모델명 선택은 필수입니다.' : ''
                  });
                  }}
          >  
            <option value="">선택</option>
            {   
              modelName.map((e, i) => {
                return(
                  <option key={i} value={e.modelNum}>{e.modelName}</option>
                )
              })
            }
          </Select>
          <p className={styles.error}>{errorMsg.modelNum}</p>
        </div>
        <div className={styles.buyer_tel_div}>
          <span>연락처</span>
          <Input name='buyerTel' value={saleInfo.buyerTel} 
                 onChange={e => {
                  handleSaleInfo(e);
                  setErrorMsg({
                    ...errorMsg,
                    'buyerTel' : !telRegex.test(e.target.value) 
                    ? 
                    '형식에 맞춰 입력해주세요.' 
                    : 
                    ''
                  })
                  
                }}
          />
          <p>예) 010-1234-5678</p>
          <p className={styles.error}>{errorMsg.buyerTel}</p>
        </div>
        <div><Button size='80px' title='등록' onClick={e => regSaleInfo()}/></div>
      </div>
    </div>
  )
}

export default RegSaleInfo