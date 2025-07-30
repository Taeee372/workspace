import axios from 'axios';
import React, { useState } from 'react'

const SearchBoardList = () => {
  //input 태그에 입력한 정보를 저장할 state 변수
  const [title, setTitle] = useState('');

  //조회된 데이터를 저장할 state 변수
  const [boardList, setBoardList] = useState([]);

  //조회 버튼 클릭 시 실행 함수
  const goSearch = () => {
    axios.get(`/api/boards/search/${title}`)
    .then(res => {
      console.log(res.data)
      setBoardList(res.data)
    })
    .catch(error => console.log(error));
  }

  return (
    <div>
      <h3>게시글 목록 페이지2</h3>
      <span>제목</span> 
      <input type="text" value={title} 
            onChange={e => setTitle(e.target.value)}
            onKeyDown={e => {
              // console.log(e)
              if(e.key === 'Enter')
                goSearch(); //조회 눌렀을 때 실행되는 코드와 동일하면 되니까
            }}  
      />
      <button type='button' onClick={e => goSearch()}>조회</button>
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
          boardList.length === 0
          ?
          <tr>
            <td colSpan={5}>조회된 데이터가 없습니다.</td>
          </tr>
          :
          boardList.map((board, i) => {
            return (
              <tr key={i}>
                <td>{boardList.length - i}</td>
                <td>{board.title}</td>
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
  )
}

export default SearchBoardList