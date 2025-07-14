import React, { useState } from 'react'
import './Test4.css'

const Test4 = () => { 
  const [arr, setArr] = useState([0, 0, 0]);

  //숫자 클릭 시 실행되는 함수
  function changeNum(index){
     const copyArr = [...arr];
     copyArr[index] = copyArr[index] + 1;
     setArr(copyArr);
  }

  return (

    <div className='test4_container'>
      <div onClick={() => changeNum(0)}>{arr[0]}</div>
      <div onClick={() => changeNum(1)}>{arr[1]}</div>
      <div onClick={() => changeNum(2)}>{arr[2]}</div>
    </div>
  )
}

export default Test4



/*

  arr[0] = 1; | arr = [1, 0, 0]; arr이 바라보고 있는 주소는 같기 때문에 arr의 값이 변한 게 아님
  const copyArr = arr; 이건 안 됨! 
  /굳이 copyArr을 만든 이유 : 원래 데이터는 웬만하면 건들지 않는 게 좋음

  const [cnt1, setCnt1] = useState(0);
  const [cnt2, setCnt2] = useState(0);
  const [cnt3, setCnt3] = useState(0);

   return (
    
     <div className='test4_container'>
       <div onClick={() => {
         setCnt1(cnt1 + 1);
       }}>{cnt1}</div>
       <div onClick={() => {
         setCnt2(cnt2 + 1);
       }}>{cnt2}</div>
       <div onClick={() => {
         setCnt3(cnt3 + 1);
       }}>{cnt3}</div>
     
     </div>
    )

  */