import React from 'react'

const Content = () => {
  return (
    <div>
      <hr />
      <h4>개인정보</h4>
      <p>
        <span>이름 </span>
        <input type="text" placeholder='공백없이 입력하세요.'/>
      </p>
      <p>
        <span>연락처 </span>
        <input type="text"/>
      </p>
      <h4>지원 분야</h4>
      <p>
        <input type="radio" /> 웹퍼블리싱 <br />
        <input type="radio" /> 웹 프론트앤드<br />
        <input type="radio" /> 모바일 앱
      </p>
      <h4>지원동기</h4>
      <textarea cols={60} rows={5}></textarea>
    </div>
  )
}

export default Content