import React, { useState } from 'react'

const Test4 = () => {
  const [cnt, setCnt] = useState([0, 0, 0]);
  function f1(i){
    const copyCnt = [...cnt];
    copyCnt[i] = copyCnt[i] + 1;
    setCnt(copyCnt);
  }
  return (
    <div>
      <div onClick={() => f1(0)}>{cnt[0]}</div>
      <div onClick={() => f1(1)}>{cnt[1]}</div>
      <div onClick={() => f1(2)}>{cnt[2]}</div>
    </div>
  )
}

export default Test4