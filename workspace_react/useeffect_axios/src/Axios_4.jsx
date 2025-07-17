import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Axios_4 = () => {
  const [stu, setStu] = useState([]);

  useEffect(() => {
    axios.get('/api/stuList')
    .then((res) => {
      console.log(res.data);
      setStu(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);
  
 

  return (
    <>
    <div>
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
            stu.map((stu, i) => {
              return (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{stu.name}</td>
              <td>{stu.korScore}</td>
              <td>{stu.engScore}</td>
              <td>{stu.korScore + stu.engScore}</td>
            </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
    </>
  )
}

export default Axios_4