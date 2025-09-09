import React, { useEffect, useState } from 'react'
import styles from './CarManage.module.css'
import Input from '../common/Input'
import Button from '../common/Button'
import axios from 'axios'
import Select from '../common/Select'

const CarManage = () => {
  //가격 유효성 검사 (숫자만 가능)
  const priceRegex = /^[0-9]+$/;

  //필수 입력 에러메세지 저장할 변수
  const [errorMsg, setErrorMsg] = useState({
    'modelName' : '',
    'price' : '',
    'brand' : ''
  })


  //등록 차량을 저장할 변수
  const [car, setCar] = useState({
    'modelName' : '',
    'price' : '',
    'brand' : ''
  })
  console.log(car)

  //조회한 차량을 저장할 변수
  const [carList, setCarList] = useState([])

  //차량 등록 함수
  const regCar = () => {
    if(car.modelName === '' || car.price === '', car.brand === ''){
      alert('모든 입력사항은 필수입니다.')
      return ;
    }

    axios.post('/api/cars', car)
    .then(res => {
      alert('등.완');
      setCar({
        'modelName' : '',
        'price' : '',
        'brand' : ''
      });
      getCarList();
    })
    .catch(e => console.log(e));
  }

  //차량 목록 조회 함수
  const getCarList = () => {
    axios.get('/api/cars')
    .then(res => {
      console.log(res.data);
      setCarList(res.data);
    })
    .catch(e => console.log(e))
  }

  //차량 목록 조회
  useEffect(() => {
    getCarList();
  }, [])


  //input에 입력한 내용으로 변경
  const handleCar = (e) => {
    setCar({
      ...car,
      [e.target.name] : e.target.value
    })
  }

  return (
    <div className={styles.container}>
      <p>차량 등록</p>
      <div className={styles.reg_form_div}>
        <div>
          <span>제조사</span>
          <Select size='100px' name='brand' value={car.brand} 
                  onChange={e => {
                    handleCar(e);
                    setErrorMsg({
                      ...errorMsg,
                      'brand' : e.target.value === '' ? '제조사 선택은 필수입니다.' : ''
                    });
                  }}
          >
            <option value="">선택</option>
            <option value="현대">현대</option>
            <option value="기아">기아</option>
          </Select>
          <p>{errorMsg.brand}</p>
        </div>
        <div>
          <span>모델명</span>
          <Input size='100px' name='modelName' value={car.modelName} 
                 onChange={e => {
                  handleCar(e);
                  setErrorMsg({
                  ...errorMsg,
                  'modelName' : e.target.value === '' ? '모델명은 필수입력입니다.' : ''
                   });
                }} 
          />
          <p>{errorMsg.modelName}</p>
        </div>
        <div>
          <span>차량가격</span>
          <Input pattern='[0-9]*' size='100px' name='price' value={car.price} 
                 onChange={e => {
                  handleCar(e);
                  if(e.target.value === ''){
                    setErrorMsg({
                      ...errorMsg,
                      'price' : '가격 입력은 필수입니다.'
                    })
                  }
                  else if(!priceRegex.test(e.target.value)){
                    setErrorMsg({
                      ...errorMsg,
                      'price' : '가격 입력은 숫자만 가능합니다.'
                    })
                  }
                  else{
                    setErrorMsg({
                      ...errorMsg,
                      'price' : ''
                    })
                  }
                }} 
          />
          <p>{errorMsg.price}</p>
        </div>
      </div>
        <Button title='등록' onClick={e => regCar()}/>
      <div className={styles.table}>
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