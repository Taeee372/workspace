import React, { useState } from 'react'

const Form1 = () => {

  const [form, setform] = useState({
    'id' : '',
    'pw' : '',
    'hobby' : '',
    'gender' : 'man',
    'hello' : ''
  });

  console.log(form);

  const handleForm = (e) => {
    setform({
      ...form,
      [e.target.name] : e.target.value 
    })
  };

  return (
    <div>
      아이디 <input name='id' type="text" value={form.id} onChange={e => handleForm(e)}/> <br />
      비번 <input name='pw' type="password" value={form.pw} onChange={e => handleForm(e)}/> <br />
      취미 <select name='hobby' value={form.hobby} onChange={e => handleForm(e)}>
            <option value="">선택하세요</option>
            <option value="1">운동</option>
            <option value="2">게임</option>
            <option value="3">코딩</option>
          </select> <br />
      성별 <input name='gender' type="radio" 
                 value={'man'} 
                 checked={form.gender === 'man'}
                 onChange={e => handleForm(e)}/> 남
           <input name='gender' type="radio" 
                  value={'woman'} 
                  checked={form.gender === 'woman'}
                  onChange={e => handleForm(e)}/> 여 <br />
      인사말 <textarea name='hello' cols={50} rows={5} 
                      value={form.hello} onChange={e => handleForm(e)}></textarea>
    </div>
  )
}

export default Form1