
const goWriteForm = () => {
  //페이지 이동 코드
  location.href = '/board/writeForm';
}

const goDetail = (boardNum) => {
  location.href = `/board/detail/${boardNum}`;
}