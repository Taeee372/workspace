import React, { useState } from 'react'

const Checkbox = () => {

  //체크박스에서 선택한 데이터를 저장할 state 변수 
  // => 체크박스는 라디오와 다르게 데이터를 여러 개 저장할 수 있기 때문에 무조건 배열로
  // const [fruits, setFruits] = useState([]) //체크박스 전체 해제

  //마운트 시 체크된 상태를 원하면 초기값을 지정해주면 됨 
  const [fruits, setFruits] = useState(['apple', 'orange']) 
  console.log(fruits)

  //배열에서 특정 요소를 제거하는 코드 예시
  const arr = [1, 2, 3];
  //filter함수는 배열 요소 중 특정 조건에 부합하는 데이터를 리턴시켜줌
  //문법 : 배열.filter((배열 각각의 데이터) => {return 조건})
  const result = arr.filter((num) => {return num > 1}); //[2, 3]

  //한 줄이면 중괄호를 생략할 수 있지만, 그 안에 return이 있다면 return까지 같이 생략해줘야 한다
  const result1 = arr.filter(num => num > 1);

    //arr.map((num, i) => {}) 위에 있는 num이랑 map안에 있는 num이랑 같은 의미(배열 안에 있는 각각의 데이터)


  //배열에 특정 데이터가 포함되어 있는지 확인하는 문법
  const arr1 = ['가', '나', '다']
  //arr1 배열에 '나' 라는 문자가 있습니까?
  arr1.includes('나'); //포함되어 있으면 true

  //체크박스 변경 시 실행되는 함수
  const handleCheckbox = (e) => {
    //체크 여부
    // console.log(e.target.checked);
    //체크했으면...
    if(e.target.checked){
      //체크박스의 value값을 fruits 배열에 추가한다.
      setFruits([...fruits, e.target.value])
    }
    //체크 해제했으면...
    else{
      //체크박스에 저장된 값을 제거한다.
      //data에 들어있는 값이랑 내가 체크한 값이랑 다르면 리턴, 같으면 노리턴(필터링해서 제외시킴)
      //data == 'apple', e.target.value == 'apple' => apple == apple, 같으니까 아무것도 리턴하지 않음
      //data == 'apple', e.target.value == 'orange' => apple !== orange, 다르니까 'orange' 리턴 so 배열에 'orange' 추가
      const result = fruits.filter((data) => {return data !== e.target.value})
      setFruits(result)
    }
  }

  return (
    <div>
      <input 
        type="checkbox" 
        value={'apple'} 
        checked={fruits.includes('apple')}  //checked={true} : 마운트 시 체크되어있음 / 현재 fruits 배열에 'apple'이 드가있으니 true
        onChange={e => handleCheckbox(e)}
      />사과

      <input 
        type="checkbox"
        value={'orange'} 
        checked={fruits.includes('orange')}
        onChange={e => handleCheckbox(e)}
      />오렌지

      <input 
        type="checkbox" 
        value={'banana'} 
        checked={fruits.includes('banana')}
        onChange={e => handleCheckbox(e)}
      />바나나
    </div>
  )
}

export default Checkbox