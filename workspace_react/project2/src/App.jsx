import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EventTest from './EventTest';

function App() {

  //변화된 값을 화면에 보여주려면 변수 선언을 useState를 사용해서 선언한다. 
  //useState()의 실행결과 : 배열로 반환한다.
  //useState() 실행결과 반환된 배열의 0번째 요소에는 초기값이 들어가있고, 
  //1번째 요소에는 변수의 값을 변경시키는 기능의 함수가 들어가있다.
  let [title, setTitle] = useState('제목1');
  console.log(1);
  console.log(title);

  return (
    <>
      <h1>{title}</h1>
      <button type='button' onClick={() => {
        setTitle('변경된 제목');
      }}>제목 변경</button>

      {/* <EventTest/> */}
    </>
  )
}

export default App
