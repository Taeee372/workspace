import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Test from './Test'

function MyInput(){
  return (
    <button type='button'>버튼1</button>
  )
}

//jsx 문법에서의 태그는 반드시 닫는 태그가 있어야 함!!
function App() {
  const myName = '홍길동';
  const myAge = 20;
  const arr = [1, 2, 3];
  //객체를 jsx에 사용할 때는 객체 전체를 사용할 수는 없다. (객체의 key값으로만 접근 가능)
  const man = {
    name : 'lee',
    age : 30
  };
  const bool = true;
  const data = null;

  const num = 7;

  //return문 안에는 html이 들어오긴 하지만 jsx문법을 따르기 때문에 class 사용 불가능(그대신 className을 쓴다)
  return (
    <>
      <h3>{num % 2 === 0 ? '짝수' : '홀수'}</h3>
      <h3>{bool}</h3>
      <h3>{data}</h3>
      <h2>{arr[1]}</h2>
      <h2>{man.name}</h2>
      <h2>{myName}</h2>
      <h2>{myAge}</h2>
      <MyInput />
      <div>안녕하세요</div>
      <Test />
      <input type="text" />
      <br />
    </>
  )
}

export default App
