import React from 'react'

const BoardDetail = () => {
  return (
    <div>
      <h3>게시글 상세 정보 페이지</h3>
      <table className='container3'>
        <tbody>
          <tr>
            <td>작성일</td>
            <td></td>
            <td>작성자</td>
            <td></td>
            <td>조회수</td>
            <td></td>
          </tr>
          <tr>
            <td>제목</td>
            <td colSpan={5}></td>
          </tr>
          <tr>
            <td>내용</td>
            <td colSpan={5}></td>
          </tr>
        </tbody>
      </table>
      <button type='button'>목록가기</button>
      <button type='button'>수정</button>
      <button type='button'>삭제</button>
    </div>
  )
}

export default BoardDetail