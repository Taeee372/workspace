import React, { useEffect, useState } from 'react'

const UseEffectTest3 = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  console.log(1);
  
  //mount + 무슨 이유든 간에 update가 되기만 하면 실행
  useEffect(() => {
    console.log(2);
  });

  //mount 때만 실행
  useEffect(() => {
    console.log(3);
  }, []);

  //mount + num1값이 바뀌어서 리렌더링 될 때만 실행!
  useEffect(() => {
    console.log(4);
  }, [num1]);

  //mount + num2값이 바뀌면서 리렌더링 할 때만 실행!
  useEffect(() =>{
    console.log(5);
  }, [num2]);

  //mount + num1 또는 num2값이 바뀌어서 리렌더링 될 때 실행!
   useEffect(() =>{
    console.log(7);
  }, [num1, num2]);


  console.log(6);

  return (
    <>
    <div>UseEffectTest3</div>
    <button type='button' onClick={() => {
      setNum1(num1 + 1);
    }}>num1 변경</button>

     <button type='button' onClick={() => {
      setNum2(num2 + 1);
    }}>num2 변경</button>
    </>
   
  )
}

export default UseEffectTest3