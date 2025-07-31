import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BoardDetail from './BoardDetail';
import styles from './UpdateForm.module.css'

const UpdateForm = () => {

  const [detailData, setDetailData] = useState({});

  const [updateData, setUpdateData] = useState({
    'title' : '',
    'content' : ''
  });

  
  const handleData = (e) => {
    setUpdateData({
      ...updateData,
      [e.target.name] : e.target.value
    })
  }
  console.log(updateData)
  

  const nav = useNavigate();

  const {boardNum} = useParams();
  // console.log(detailData.title);


  useEffect(() => {
    axios.get(`/api/boards/${boardNum}`)
    .then(res => {
      console.log(res.data)
      setDetailData(res.data)
    })
    .catch(error => console.log(error));
  }, [])
  
  return (
    <div className={styles.container}>
      <h3>게시글 수정 페이지</h3>
      <table>
        <tbody>
          <tr>
            <td>작성일</td>
            <td>{detailData.createDate}</td>
            <td>작성자</td>
            <td>{detailData.writer}</td>
          </tr>
          <tr>
            <td>제목</td>
            <td colSpan={3}>
              <input type="text" name='title' value={updateData.title} onChange={e => handleData(e)}/>
              </td>
          </tr>
          <tr>
            <td>내용</td>
            <td colSpan={3}><textarea cols={50} rows={5}></textarea></td>
          </tr>
        </tbody>
      </table>
      <button type='buttton' onClick={e => nav(-1)}>뒤로가기</button>
      <button type='buttton' onClick={e => nav(`/boardDetail/${boardNum}`)}>수정</button>
    </div>
  )
}

export default UpdateForm