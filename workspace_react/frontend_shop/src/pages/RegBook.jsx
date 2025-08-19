import React, { useEffect, useState } from 'react'
import Select from '../common/Select'
import Input from '../common/Input'
import Button from '../common/Button'
import axios from 'axios'
import { handleErrorMsg } from '../validate/regBookValidate'

//카테고리, 도서명, 출판사, 가격 - 필수입력 유효성 검사
//카테고리, 도서명, 출판사, 가격 중 하나라도 입력하지 않았다면 등록 버튼 disabled 처리

const RegBook = () => {
//조회한 카테고리 가져올 변수
const [category, setCategory] = useState([])
// console.log(category)

//도서 등륵할 변수
const [bookInfo, setBookInfo] = useState({
  'cateNum' : '',
  'title' : '',
  'publisher' : '',
  'price' : '',
  'bookIntro' : ''
})

//유효성 검사 메세지
const [errorMsg, setErrorMsg] = useState({
  'category' : '',
  'title' : '',
  'publisher' : '',
  'price' : ''
})

//카테고리 조회
useEffect(() => {
  axios.get('/api/categories')
  .then(res => {
    // console.log(res.data)
    setCategory(res.data)
  })
  .catch(e => console.log(e));
}, [])

//도서 등록
const regBook = () => {
  axios.post('/api/books', bookInfo)
  .then(res => {
    alert('등록 완료')
    setBookInfo({
      'cateNum' : '',
      'title' : '',
      'publisher' : '',
      'price' : '',
      'bookIntro' : ''
    })
  })
  .catch(e => console.log(e));
}

const handleBookInfo = (e) => {
  setBookInfo({
    ...bookInfo,
    [e.target.name] : e.target.value
  })
}

console.log(bookInfo)

  return (
    <div>
      <h3>도서 등록</h3>
      <div>
        <p>도서 카테고리</p>
        <Select name='cateNum' value={bookInfo.cateNum} 
                onChange={e => {
                  handleBookInfo(e)
                  setErrorMsg({
                    ...errorMsg,
                    'category' : handleErrorMsg(e)
                  })
                }}
        >
          <option value=''>전체</option>
          {
            category.map((category, i) => {
              return(
                <option key={i}value={category.cateNum}>{category.cateName}</option>
              )
            })
          }
        </Select>
        <p>{errorMsg.category}</p>
      </div>
      <div>
        <p>도서명</p>
        <Input name='title' value={bookInfo.title} 
               onChange={e => {
                handleBookInfo(e)
                setErrorMsg({
                  ...errorMsg,
                  'title' : handleErrorMsg(e)
                })
              }}
        />
        <p>{errorMsg.title}</p>
      </div>
      <div>
        <p>출판사</p>
        <Input name='publisher' value={bookInfo.publisher} 
               onChange={e => {
                handleBookInfo(e)
                setErrorMsg({
                  ...errorMsg,
                  'publisher' : handleErrorMsg(e)
                })
              }}
        />
        <p>{errorMsg.publisher}</p>
      </div>
      <div>
        <p>가격</p>
        <Input name='price' value={bookInfo.price} 
               onChange={e => {
                handleBookInfo(e)
                setErrorMsg({
                  ...errorMsg,
                  'price' : handleErrorMsg(e)
                })
              }}
        />
        <p>{errorMsg.price}</p>
      </div>
      <div>
        <p>도서 설명</p>
        <textarea name='bookIntro' value={bookInfo.bookIntro} 
                  onChange={e => {
                    handleBookInfo(e)
                  }}
        ></textarea>
        <p>{errorMsg.bookIntro}</p>
      </div>
      <Button title='등 록' onClick={e => regBook()}/>
    </div>
  )
}

export default RegBook