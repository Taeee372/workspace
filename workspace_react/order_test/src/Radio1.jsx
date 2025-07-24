import React, { useState } from 'react'


//라디오는 선택한 태그의 value값이 저장된다.
//라디오 값을 저장할 state 변수의 초기값은 최초로 선택할 태그의 value값으로 지정
const Radio1 = () => {

  //라디오에서 선택한 값을 저장할 state 변수
  const [grade, setGrade] = useState('B');
  console.log(grade);

  return (
    <div>
      {/* radio 태그는 name 속성이 같으면 하나만 체크됨 */}
      {/* 
        checked = {grade === 'A'} : grade가 A와 같으면 체크하겠습니다 
        초기값이 'B'로 설정돼있으면 처음화면에 아무것도 체크돼있지 않음
        초기값이 'A'로 설정돼있으면 처음화면에 A를 value로 가진 선택지가 체크되어있다
      */}
      <p>개발은 즐겁다?</p>
      <input type="radio" name='grade' 
             value={'A'} checked={grade === 'A'}
             onChange={e => setGrade(e.target.value)}/> 상 <br />

      <input type="radio" name='grade' 
             value={'B'} checked={grade === 'B'}
             onChange={e => setGrade(e.target.value)}/> 중 <br />

      <input type="radio" name='grade' 
             value={'C'} checked={grade === 'C'}
             onChange={e => setGrade(e.target.value)}/> 하 <br />
    </div>
  )
}

export default Radio1