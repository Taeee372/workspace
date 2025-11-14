import React, { useState } from 'react'
import { join } from '../apis/member/member_api';
import { useNavigate } from 'react-router-dom';

const Join = () => {
  const nav = useNavigate();

  const [joinData, setJoinData] = useState({
    'memEmail' : '',
    'memPw' : '',
    'memName' : ''
  });

  const changeJoinData = (e) => {
    setJoinData({
      ...joinData,
      [e.target.name] : e.target.value
    });
  }

  const doJoin = async () => {
    await join(joinData);
    nav('/')
  }

  return (
    <div>
      이메일 : 
      <input type="text" name='memEmail' value={joinData.memEmail} onChange={e => changeJoinData(e)}/>
      <br />
      비번 : 
      <input type="password" name='memPw' value={joinData.memPw} onChange={e => changeJoinData(e)}/> 
      <br />
      이름 : 
      <input type="text" name='memName' value={joinData.memName} onChange={e => changeJoinData(e)}/> 
      <br />
      <button type='button' onClick={() => doJoin()}>회원가입</button>
    </div>
  )
}

export default Join