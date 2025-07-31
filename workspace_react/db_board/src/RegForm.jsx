import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './RegForm.module.css'



const RegForm = () => {

  const [insertBoard, setInsertBoard] = useState({
    'title' : '',
    'writer' : '',
    'content' : ''
  })

  const nav = useNavigate();

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
    .then(res => nav('/'))
    .catch(error => console.log(error));
  }

  console.log(insertBoard);

  return (

    <div className={styles.container1}>
      <div className={styles.title_div}>
        <h3>게시글 작성 페이지</h3>
      </div>
      <div className={styles.table_div}>
        <table className={styles.reg_table}>
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
              <td><textarea name='content' value={insertBoard.content} onChange={e => handleInsertBoard(e)}></textarea></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className={styles.btn_div}>
        <button type='button' onClick={e => regBoard()}>글등록</button>
      </div>
    </div>
  )
}

export default RegForm