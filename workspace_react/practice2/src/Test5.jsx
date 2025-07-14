import React, { useState } from 'react'

const Test5 = () => {
  const [info, setInfo] = useState({
    name : '김자바',
    age : 20,
    addr : '울산시'
  });

  return (
    <div>
      <h3>이름 : {info.name}</h3>
      <h3>나이 : {info.age}</h3>
      <h3>주소 : {info.addr}</h3>

      <button type='button' onClick={() => {
        const copyInfo = {
          ...info,
          name : '홍길동'
        };
        setInfo(copyInfo);
      }}>이름을 홍길동으로 변경</button>

      <button type='button' onClick={() => {
        const copyInfo = {
          ...info,
          age : 30
        };
        setInfo(copyInfo);
      }}>나이를 30으로 변경</button>

      <button type='button' onClick={() => {
        const copyInfo = {
          ...info,
          addr : '서울시'
        };
        setInfo(copyInfo);
      }}>주소를 서울시로 변경</button>
    </div>
  )
}

export default Test5