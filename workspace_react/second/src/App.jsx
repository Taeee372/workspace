import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//react의 html 코드는 App 컴포넌트 안의 return문에 작성한다.
//html코드는 무조건 하나의 최상위 태그를 지녀야 한다.
//디자인에 영향을 주기 싫으면 최상위 태그를 빈 태그 <></>로 주면 된다.

//함수 vs 컴포넌트
//이름이 소문자로 되어 있으면 함수!
//이름이 대문자로 시작하면 컴포넌트!

function App() { //앞 글자가 소문자가 아니니 함수는 아님
  const name = 'hi';
  const arr = [1, 2, 3];
  //객체(통으로)는 html로 표현할 수 없다! ->객체 내용 하나하나는 표현할 수 있음
  const person = {
    name : 'kim',
    age : 20
  };
  
  function Header(){
    return (
      <div>
      이곳은 header 영역입니다
      </div>
    )
  }

  return (
   <>
    <Header></Header>
    <div>{name}</div>
    <div>hello</div>
    <div>{arr[0]}</div>
    <div>{person.name}</div>
    <div>
      이곳은 푸터 영역입니다
    </div>
   </> 
   
  )
}

export default App
