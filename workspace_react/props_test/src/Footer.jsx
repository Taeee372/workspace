import React from 'react'

const Footer = (props) => {
  console.log(`cnt = ${props.cnt}`)
  return (
   <>
      <div>Footer</div>
      <button type='button' onClick={() => {
        props.setCnt(props.cnt + 1);
        //cnt 값이 올라가면 Footer 컴포넌트가 리렌더링되는 게 아니라 
        //cnt의 useState가 선언된 App 컴포넌트가 리렌더링되는 것
      }}>Footer 버튼</button>
   </>
  )
}

export default Footer