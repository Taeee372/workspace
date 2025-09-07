import React from 'react'
import styles from './RegSaleInfo.module.css'
import Input from '../common/Input'
import Select from '../common/Select'

const RegSaleInfo = () => {
  return (
    <div>
      <div>
        <span>모델명</span>
        <Input />
        <span>색상</span>
        <Select>
          <option value="">선택</option>
          <option value="">화이트</option>
          <option value="">블랙</option>
          <option value="">레드</option>
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