import axios from 'axios'
import React, { useEffect, useState } from 'react'

//자바에서 전달받은 학생의 이름, 국어, 영어 정보를 화면에 표현하시오.

const Axios_3 = () => {
  
  //status 변수의 초기값은 최종데이터의 자료형과 일치시켜주는 게 좋음!
  const [student, setStudent] = useState({});

  useEffect(() => {
     axios.get('/api/getStu')
    .then((res) => {
      console.log(res.data);
      setStudent(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);


  return (
    <>
    <div>이름 : {student.name}</div>
    <div>국어 : {student.korScore}</div>
    <div>영어 : {student.engScore}</div>
    </>
   
  )
}

export default Axios_3