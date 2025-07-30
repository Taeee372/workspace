import axios from 'axios';
import React, { use, useEffect, useState } from 'react'
import './BoardList.css'
import { useNavigate } from 'react-router-dom';

const BoardList = () => {

  const [boardList, setBoardList] = useState([]);

  const [select, setSelect] = useState('title');

  const nav = useNavigate(); 


  useEffect(() => {
    axios.get('/api/boards')
    .then(res => {
      // console.log(res.data);
      setBoardList(res.data)
    })
    .catch(error => console.log(error));
  }, []);

  

  return (
    <div>
      <h3>자유게시판</h3>
      <select value={select} onChange={e => setSelect(e.target.value)}>
        <option value="title">제목</option>
        <option value="writer">작성자</option>
      </select>
      <input type="text" />
      <button type='button'>검색</button>
      <table className='container1'>
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
            boardList.map((board, i) => {
              return (
                <tr key={i}>
                  <td>{boardList.length - i}</td>
                  <td onClick={e => nav(`/boardDetail/${board.boardNum}`)}>{board.title}</td>
                  <td>{board.writer}</td>
                  <td>{board.createDate}</td>
                  <td>{board.readCnt}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <button type='button' onClick={e => nav('regBoard')}>글쓰기</button>
    </div>
  )
}

export default BoardList