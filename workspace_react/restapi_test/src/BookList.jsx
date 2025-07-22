import React from 'react'
import './BookList.css'

const BookList = ({bookList, setSelectBook, setIsShow}) => {
  return (
    <>
      <div className='container'>
        <h3>도서 목록</h3>
        <table>
          <colgroup>
            <col width='10%'/>
            <col width='16%'/>
            <col width='*%'/>
            <col width='18%'/>
            <col width='18%'/>
          </colgroup>
          <thead>
            <tr>
              <td>No</td>
              <td>도서번호</td>
              <td>도서명</td>
              <td>저자</td>
              <td>도서가격</td>
            </tr>
          </thead>
          <tbody>
            {
              bookList.map((e, i) => {
                return (
                  <tr key={i} onClick={() => {
                    setSelectBook(e);
                    setIsShow(true);
                  }}>
                    <td>{bookList.length - i}</td>
                    <td>{e.bookNum}</td>
                    <td>{e.title}</td>
                    <td>{e.writer}</td>
                    <td>{e.price}원</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default BookList