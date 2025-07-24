import React, { useState } from 'react'

const TextArea1 = () => {

  //텍스트박스에 입력한 데이터를 저장할 state 변수
  const [intro, setIntro] = useState('');


  console.log(intro);
  return (
    <div>
      <textarea cols={50} rows={5} 
        value={intro} 
        onChange={e => setIntro(e.target.value)}></textarea>
    </div>
  )
}

export default TextArea1