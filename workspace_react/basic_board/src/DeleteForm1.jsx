import axios from 'axios';
import React, { useState } from 'react'

const DeleteForm1 = () => {

  //input 태그에 입력한 글번호를 가진 게시글을 삭제하는 기능
  //만약 삭제된 게시글이 없다면 alert으로 '일치하는 글번호가 없습니다'를 띄우고,
  //삭제를 성공했다면 '정상적으로 삭제되었습니다'를 alert()로 띄우자.

  //들어갈 데이터 하나밖에 없으니 객체 만들 필요 없슴
  //name 값은 함수가 있을 때 필요한 거

  const [boardNum, setBoardNum] = useState('');

  
  const deleteBoard = () => {
    //axios에서 두 번째 매개변수가 있는 건 put과 post뿐 / delete와 insert는 못 넣는다 ->url만 넣을 수 있음
    axios.delete(`/api/boards/${boardNum}`)
    .then(res => alert(res.data === 1 ? '정상적으로 삭제되었습니다' : '일치하는 글번호가 없습니다'))
    .catch(error => console.log(error));
  }

  return (
    <div>
      <h3>게시글 삭제1</h3>
      글번호 <input type="text" value={boardNum} onChange={e => {setBoardNum(e.target.value);}}/> <br />
      <button type='button' onClick={e => deleteBoard()}>삭제</button>
    </div>
  )
}

export default DeleteForm1