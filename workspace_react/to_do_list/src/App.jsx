import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import edit from './edit.png'
import deleteImg from './deleteImg.png'



function App() {
  const [data, setData] = useState([
  {id: 1, txt: "리액트 공부하기"},
  {id: 2, txt: "이력서 작성하기"},
  {id: 3, txt: "주말엔 휴식"}
  ])

  const [newList, setNewList] = useState({
    'id' : '',
    'txt' : ''
  });

  const handleAddList = (e) => {
    setNewList({
      ...newList,
      [e.target.name] : e.target.value
    })
  }

  console.log(data);
  console.log(data[1].txt)

  return (
    <div>
      <div>
        <h2>To Do List</h2>
      </div>
      <div>
        <input type="text" name='txt' value={newList.txt} onChange={e => handleAddList(e)}/>
        <button type='button' onClick={e => {}}>등록</button>
      </div>
      <div>
       <table className='table-div'>
         <tbody>
            {
              data.map((e, i) => {
                return (
                  <tr key={i}>
                    <td>{e.txt}</td>
                    <td><img src={edit} onClick={e => console.log(i)}/></td>
                    <td><img src={deleteImg} onClick={e => {}}/></td>
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
