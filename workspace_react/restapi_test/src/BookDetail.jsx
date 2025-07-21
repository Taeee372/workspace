import React from 'react'
import './BookDetail.css'

const BookDetail = ({selectBook}) => {
  return (
    <>
      <div>
        <table>
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
              <td>{selectBook.price}</td>
            </tr>
            <tr>
              <td colSpan='3'>도서소개</td>
              <td>{selectBook.intro}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default BookDetail