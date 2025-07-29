import axios from 'axios';
import React, { useState } from 'react'

//BASIC_MEMBER 테이블에 데이터를 삽입하는 기능 구현
//비번과 비번확인에 입력한 데이터가 일치하지 않을 경우, 버튼 클릭 시 '비밀번호를 확인하세요'
//라는 alert를 띄우고 회원가입이 진행되지 않아야 한다.

const MemberRegForm = () => {

  const [insertMemData, setInsertMemData] = useState({
    'memId' : '',
    'memPw' : '',
    'correctPw' : '', //디비에 없어도 필요하면 같이 만들면 댐
    'memName' : '',
    'memAge' : ''
  });

  console.log(insertMemData);

  const handleMemData = (e) => {
    setInsertMemData({
      ...insertMemData,
      [e.target.name] : e.target.value
    });
  }

  // const regMember = () => {
  //   if(insertMemData.memPw === insertMemData.correctPw)
  //     axios.post...
  //   }
  //   else{alert('비번확인')}  얘도 가능은 하지만,,,


  const insertData = () => {
    if(insertMemData.memPw !== insertMemData.correctPw){
      alert('비밀번호를 확인하세요')
      return; //함수 안에서 데이터 없는 리턴문을 만나면 함수는 그 즉시 종료된다.
    }
    axios.post('/api/members', insertMemData)
    .then(res => alert('환영합니다!'))
    .catch(error => console.log(error))
  }


  return (
    <div>
      <h3>회원등록</h3>
      아이디 <input type="text" name='memId' value={insertMemData.memId} onChange={e => handleMemData(e)}/> <br />
      비번 <input type="password" name='memPw' value={insertMemData.memPw} onChange={e => handleMemData(e)}/> <br />
      비번확인 <input type="password" name='correctPw' value={insertMemData.correctPw} onChange={e => handleMemData(e)}/> <br />
      이름 <input type="text" name='memName' value={insertMemData.memName} onChange={e => handleMemData(e)}/> <br />
      나이 <input type="text" name='memAge' value={insertMemData.memAge} onChange={e => handleMemData(e)}/> <br />
      <button type='button' onClick={e => insertData()}>회원가입</button>
    </div>
  )
}

export default MemberRegForm