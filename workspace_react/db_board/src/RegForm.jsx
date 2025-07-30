import axios from 'axios';
import React, { useState } from 'react'



const RegForm = () => {

  const [insertBoard, setInsertBoard] = useState({
    'title' : '',
    'writer' : '',
    'content' : ''
  })

  const handleInsertBoard = (e) => {
    setInsertBoard({
      ...insertBoard,
      [e.target.name] : e.target.value
    })
  }

  const regBoard = () => {
    if(insertBoard.title === ''){
      alert('제목을 입력해주세요')
      return ;
    }
    if(insertBoard.writer === ''){
      alert('작성자를 입력해주세요')
      return ;
    }
    axios.post('/api/boards', insertBoard)
    .then(res => alert('등록 완료'))
    .catch(error => console.log(error));
  }

  console.log(insertBoard);

  return (

    <div>
      <h3>게시글 작성 페이지</h3>
      <table className='container2'>
        <tbody>
          <tr>
            <td>제목</td>
            <td><input type="text" name='title' value={insertBoard.title} onChange={e => handleInsertBoard(e)}/></td>
          </tr>
          <tr>
            <td>작성자</td>
            <td><input type="text" name='writer' value={insertBoard.writer} onChange={e => handleInsertBoard(e)}/></td>
          </tr>
          <tr>
            <td>내용</td>
            <td><textarea cols={50} rows={5} name='content' value={insertBoard.content} onChange={e => handleInsertBoard(e)}></textarea></td>
          </tr>
        </tbody>
      </table>
       <button type='button' onClick={e => regBoard()}>글등록</button>
    </div>
  )
}

export default RegForm