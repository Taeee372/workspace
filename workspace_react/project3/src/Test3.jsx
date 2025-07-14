import React, { useState } from 'react'
import './Test3.css'

const Test3 = () => {
  const [btn, setBtn] = useState('광고닫기');
  const [isShow, setIsShow] = useState(true);
  return (
    <div className='test3_container'>
      <button type='button' onClick={() => {
        setBtn(btn === '광고닫기' ? '광고보기' : '광고닫기');
        setIsShow(!isShow);
      }}>{btn}</button>

      {
        isShow ? <div>'오늘 구매하시면 30% SALE!!!'</div> : null
      }

      
    </div>
  )
}


export default Test3