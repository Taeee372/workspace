import React, { useEffect, useState } from 'react'
import styles from './StuList.module.css'
import axios from 'axios';

const StuList = () => {

  //조회한 학급 목록 데이터를 저장할 state 변수
  const [classList, setClassList] = useState([]);

  const [stuList, setStuList] = useState([]);

  const [stuListClass, setStuListClass] = useState([]);

  //컴포넌트가 마운트되면 학급목록을 조회해서 classList에 저장
  useEffect(() => {
    axios.get('/api/class')
    .then(res => {
      console.log(res.data)
      setClassList(res.data)
    })
    .catch(error => console.log(error))
  }, [])

  useEffect(() => {
    axios.get('/api/students')
    .then(res => {
      console.log(res.data)
      setStuList(res.data)
    })
    .catch(e => console.log(e))
  }, [])

  useEffect(() => {
    axios.get(`/api/students/1`)
    .then(res => {
      console.log(res.data)
      setStuListClass(res.data)
    })
    .catch(e => console.log(e))
  }, [])

  return (
    <div>
      <div>
        <select>
          <option value="">전체</option>
            {
              classList.map((e, i) => {
                return(
                  <option key={i} value={e.classNum} onChange={e => {}}>{e.className}</option>
                )
              })
            }
        </select>
      </div>
      <div>
        <table className={styles.table_div}>
          <thead>
            <tr>
              <td>NO</td>
              <td>학급명</td>
              <td>학생명</td>
              <td>나이</td>
            </tr>
          </thead>
          <tbody>
            {
              stuList.map((e, i) => {
                return(
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>학급</td>
                    <td>{e.stuName}</td>
                    <td>{e.stuAge}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default StuList