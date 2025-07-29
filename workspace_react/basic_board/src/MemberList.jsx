import axios from 'axios'
import React, { useEffect, useState } from 'react'

//조회된 모든 회원의 아이디, 이름, 나이를 표 생성으로 표현

const MemberList = () => {

  const [memInfo, setMemInfo] = useState([]);

  //spring에서 회원 목록 데이터 가져오기
  useEffect(() => {
    axios.get('/api/members')
    .then((res) => {
      setMemInfo(res.data)
    })
    .catch(error => console.log(error));
  }, [])
  console.log(memInfo)


  return (
    <div>
      <h4>회원 목록</h4>
      <table>
        <thead>
          <tr>
            <td>아이디</td>
            <td>이름</td>
            <td>나이</td>
          </tr>
        </thead>
        <tbody>
          {
            memInfo.map((member, i) => { //직관적으로 보이게 e를 member라고 바꿔도 됨
              return (
                <tr key={i}>
                  <td>{member.memId}</td>
                  <td>{member.memName}</td>
                  <td>{member.memAge}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default MemberList