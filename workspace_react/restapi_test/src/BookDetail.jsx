import React from 'react'
import './BookDetail.css'

const BookDetail = () => {
  return (
    <>
      <div>
        <table>
          <tbody>
            <tr>
              <td>도서번호</td>
              <td></td>
              <td>도서명</td>
              <td></td>
            </tr>
            <tr>
              <td>저자</td>
              <td></td>
              <td>가격</td>
              <td></td>
            </tr>
            <tr>
              <td colSpan='4'>도서소개</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default BookDetail