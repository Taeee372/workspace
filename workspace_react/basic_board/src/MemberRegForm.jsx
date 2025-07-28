import axios from 'axios';
import React, { useState } from 'react'

//BASIC_MEMBER 테이블에 데이터를 삽입하는 기능 구현
//비번과 비번확인에 입력한 데이터가 일치하지 않을 경우, 버튼 클릭 시 '비밀번호를 확인하세요'
//라는 alert를 띄우고 회원가입이 진행되지 않아야 한다.

const MemberRegForm = () => {

  const [insertMemData, setInsertMemData] = useState({
    'memId' : '',
    'memPw' : '',
    'memName' : '',
    'memAge' : ''
  });

  const [correctPw, setCorrectPw] = useState('');

  console.log(insertMemData);

  const handleMemData = (e) => {
    setInsertMemData({
      ...insertMemData,
      [e.target.name] : e.target.value
    });
  }

  const insertData = () => {
    insertMemData.memPw === correctPw 
    ? 
    axios.post('/api/members', insertMemData)
    .then(res => alert('환영합니다!'))
    .catch(error => console.log(error))
    :
    alert('비밀번호를 확인하세요')
  
  }

  return (
    <div>
      <h3>회원등록</h3>
      아이디 <input type="text" name='memId' value={insertMemData.memId} onChange={e => handleMemData(e)}/> <br />
      비번 <input type="password" name='memPw' value={insertMemData.memPw} onChange={e => handleMemData(e)}/> <br />
      비번확인 <input type="password" value={correctPw} onChange={e => setCorrectPw(e.target.value)}/> <br />
      이름 <input type="text" name='memName' value={insertMemData.memName} onChange={e => handleMemData(e)}/> <br />
      나이 <input type="text" name='memAge' value={insertMemData.memAge} onChange={e => handleMemData(e)}/> <br />
      <button type='button' onClick={e => insertData()}>회원가입</button>
    </div>
  )
}

export default MemberRegForm