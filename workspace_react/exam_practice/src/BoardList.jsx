import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './BoardList.css'

const BoardList = (props) => {
  console.log(props);

  return (
   <div className='container'>
    <table className='list-table'>
      <thead>
        <tr>
          <td>글번호</td>
          <td>제목</td>
          <td>작성자</td>
          <td>조회수</td>
        </tr>
      </thead>
      <tbody>
        {
          props.boardList.map((e, i) => {
            return (
              <tr key={i}>
                <td>{e.boardNum}</td>
                <td>
                  <span className='title' onClick={() => {
                    //내가 클릭한 제목의 게시글 정보를 
                    //BoardDetail.jsx에 전달하겠습니다
                    props.setSelectedBoard(e);
                    props.setIsShow(true);
                  }}>{e.title}</span>
                </td>
                <td>{e.writer}</td>
                <td>{e.cnt}</td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
   </div>
   
  )
}

export default BoardList