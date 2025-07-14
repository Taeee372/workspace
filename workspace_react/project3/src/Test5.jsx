import React, { useState } from 'react'

const Test5 = () => {
  const [man, setMan] = useState({
    name : '김자바',
    age : 20,
    addr : '울산시'
  });

  return (
    <div>
      <h3>이름 : {man.name}</h3>
      <h3>나이 : {man.age}</h3>
      <h3>주소 : {man.addr}</h3>

      <button type='button' onClick={() => {
        const copyMan = {...man, name : '홍길동'};
        setMan(copyMan); 
     }}>이름을 홍길동으로 변경</button>

      <button type='button' onClick={() =>{
        const copyMan = {...man, age : 30};
        setMan(copyMan);
      }}>나이를 30으로 변경</button>
      
      
      <button type='button' onClick={() => {
        const copyMan = {...man, addr : '서울시'};
        setMan(copyMan);
      }}>주소를 서울시로 변경</button>
    </div>
  )
}

export default Test5