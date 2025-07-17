import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Axios_5.css'

const Axios_5 = () => {
  const [stuList, setStuList] = useState([]);

  return (
    <div className='container'>
      <div className='btn_div'>
          <button type='button' onClick={() => {
            axios.get('/api/stuList')
            .then((res) => {
              console.log(res.data);
              setStuList(res.data);
            })
            .catch((error) => {
              console.log(error);
            });
          }}>목록조회</button>
      </div>
      <table>
        <colgroup>
        <col width='*'/>
        <col width='22%'/>
        <col width='22%'/>
        <col width='22%'/>
        <col width='22%'/>
        </colgroup>
        <thead>
          <tr>
            <td>NO</td>
            <td>이름</td>
            <td>국어점수</td>
            <td>영어점수</td>
            <td>총점</td>
          </tr>
        </thead>
        <tbody>
        {
          stuList.length === 0 
          ? 
          <tr>
            <td colSpan='5'>버튼을 클릭하면 학생 목록이 조회됩니다.</td>
          </tr> 
          : 
          stuList.map((student, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{student.name}</td>
                <td>{student.korScore}</td>
                <td>{student.engScore}</td>
                <td>{student.korScore + student.engScore}</td>
              </tr>
            )
          })
        } 
        </tbody>
      </table>
    </div>
  )
}
export default Axios_5