import React, { useEffect, useState } from 'react'
import styles from './RegSaleInfo.module.css'
import Input from '../common/Input'
import Select from '../common/Select'
import axios from 'axios'

const RegSaleInfo = () => {

  //등록할 판매 정보를 담을 변수
  const [saleInfo, setSaleInfo] = useState({
    'buyerName' : '',
    'color' : '',
    'modelNum' : '',
    'buyerTel' : ''
  })

 

  //판매 정보 등록
  const regSaleInfo = () => {
    axios.post('/api/sales', saleInfo)
    .then(res => alert('등.완'))
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
    <div>
      <div>
        <span>모델명</span>
        <Input />
        <span>색상</span>
        <Select>
          <option value="">선택</option>
          <option value="화이트">화이트</option>
          <option value="블랙">블랙</option>
          <option value="레드">레드</option>
        </Select>
        <span>모델</span>
        <Select>  

        </Select>
        <span>연락처</span>
        <Input />
      </div>
    </div>
  )
}

export default RegSaleInfo