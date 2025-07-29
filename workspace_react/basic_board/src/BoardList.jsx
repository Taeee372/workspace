import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './BoardList.css'

const BoardList = () => {

  const [boardList, setBoardList] = useState([]);


  useEffect(() => {
    axios.get('/api/boards')
    .then(res => setBoardList(res.data))
    .catch(error => console.log(error))
  }, [])

  console.log(boardList)

  return (
    <div>
      <h3>게시글 목록 페이지</h3>
      <p>총 {boardList.length}개의 게시글이 조회되었습니다 </p>
      <table>
        <thead>
          <tr>
            <td>NO</td>
            <td>제목</td>
            <td>작성자</td>
            <td>작성일</td>
            <td>조회수</td>
          </tr>
        </thead>
        <tbody>
          {
            boardList.map((e, i) => {
              return (
                <tr key={i}>
                  <td>{boardList.length - i}</td>
                  <td>{e.title}</td>
                  <td>{e.writer}</td>
                  <td>{e.createDate}</td>
                  <td>{e.readCnt}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default BoardList