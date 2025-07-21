import React from 'react'
import './BookList.css'

const BookList = ({bookList, setSelectBook, setIsShow}) => {
  return (
    <>
      <div>
        <table>
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
                    <td>{e.price}</td>
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