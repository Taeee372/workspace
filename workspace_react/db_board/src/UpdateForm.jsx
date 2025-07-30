import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateForm = () => {


  const nav = useNavigate();

  const {boardNum} = useParams();

  

  return (
    <div>
      <h3>게시글 수정 페이지</h3>
      <table className='container4'>
        <tbody>
          <tr>
            <td>작성일</td>
            <td></td>
            <td>작성자</td>
            <td></td>
          </tr>
          <tr>
            <td>제목</td>
            <td colSpan={3}><input type="text" /></td>
          </tr>
          <tr>
            <td>내용</td>
            <td colSpan={3}><textarea cols={50} rows={5}></textarea></td>
          </tr>
        </tbody>
      </table>
      <button type='byttton' onClick={e => nav(-1)}>뒤로가기</button>
      <button type='byttton' onClick={e => nav('/boardDetail/:boardNum')}>수정</button>
    </div>
  )
}

export default UpdateForm