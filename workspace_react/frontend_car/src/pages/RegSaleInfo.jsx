import React from 'react'
import styles from './RegSaleInfo.module.css'
import Input from '../common/Input'
import Select from '../common/Select'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Button from '../common/Button'

const RegSaleInfo = () => {

  const nav = useNavigate();

  //모델명 기존 데이터 가져오기 위한 변수
  const [modelName, setModelName] = useState([])

  //등록할 판매 정보를 담을 변수
  const [saleInfo, setSaleInfo] = useState({
    'buyerName' : '',
    'color' : '',
    'modelNum' : '',
    'buyerTel' : ''
  })
  console.log(saleInfo)

  //모델명 불러오기
  useEffect(() => {
    axios.get('/api/cars')
    .then(res => {
      setModelName(res.data)
    })
    .catch(e => console.log(e));
  }, [])
 

  //판매 정보 등록
  const regSaleInfo = () => {
    axios.post('/api/sales', saleInfo)
    .then(res => {
      alert('등.완')
      nav('/sale-list')
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
    <div>
      <div>
        <span>고객명</span>
        <Input name='buyerName' value={saleInfo.buyerName} onChange={e => handleSaleInfo(e)}/>
        <span>색상</span>
        <Select name='color' value={saleInfo.color} onChange={e => handleSaleInfo(e)}>
          <option value="">선택</option>
          <option value="">화이트</option>
          <option value="">블랙</option>
          <option value="">레드</option>
        </Select>
        <span>모델</span>
    
        <Select name='modelNum' value={saleInfo.modelNum} onChange={e => handleSaleInfo(e)}>  
          <option value="">선택</option>
          {                                                                                                                  
            modelName.map((e, i) => {
              return(
                <option key={i} value={e.modelNum}>{e.modelName}</option>
              )
            })
          }
        </Select>
        <span>연락처</span>
        <Input name='buyerTel' value={saleInfo.buyerTel} onChange={e => handleSaleInfo(e)}/>
        <Button title='등록' onClick={e => regSaleInfo()}/>
      </div>
    </div>
  )
}

export default RegSaleInfo