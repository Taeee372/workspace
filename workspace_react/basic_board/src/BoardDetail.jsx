import axios from 'axios'
import React, { useEffect, useState } from 'react'

const BoardDetail = () => {

  const [getBoard, setGetBoard] = useState(null);

  const [boardNum, setBoardNum] = useState('');


 

  const getOneBoard = () => {

    axios.get(`/api/boards/${boardNum}`)
    .then(res => {
     setGetBoard(res.data)
  
    })
    .catch(error => console.log(error));

  }

  
  console.log(getBoard);
  console.log(boardNum);
   
  return (
    <div>
      <h3>게시글 상세 정보 조회 페이지</h3>
      조회할 게시글 번호를 입력하세요 <input type="text" value={boardNum} onChange={(e) => {setBoardNum(e.target.value)}} />
      <button type='button' onClick={e => {getOneBoard()}}>조회</button>
      { getBoard
        ?
        <table>
        <tbody>
          <tr>
            <td>글번호</td>
            <td>{getBoard.boardNum}</td>
            <td>조회수</td>
            <td>{getBoard.readCnt}</td>
          </tr>
          <tr>
            <td>작성자</td>
            <td>{getBoard.writer}</td>
            <td>작성일자</td>
            <td>{getBoard.createDate}</td>
          </tr>
          <tr>
            <td>제목</td>
            <td colSpan={3}>{getBoard.title}</td>
          </tr>
          <tr>
            <td>내용</td>
            <td colSpan={3}>{getBoard.content}</td>
          </tr>
        </tbody>
      </table>
      :
      null}
      
    </div>
  )
}

export default BoardDetail