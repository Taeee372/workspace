import React from 'react'
import './BoardDetail.css'

const BoardDetail = (props) => {
  console.log(props);
  return (
    <>
      <div className='detail-div'>
        <table className='detail-table'>
          <tbody>
            <tr>
              <td>제목</td>
              <td colSpan={3}>{props.selectedBoard.title}</td>
            </tr>
            <tr>
              <td>작성자</td>
              <td>{props.selectedBoard.writer}</td>
              <td>조회수</td>
              <td>{props.selectedBoard.cnt}</td>
            </tr>
            <tr>
              <td>내용</td>
              <td colSpan={3}>{props.selectedBoard.content}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default BoardDetail

