import React, { useEffect, useState } from 'react'
import PageTitle from '../common/PageTitle'
import Input from '../common/Input'
import Button from '../common/Button'
import styles from './BuyList.module.css'
import axios from 'axios'
import dayjs from 'dayjs'
import BuyListModal from './BuyListModal'

const BuyList = () => {
  //입력한 검색 조건 데이터를 저장할 state 변수  
  const [searchData, setSearchData] = useState({
    'orderNum' : '',
    'memId' : '',
    'fromDate' : '',
    'toDate' : ''
  });

  //검색 데이터를 입력할 때마다 실행하는 함수
  const handleSearchData = (e) => {
    setSearchData({
      ...searchData,
      [e.target.name] : e.target.value
    })
  }

  //조회한 구매 목록 데이터를 저장할 state 변수
  const [buyList, setBuyList] = useState([]);
  console.log(buyList);

  //조회한 구매 상세 정보를 저장할 state 변수
  const [detailList, setDetailList] = useState([])
  
  //구매 상세 내역 모달의 보이기 여부를 저장할 변수
  const [isOpen, setIsOpen] = useState(false)
  
  //마운트하면 조회한 목록 데이터 buyList 변수에 저장
  useEffect(() => {
    axios.get('/api/buys/buy-list-admin')
    .then(res => {
      // console.log(res.data);
      setBuyList(res.data);
    })
    .catch(e => console.log(e));
  }, [])

  //행 클릭 시 구매 상세 내역 조회 함수
  const getDetail = (orderNum) => {
    axios.get(`/api/buys/${orderNum}`)
    .then(res => {
      console.log(res.data);
      setDetailList(res.data)
    })
    .catch(e => console.log(e))
  }

  //검색 버튼 클릭 시 실행 함수
  const doSearch = () => {
    axios.get('/api/buys/buy-list-admin', {params : searchData})
    .then(res => setBuyList(res.data))
    .catch(e => console.log(e));
  }

  return (
    <div className={styles.container}>
      <div>
        <PageTitle title='구매 이력 조회'/>
      </div>
      <div className={styles.search}>
        <span>주문번호</span>
        <Input 
          size='100px' 
          name='orderNum' 
          value={searchData.orderNum} 
          onChange={e => handleSearchData(e)} 
        />
        <span>구매자 ID</span>
        <Input 
          size='100px' 
          name='memId' 
          value={searchData.memId} 
          onChange={e => handleSearchData(e)}
        />
        <span>구매일시</span>
        <div className={styles.date_div}>
          <Input 
            size='120px' 
            type='date' 
            name='fromDate' 
            value={searchData.fromDate} 
            onChange={e => handleSearchData(e)}
          />
          <span>-</span>
          <Input 
            size='120px' 
            type='date' 
            name='toDate' 
            value={searchData.toDate} 
            onChange={e => handleSearchData(e)} 
          />
        </div>
        <Button title='검색' size='10%' onClick={e => doSearch()}/>
      </div>
      <div className={styles.table}>
        <p>총 {buyList.length}건이 검색되었습니다</p>
        <table>
         <thead>
            <tr>
              <td>No</td>
              <td>주문번호</td>
              <td>구매상품</td>
              <td>구매자 ID</td>
              <td>결제금액</td>
              <td>구매일시</td>
            </tr>
         </thead>
         <tbody>
            {
              buyList.map((buy, i) => {
                return (
                  <tr key={i} onClick={e => {
                    //클릭한 행의 상세 내역 조회
                    getDetail(buy.orderNum);

                    //모달을 보이게 변경
                    setIsOpen(true);
                  }}>
                    <td>{buyList.length - i}</td>
                    <td>{buy.orderNum}</td>
                    <td>{buy.title}</td>
                    <td>{buy.memId}</td>
                    <td>{buy.price.toLocaleString() + '원'}</td>
                    <td>{dayjs(buy.buyDate).format('YYYY.MM.DD HH:mm')}</td>
                  </tr>
                )
              })
            }
         </tbody>
        </table>
      </div>
      {/* 구매 상세 내용 */}
      <BuyListModal 
        detailList={detailList}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  )
}

export default BuyList