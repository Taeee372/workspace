import React, { useEffect } from 'react'

const UseEffectTest = () => {
  console.log(0);

  //useEffect 안의 코드는 html그림 다 그린 후 마지막에 실행!
  //useEffect의 두 번째 매개변수(의존성 배열)를 사용하지 않으면 
  //mount, update 시점에 실행 됨
  useEffect(() => {
    console.log(1);
  });

  console.log(2);

  return (
    <div>UseEffectTest</div>
  )
}

export default UseEffectTest