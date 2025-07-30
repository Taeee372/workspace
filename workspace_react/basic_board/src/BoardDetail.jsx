import axios from 'axios'
import React, { useEffect, useState } from 'react'

const BoardDetail = () => {

  //상세 조회 데이터를 저장할 state 변수
  const [board, setBoard] = useState({});

  //인풋태그에 입력한 데이터를 저장할 state 변수
  const [boardNum, setBoardNum] = useState('');

  //표의 표시 여부를 저장하는 state 변수
  const [isShow, setIsShow] = useState(false);

  console.log(board.title); //빈객체인 상태에서는 undefined가 나옴
 
  //조회 버튼 클릭 시 실행 함수
  const getDetail = () => {
    //표를 보이게 변경
    setIsShow(true);
    
    axios.get(`/api/boards/${boardNum}`) 
    .then(res => {
     console.log(res.data)

    //없는 번호라면(=res.data가 빈문자라면...) res.data가 axios 안에 있으니까 여기서 if문 사용
    if(res.data === ''){
      alert('없는 번호입니다');
      setIsShow(false); //테이블도 보이지 않게 해야하니 다시 false로 바꾸기
    }
     
     setBoard(res.data)
    })
    .catch(error => console.log(error));
  }

  
  // console.log(board);
  // console.log(boardNum);
   
  return (
    <div>
      <div>
        <h3>게시글 상세 정보 조회 페이지</h3>
        <span>조회할 게시글 번호를 입력하세요 </span> 
        <input type="text" value={boardNum} onChange={(e) => {setBoardNum(e.target.value)}} /> 
        <button type='button' onClick={e => {getDetail()}}>조회</button>
      </div>
      {
        isShow && //isShow의 초기값이 false이기 때문에 테이블 그리지 않음 | true가 돼야 테이블을 그린다(실행시킨다)
        <table>
          <tbody>
            <tr>
              <td>글번호</td>
              <td>{board.boardNum}</td>  
              {/* 
                맨처음 그림 그릴 때에는 빈객체로 시작하기 때문에 {빈객체.title} => undefined
                undifined와 null 상태에서는 오류 뜨는 게 아니라 빈화면을 그리기 때문에 표 안에 아무것도 뜨지 않는 것
              */}
              <td>조회수</td>
              <td>{board.readCnt}</td>
            </tr>
            <tr>
              <td>작성자</td>
              <td>{board.writer}</td>
              <td>작성일자</td>
              <td>{board.createDate}</td>
            </tr>
            <tr>
              <td>제목</td>
              <td colSpan={3}>{board.title}</td>
            </tr>
            <tr>
              <td>내용</td>
              <td colSpan={3}>{board.content}</td>
            </tr>
          </tbody>
        </table>
      }
      
    </div>
  )
}

export default BoardDetail