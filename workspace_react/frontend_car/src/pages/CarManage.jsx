import React, { useEffect, useState } from 'react'
import styles from './CarManage.module.css'
import Input from '../common/Input'
import Button from '../common/Button'
import axios from 'axios'
import Select from '../common/Select'

const CarManage = () => {
  //등록한 차량을 담을 변수
  const [car, setCar] = useState({
    'modelName' : '',
    'price' : '',
    'brand' : ''
  })
  console.log(car)

  //조회한 차량을 저장할 변수
  const [carList, setCarList] = useState([])

  //차량 등록
  const regCar = () => {
    axios.post('/api/cars', car)
    .then(res => {
      alert('등.완');
      setCar({
        'modelName' : '',
        'price' : '',
        'brand' : ''
      })
    })
    .catch(e => console.log(e));
  }

  //차량 목록 조회
  useEffect(() => {
    axios.get('/api/cars')
    .then(res => {
      console.log(res.data);
      setCarList(res.data);
    })
    .catch(e => console.log(e))
  }, [])


  //input에 입력한 내용으로 변경
  const handleCar = (e) => {
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
        <Select name='brand' value={car.brand} onChange={e => handleCar(e)}>
          <option value="">선택</option>
          <option value="현대">현대</option>
          <option value="기아">기아</option>
        </Select>
        <span>모델명</span>
        <Input name='modelName' value={car.modelName} onChange={e => handleCar(e)} />
        <span>차량가격</span>
        <Input name='price' value={car.price} onChange={e => handleCar(e)} />
        <Button title='등록' onClick={e => regCar()}/>
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
            {
              carList.map((car, i) => {
                return (
                  <tr key={i}>
                    <td>{carList.length - i}</td>
                    <td>{car.modelNum}</td>
                    <td>{car.modelName}</td>
                    <td>{car.brand}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CarManage