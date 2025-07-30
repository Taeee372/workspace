import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  //useNavigate() 훅을 사용하면 함수를 하나 리턴한다.
  const nav = useNavigate();
  

  return (
    <div>
      <h2>메인페이지</h2>
      <button type='button' onClick={e => {nav('/join')}}>회원가입 하러가기</button>

      <div onClick={e => {nav('/login')}}>로그인 하러가기</div>
      {/* nav 매개변수 자리에 path값 넣으면 그 페이지로 이동 */}
      {/* 글자만 있는 거 이외에는 Link 태그 거의 안 쓴다 */}
    </div>
  )
}

export default Home