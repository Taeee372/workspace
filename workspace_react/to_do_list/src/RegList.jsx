import React, { useState } from 'react'

const RegList = ({data, setData}) => {

  console.log(data)
  
  const [newList, setNewList] = useState({
    'id' : '',
    'txt' : ''
  });

  console.log(newList)
  const handleAddList = (e) => {
    setNewList({
      ...newList,
      [e.target.name] : e.target.value
    })
  }

  return (
    <div>
      <div>
        <input type="text" name='txt' value={newList.txt} onChange={e => handleAddList(e)}/>
        <button type='button' onClick={e => {}}>등록</button>
      </div>
    </div>
  )
}

export default RegList