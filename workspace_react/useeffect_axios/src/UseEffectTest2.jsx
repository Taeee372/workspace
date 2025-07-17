import React, { useEffect, useState } from 'react'

const UseEffectTest2 = () => {
  const [cnt, setCnt] = useState(0);

  //useEffect의 두 번재 의존성 배열에 빈 배열을 전달하면 
  //mount 시점에만 실행!
  useEffect(() => {
    console.log('useEffect 실행');
  }, []);
  console.log(1);    

  return (
    <>
      <div>UseEffectTest2</div>
      <button type='button' onClick={() => {
        setCnt(cnt + 1);
      }}>리렌더링</button>
    </>
   
  )
}

export default UseEffectTest2