import axios from 'axios';
import React, { useState } from 'react'

const RegForm = () => {

  //입력한 내용 저장을 위한 state 변수
  const [boardData, setBoardData] = useState({
    'title' : '',
    'writer' : '',
    'content' : '',
    'readCnt' : ''
  });

  console.log(boardData);

  //값 입력 시 실행되는 함수
  const handleBoardDate = (e) => {
    setBoardData({
      ...boardData,
      [e.target.name] : e.target.value
    });
  }

  //등록 버튼 클릭 시 실행 함수
  const regBoard = () => {
    //입력한 정보를 spring api에 전달
    axios.post('/api/boards', boardData)
    .then(res => alert('등록 성공!'))
    .catch(error => console.log(error));
  }

  return (
    <div>
      <h3>게시글 등록</h3>
      제목 
      <input type="text" name='title' value={boardData.title} onChange={e => handleBoardDate(e)}/> <br />

      작성자 
      <input type="text" name='writer' value={boardData.writer} onChange={e => handleBoardDate(e)}/> <br />

      내용 
      <textarea cols={50} rows={5} name='content' value={boardData.content} onChange={e => handleBoardDate(e)}></textarea> <br />

      조회수 
      <input type="text" name='readCnt' value={boardData.readCnt} onChange={e => handleBoardDate(e)}/> <br />

      <button type='button' onClick={e => regBoard()}>등록</button>
    </div>
  )
}

export default RegForm