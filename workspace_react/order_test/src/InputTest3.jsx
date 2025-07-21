import axios from 'axios';
import React, { useState } from 'react'

//이름, 국어점수, 영어점수, 주소 등 4개의 데이터를 입력받을 수 있는 input 태그 4개 생성 ㅇ
//이때, 이름과 주소의 초기값은 빈 문자열로 지정하고, 국어, 영어 점수의 초기값은 0 ㅇ

//1. jsx에서 input 태그에 입력받은 4개의 데이터를 버튼 클릭 시spring으로 전달하고, ㅇ
//Spring에서는 전달받은 데이터를 출력하면 됨 ㅇ
//Controller 클래스는 새로 만들 필요 없음 ㅇ
//전달되는 4개의 데이터를 받기 위한 무언가... DTO겠지 알아서 작성 ㅇ

const InputTest3 = () => {

  const [studentInfo, setStudentInfo] = useState({
    'name' : '',
    'korScore' : 0,
    'engScore' : 0, 
    'addr' : ''
  });

  console.log(studentInfo);

  const regStudent = () => {
    axios.post('/api/students', studentInfo)
    .then(res => console.log(res.data))
    .catch(error => console.log(error));
  };

  return (
    <div>
      <div>
        이름 : <input value={studentInfo.name} type="text" onChange={e => {
          setStudentInfo({
            ...studentInfo,
            name : e.target.value
          });
        }} /> <br />
        국어점수 : <input value={studentInfo.korScore} type="text" onChange={e => {
          setStudentInfo({
            ...studentInfo,
            korScore : e.target.value
          })
        }} /> <br />
        영어점수 : <input value={studentInfo.engScore} type="text" onChange={e => {
          setStudentInfo({
            ...studentInfo,
            engScore : e.target.value
          })
        }} /> <br />
        주소 : <input value={studentInfo.addr} type="text" onChange={e => {
          setStudentInfo({
            ...studentInfo,
            addr : e.target.value
          })
        }} /> <br />
        <button type='button' onClick={(e) => regStudent()}>등록</button>
      </div> 
    </div>
  )
}

export default InputTest3