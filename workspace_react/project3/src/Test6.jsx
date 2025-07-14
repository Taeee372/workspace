import React, { useState } from 'react'

const Test6 = () => {
  const [cnt, setCnt] = useState(0);
  function plusCnt(i){
    setCnt(cnt + i);
  }
  function minusCnt(i){
    setCnt(cnt - i);
  }
  return (
    <div>
      <p>현재 카운트 : </p>
      <h3>{cnt}</h3>
      <button type='button' onClick={() => minusCnt(1)}>-1</button>
      <button type='button' onClick={() => minusCnt(10)}>-10</button>
      <button type='button' onClick={() => minusCnt(100)}>-100</button>
      <button type='button' onClick={() => plusCnt(100)}>+100</button>
      <button type='button' onClick={() => plusCnt(10)}>+10</button>
      <button type='button' onClick={() => plusCnt(1)}>+1</button>
    </div>
  )
}

export default Test6