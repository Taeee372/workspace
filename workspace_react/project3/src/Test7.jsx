import React, { useState } from 'react'
import './Test7.css'

const Test7 = () => {
  const [isShow, setIsShow] = useState(false);
  return (
    <div className='test7_container' >
      <div 
      onMouseEnter={() => setIsShow(true)}
      onMouseLeave={() => setIsShow(false)}
      >
        마우스를 올리면 숨겨진 글자가 보여요
      </div>
      
      {isShow ? <div>Hello React!</div> : null}
      
    </div>
  )
}

export default Test7