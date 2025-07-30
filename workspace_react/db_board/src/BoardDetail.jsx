import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const BoardDetail = () => {

  const [detailData, setBoardDetail] = useState({});

  const nav = useNavigate();

  const {boardNum} = useParams();
  console.log(boardNum);

  useEffect(() => {
    axios.get(`/api/boards/${boardNum}`)
    .then(res => {
      console.log(res.data)
      setBoardDetail(res.data)
    })
    .catch(error => console.log(error));
  }, [])

  const deleteBoard = () => {
    axios.delete(`/api/boards/${boardNum}`)
    .then(res => nav('/'))
    .catch(error => console.log(error));
  }

  return (
    <div>
      <h3>게시글 상세 정보 페이지</h3>
      <table className='container3'>
        <tbody>
          <tr>
            <td>작성일</td>
            <td>{detailData.createDate}</td>
            <td>작성자</td>
            <td>{detailData.writer}</td>
            <td>조회수</td>
            <td>{detailData.readCnt}</td>
          </tr>
          <tr>
            <td>제목</td>
            <td colSpan={5}>{detailData.title}</td>
          </tr>
          <tr>
            <td>내용</td>
            <td colSpan={5}>{detailData.content}</td>
          </tr>
        </tbody>
      </table>
      <button type='button' onClick={e => nav('/')}>목록가기</button>
      <button type='button' onClick={e => nav('/updateBoard')}>수정</button>
      <button type='button' onClick={e => deleteBoard()}>삭제</button>
    </div>
  )
}

export default BoardDetail