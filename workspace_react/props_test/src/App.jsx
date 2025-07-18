import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Side from './Side'

function App() {
  
 const [cnt, setCnt] = useState(0);
 console.log(3); 
 //실제적으로 리렌더링되는 건 App 컴포넌트이기 때문에 Footer버튼을 눌러도 3이 뜸

  return (
    <>
      <Header title='java' age='20'/>
      <Footer cnt={cnt} setCnt={setCnt}/>
      {/* 함수를 전달하겠습니다 setCnt()를 쓰면 호출하는 게 되어버림 */}
      <button type='button' onClick={() => {
        setCnt(cnt + 1);
      }}>버튼</button>

      <Side 
      name='kim' 
      age='20' 
      addr='울산시'
      />

    </>
  )
}

export default App
