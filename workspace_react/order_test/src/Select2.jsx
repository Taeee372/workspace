import React, { useState } from 'react'

const Select2 = () => {

  const [stu, setStu] = useState({
    'name' : '',
    'age' : '',
    'grade' : '1'
  });

  //input 및 select가 변경될 때마다 실행하는 함수
  const handleStu = (e) => {
    setStu({
      ...stu,
      [e.target.name] : e.target.value
    })
  }

  console.log(stu);

  return (
    <div>
      이름 <input name='name' type="text" value={stu.name} onChange={e => handleStu(e)} /> <br />
      나이 <input name='age' type="text" value={stu.age} onChange={e => handleStu(e)} /> <br />
      학년 <select name='grade' value={stu.grade} onChange={e => handleStu(e)}>
            <option value="1">1학년</option>
            <option value="2">2학년</option>
            <option value="3">3학년</option>
            <option value="4">4학년</option>
          </select>
    </div>
  )
}

export default Select2