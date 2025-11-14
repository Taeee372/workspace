const goDelete = (boardNum) => {
  const result = confirm('게시글을 삭제할까요?');

  if(result) location.href = `/board/delete/${boardNum}`;
}

const goList = () => {
  //웹브라우저의 뒤로가기 버튼과 같은 역할
  history.back();

  //location.href = '/board';
}

const goUpdate = (boardNum) => {
  location.href = `/board/update/${boardNum}`;
}