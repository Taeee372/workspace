import React, { useState } from 'react'

const InputTest4 = () => {

  const man = {
    name : 'kim',
    age : 20
  }

  console.log(man.name);
  console.log(man.age);
  console.log(man['name']);
  console.log(man['age']);

  const v = 'age';
  man.v; // man.v -> v라는 키에 대한 value값 가져오겠습니다. 'age'가 들어갔다는 게 인식이 안됨
  man[v]; //man['age'] <-변수를 키값으로 사용할 수 있다.


  //input 태그에 입력한 모든 내용을 저장하기 위한 state 변수
  const [inputData, setInputDate] = useState({
    'name' : '', 
    'age' : '',
    'addr' : ''
  });

  console.log(inputData);

  //input 태그에 값을 입력할 때마다 실행시키는 함수
  const handleInputData = (e) => {
    setInputDate({
      ...inputData,
      [e.target.name] : e.target.value
      //여기서 []는 배열을 의미하는 게 아님! 변수를 키값으로 사용하기 위해 넣은 대괄호
      //name은 키값을 나타내는 게 아니라 input태그 안에 있는 name 속성을 의미하는 것
    })
  }

  return (
    <div>
      이름 
      <input 
        name="name"
        type="text" 
        value={inputData.name} 
        onChange={e => handleInputData(e)} 
        /> <br />
        
      나이 
      <input name='age' type="text" value={inputData.age} onChange={e => handleInputData(e)} /> <br />
      
      주소 
      <input type="text" value={inputData.addr} onChange={e => handleInputData(e)} /> <br />
    </div>
  )
}

export default InputTest4