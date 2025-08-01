import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from './BoardDetail.module.css'

const BoardDetail = () => {

  //조회한 상세정보를 저장할 state 변수
  const [detailBoard, setDetailBoard] = useState({});

  const nav = useNavigate();

  //목록 화면에서 클릭한 게시글의 글 번호
  //uesParams는 데이터를 객체 타입으로 리턴해줌
  const {boardNum} = useParams();
  // console.log(boardNum);
  // console.log(det
  // ailBoard.boardNum)


  //axios는 실행순서는 있지만 나중 코드가 먼저 실행한 코드가 끝날 때까지 기다리지 않기 때문에 뭐가 먼저 끝날지 모름 => 비동기 함수
  //순서를 강제시키고 싶으면 선행코드의 then 안에 후행코드 넣기 
  // =>이 코드를 먼저 실행시키고 (성공하면 그 다음에) 나중 코드 실행 => 순서를 정해줄 수 있다

  //컴포넌트가 마운트되면 조회수를 1 증가시킨다
  useEffect(() =>{
    axios.put(`/api/boards/read-cnt/${boardNum}`)
    .then(res => {getboardDetail()})
    .catch(error => console.log(error));
  }, [])
   
  //상세정보 조회 함수
  const getboardDetail = () => {
     axios.get(`/api/boards/${boardNum}`)
    .then(res => {
      console.log(res.data)
      setDetailBoard(res.data)
    })
    .catch(error => console.log(error));
  }
 
  const deleteBoard = () => {
    const result = confirm('정말 삭제할까요?')
    //console.log(result);
    //confirm에서 확인 클릭 시 리턴 true, 취소 클릭 시 리턴 false

    //확인을 클릭했을 때만 삭제 진행
    if(result){
      axios.delete(`/api/boards/${boardNum}`)
      .then(res => nav('/'))
      .catch(error => console.log(error));
    }
    
  }

  return (
    <div>
     <div className={styles.title_div}> 
      <h3>게시글 상세 정보 페이지</h3>
    </div>
       <div className={styles.table_div}>
         <table className={styles.detail_table}>
          <tbody>
            <tr>
              <td>작성일</td>
              <td>{detailBoard.createDate}</td>
              <td>작성자</td>
              <td>{detailBoard.writer}</td>
              <td>조회수</td>
              <td>{detailBoard.readCnt}</td>
            </tr>
            <tr>
              <td>제목</td>
              <td colSpan={5}>{detailBoard.title}</td>
            </tr>
            <tr>
              <td>내용</td>
              <td colSpan={5}>{detailBoard.content}</td>
            </tr>
          </tbody>
        </table>
       </div>
      <div className={styles.btn_div}>
        <button type='button' onClick={e => nav('/')}>목록가기</button>
        <button type='button' onClick={e => nav(`/updateBoard/${detailBoard.boardNum}`)}>수정</button>
        <button type='button' onClick={e => deleteBoard()}>삭제</button>
      </div>
    </div>
  )
}

export default BoardDetail