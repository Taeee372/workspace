import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const data = [
  {id: 1, txt: "리액트 공부하기"},
  {id: 2, txt: "이력서 작성하기"},
  {id: 3, txt: "주말엔 휴식"}
]

console.log(data);
console.log(data[1].txt)
  return (
    <div>
      <div>
        <h2>To Do List</h2>
      </div>
      <div>
        <input type="text" />
        <button type='button'>등록</button>
        </div>
      <div>
       <table>
         <tbody>
            {
              data.map((e, i) => {
                return (
                  <tr key={i}>
                    <td>{e.txt}</td>
                  </tr>
                )
              })
            }
         </tbody>
       </table>
      </div>
    </div>
  )
}

export default App
