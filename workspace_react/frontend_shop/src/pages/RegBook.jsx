import React, { useEffect, useState } from 'react'
import styles from './RegBook.module.css'
import Button from '../common/Button'
import Select from '../common/Select'
import Input from '../common/Input'
import axios from 'axios'
import PageTitle from '../common/PageTitle'
import Textarea from '../common/Textarea'


const RegBook = () => {


  //유효성 검사 결과 에러 메시지를 저장하고 있는 state 변수
  const [errorMsg, setErrorMsg] = useState({
    'cateNum' : '',
    'title' : '',
    'price' : '',
    'publisher' : ''
  });

  //등록 버튼 활성화 여부를 저장할 state 변수
  const [isDisabled, setIsDisabled] = useState(true);  

  //조회된 카테고리 목록을 저장할 state 변수
  const [cateList, setCateList] = useState([]);
  
  //입력받은 정보를 저장할 state 변수
  const [bookData, setBookData] = useState({
    'cateNum':'',
    'title' : '',
    'publisher' : '',
    'price' : '',
    'bookIntro' : ''
  });
  console.log(bookData.price.toLocaleString())

  //값 입력 시 실행 함수
  const handleBookData = (e) => {
    //만약 가격 데이터가 들어왔다면 천단위 구분기호를 제외한다.
    setBookData({
      ...bookData,
      [e.target.name] : e.target.name === 'price' 
                        ?               
                        e.target.value.replaceAll(',' , '') 
                        :
                        e.target.value
    })
  }

  //마운트되면 카테고리 목록을 조회해서 cateList 변수에 저장
  useEffect(() => {
    axios.get('/api/categories')
    .then(res => setCateList(res.data))
    .catch(e => console.log(e));
  }, []);

  //마운트되거나, bookData가 변경되어 리렌더링되면 버튼 활성화 여부 변경
  useEffect(() => {
    //버튼 활성화 여부를 판단하여 disable 변경
    if(bookData.cateNum !== '' && 
        bookData.title !== '' &&
        bookData.publisher !== '' &&
        bookData.price !== ''){
      setIsDisabled(false);    
    }
    else{
      setIsDisabled(true);    
    }
  }, [bookData]);

  //도서 등록 함수
  const regBook = () => {
    axios.post('/api/books', bookData)
    .then(res => {
      alert('등록 성공');
      setBookData({
        'cateNum':'',
        'title' : '',
        'publisher' : '',
        'price' : '',
        'bookIntro' : ''
      });
    })
    .catch(e => console.log(e));
  }

  console.log(bookData);

  return (
    <div className={styles.container}>
      <PageTitle title="도서 등록" />
      <div className={styles.content}>
        <div>
          <p>도서 카테고리</p>
          <Select
            size="100%"
            name='cateNum'
            value={bookData.cateNum}
            onChange={e => {
              handleBookData(e)

              setErrorMsg({
                ...errorMsg,
                'cateNum' : e.target.value === '' ? '카테고리를 선택하세요' : ''
              })
            }}
          >
            <option value=''>카테고리 선택</option>
            {
              cateList.map((e, i) => {
                return (
                  <option key={i} value={e.cateNum}>
                    {e.cateName}
                  </option>
                )
              })
            }
          </Select>
          <p>{errorMsg.cateNum}</p>
        </div>
        <div>
          <p>도서명</p>
          <Input 
            size="100%"
            name='title'
            value={bookData.title}
            onChange={e => {
              handleBookData(e)

              setErrorMsg({
                ...errorMsg,
                'title' : e.target.value === '' ? '도서명은 필수입력입니다' : ''
              })
              
            }}
          />
          <p>{errorMsg.title}</p>
        </div>
        <div>
          <p>출판사</p>
          <Input 
            size="100%"
            name='publisher'
            value={bookData.publisher}
            onChange={e => {
              handleBookData(e)

              setErrorMsg({
                ...errorMsg,
                'publisher' : e.target.value === '' ? '출판사는 필수입력입니다' : ''
              })
            }}
          />
          <p>{errorMsg.publisher}</p>
        </div>
        <div>
          <p>가 격</p>
          <Input 
            size="100%"
            name='price'
            value={
              bookData.price === '' 
              ? 
              bookData.price 
              : 
              parseInt(bookData.price).toLocaleString()
            }
            onChange={e => {
              handleBookData(e)
            
              setErrorMsg({
                ...errorMsg,
                'price' : e.target.value === '' ? '가격은 필수입력입니다' : ''
              })
            }}
          />
          <p>{errorMsg.price}</p>
        </div>
        <div>
          <p>도서 설명</p>
          <Textarea
            size='100%'
            height='80px' 
            name='bookIntro'
            value={bookData.bookIntro}
            onChange={e => handleBookData(e)}
          />
        </div>
        <div style={{'textAlign':'right'}}>
          <Button 
            title='등 록' 
            onClick={e => regBook()}
            disabled={isDisabled}
          />
        </div>
      </div>
    </div>
  )
}

export default RegBook