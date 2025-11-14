import React, { useState } from 'react'
import { regBoard } from '../apis/board/board_api';
import { useNavigate } from 'react-router-dom';

const BoardWrite = () => {
  const nav = useNavigate();
  
  const [boardData, setBoardData] = useState({
    'title' : '',
    'content' : ''
  });

  const changeBoardData = (e) => {
    setBoardData({
      ...boardData,
      [e.target.name] : e.target.value
    })
  }

  const save = async () => {
    await regBoard(boardData);
    nav('/');
  }

  return (
    <div>
      제목 : <input 
                type="text" 
                name='title'
                value={boardData.title}
                onChange={e => changeBoardData(e)}
            /> <br />
      내용 : <textarea 
                cols={50} rows={5}
                type="text" 
                name='content'
                value={boardData.content}
                onChange={e => changeBoardData(e)}
            ></textarea> <br />
      <button type='button' onClick={() => save()}>등록</button>
    </div>
  )
}

export default BoardWrite