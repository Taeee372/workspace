import React, { useState } from 'react'

const Test2 = () => {
  const [label, setLabel] = useState('ON');
  const [btn, setBtn] = useState('OFF')
  return (
    <div>
      <h2>{label}</h2>
      <button type='button' onClick={() =>{
        // state 변경함수가 여러개 실행되면, 리렌더링은 마지막에 1번만 실행
        setLabel(label === 'ON' ? 'OFF' : 'ON');
        setBtn(btn === 'OFF' ? 'ON' : 'OFF');
      }}>{btn}</button>
      
  </div>
  )
}

export default Test2