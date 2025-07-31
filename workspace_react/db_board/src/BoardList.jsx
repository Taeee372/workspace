import axios from 'axios';
import React, { use, useEffect, useState } from 'react'
import styles from './BoardList.module.css'
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
    <div className={styles.container1}>
      <div className={styles.title_div}>
        <h3>자유게시판</h3>
      </div>
      <div className={styles.search_div}>
        <select value={select} onChange={e => setSelect(e.target.value)}>
          <option value="title">제목</option>
          <option value="writer">작성자</option>
        </select>
        <input type="text" />
        <button type='button'>검색</button>
      </div>
      {/* 
        css를 module로 바꿔쓰면 클래스명 만들 때 하이픈 못 씀 
        중괄호 안에 있기 때문에 빼기로 인식된다
        언더바 써야됨 btn-small(X) btn_small(O) 
      */}
      <div className={styles.list_div}>
        <table className={styles.list_table}> 
          <colgroup>
            <col width=''/>
            <col width=''/>
            <col width=''/>
            <col width=''/>
            <col width=''/>
          </colgroup>
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
              boardList.length === 0
              ?
              <tr>
                <td colSpan={5}>조회된 게시글이 없습니다</td>
              </tr>
              :
              boardList.map((board, i) => {
                return (
                  <tr key={i}>
                    <td>{boardList.length - i}</td>
                    <td onClick={e => {
                          nav(`/boardDetail/${board.boardNum}`);
                          
                        }}>{board.title}</td>
                    <td>{board.writer}</td>
                    <td>{board.createDate}</td>
                    <td>{board.readCnt}</td>
                  </tr>
                )
              })
            }

              
          </tbody>
        </table>
      </div>
      <div className={styles.btn_div}>
        <button type='button' onClick={e => nav('regBoard')}>글쓰기</button>
      </div>
    </div>
  )
}

export default BoardList