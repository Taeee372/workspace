//게시글과 관련된 api를 모아놓는 파일

import axios from "axios"

//게시글 목록 조회
export const getBoardListApi = async () => {
  try{
    const res = await axios.get('/api/board');
    //조회한 다음 코드 작성
    return res.data;
  }catch(e){
    console.log('게시글 목록 조회 API 조회 오류, getBoardListApi()');
    console.log(e);
  }
}

/**
 * 게시글 상세 조회 API
 * @param boardNum 게시글 번호(int)
 */
export const getBoardDetail = async (boardNum) => {
  try{
    const res = await axios.get(`/api/board/${boardNum}`);
    return res.data;
  }catch(e){
    console.log('게시글 상세 조회 API 오류, getBoardDetail()');
    console.log(e);
  }
}

/**
 * 게시글 등록 API
 * @param boardInfo {'title' : '제목 데이터', 'content' : '내용 데이터'} 
 */
export const regBoard = async (boardInfo) => {
  try{
    await axios.post('/api/board', boardInfo);
  }catch(e){
    console.log('게시글 등록 API 오류, regBoard()');
    console.log(e);
  }
}

//게시글 삭제

//게시글 수정