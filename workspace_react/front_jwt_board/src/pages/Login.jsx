import React, { useState } from 'react'
import { login } from '../apis/member/member_api';

const Login = () => {
  const [loginData, setLoginData] = useState({
    memEmail : '',
    memPw : ''
  });

  const handelLoginData = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name] : e.target.value
    })
  }

  const loginProcess = async () => {
    await login(loginData)
  }

  return (
    <div>
      아이디 : <input type="text" name='memEmail' value={loginData.memEmail} onChange={e => handelLoginData(e)}/> <br />
      비번 : <input type="password" name='memPw' value={loginData.memPw} onChange={e => handelLoginData(e)}/> <br />
      <button type='button' onClick={e => loginProcess()}>로그인</button>
    </div>
  )
}

export default Login