import React from 'react'
import styles from './RegSaleInfo.module.css'
import Input from '../common/Input'

const RegSaleInfo = () => {
  return (
    <div>
      <div>
        <span>모델명</span>
        <Input />
        <span>색상</span>
        <select>
          <option value="">선택</option>
          <option value="">화이트</option>
          <option value="">블랙</option>
          <option value="">레드</option>
        </select>
        <span>모델</span>
        <select>

        </select>
        <span>연락처</span>
        <Input />
      </div>
    </div>
  )
}

export default RegSaleInfo