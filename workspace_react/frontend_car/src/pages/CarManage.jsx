import React, { useState } from 'react'
import styles from './CarManage.module.css'
import Input from '../common/Input'
import Button from '../common/Button'
import axios from 'axios'

const CarManage = () => {
  //등록한 차량을 담을 state 변수
  const [car, setCar] = useState({
    'modelName' : '',
    'price' : '',
    'brand' : ''
  })

  //차량 등록
  const regCar = () => {
    axios.post('/api/cars', {})
    .then(res => alert('등.완'))
    .catch(e => console.log(e));
  }

  //input에 입력한 내용으로 변경
  const handleCar = () => {
    setCar({
      ...car,
      [e.target.name] : e.target.value
    })
  }

  return (
    <div>
      <p>차량 등록</p>
      <div>
        <span>제조사</span>
        <select>
          <option value="">선택</option>
          <option value="현대">현대</option>
          <option value="기아">기아</option>
        </select>
        <span>모델명</span>
        <Input />
        <span>차량가격</span>
        <Input />
        <Button />
      </div>
      <div>
        <p>등록된 차량 목록</p>
        <table>
          <thead>
            <tr>
              <td>No</td>
              <td>모델번호</td>
              <td>모델명</td>
              <td>제조사</td>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CarManage