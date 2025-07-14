import React from 'react'

const EventTest = () => {
  function f1(){
    alert('버튼 클릭');
  }

  return (
    <>
      <div>EventTest</div>
      
      <button type='button' onClick={() => {
        alert(1);
      }}>버튼1</button> <br />

      <input type="text" onChange={() => {
        console.log(2);
      }}/> <br />

      <div onMouseEnter={() => alert(3)}>DIV 태그</div>

      <button type='button' onClick={() => f1()}>버튼2</button>
    </>
  )

}

export default EventTest