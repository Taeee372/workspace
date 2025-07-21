import React from 'react'
import './BookList.css'

const BookList = () => {
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
        </table>
      </div>
    </>
  )
}

export default BookList