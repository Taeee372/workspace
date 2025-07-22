import React from 'react'
import './BookDetail.css'

const BookDetail = ({selectBook}) => {
  return (
    <>
      <div className='container2'>
        <h3>도서 상세 정보</h3>
        <table>
          <colgroup>
            <col width='24%'/>
            <col width='24%'/>
            <col width='24%'/>
            <col width='*'/>
          </colgroup>
          <tbody>
            <tr>
              <td>도서번호</td>
              <td>{selectBook.bookNum}</td>
              <td>도서명</td>
              <td>{selectBook.title}</td>
            </tr>
            <tr>
              <td>저자</td>
              <td>{selectBook.writer}</td>
              <td>가격</td>
              <td>{selectBook.price}원</td>
            </tr>
            <tr className='intro'>
              <td>도서소개</td>
              <td colSpan='3'>{selectBook.intro}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default BookDetail