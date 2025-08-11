import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import List from './List'
import UpdateList from './UpdateList'
import RegList from './RegList'



function App() {
  const [data, setData] = useState([
  {id: 1, txt: "리액트 공부하기"},
  {id: 2, txt: "이력서 작성하기"},
  {id: 3, txt: "주말엔 휴식"}
])

console.log(data);
console.log(data[1].txt)
  return (
    <div>
      <div>
        <h2>To Do List</h2>
      </div>
     <RegList data={data} setData={setData}/>
     <List data={data} setData={setData}/>
    </div>
  )
}

export default App
