import React, { useEffect, useState } from 'react'
import * as boardApi from '../apis/board/board_api'
import { useParams } from 'react-router-dom';

const BoardDetail = () => {
  const {boardNum} = useParams();

  const [board, setBoard] = useState({});

  useEffect(() => {
    changeBoard();
  }, [])

  const changeBoard = async () => {
    const result = await boardApi.getBoardDetail(boardNum);
    setBoard(result);
  }

  return (
    <div>
      <div>글번호 : {board.boardNum}</div>
      <div>제목 : {board.title}</div>
      <div>내용 : {board.content}</div>
      <div>작성자 : {board.writer}</div>
      <div>작성일 : {board.createDate}</div>
      <div>조회수 : {board.readCnt}</div>
    </div>
  )
}

export default BoardDetail