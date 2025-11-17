import axios from "axios";

/**
 * 회원가입 API
 * @param {*} joinData 
 */
export const join = async (joinData) => {
  try{
    await axios.post('/api/member', joinData);
  }catch(e){
    console.log('회원가입 API 오류, join()');
    console.log(e);
    throw e;
  }
}

//로그인 API
export const login = async (loginData) => {
  try{
    const response = await axios.post('/api/member/login', loginData);

    //응답헤더에 담긴 토큰 정보 추출 / 받을 때는 authorization 소문자로 받아야 함
    const accessToken = response.headers['authorization'];
    console.log(accessToken);

    //전달받은 토큰을 localStorage에 저장
    localStorage.setItem('accessToken', accessToken);

  }catch(e){
    if(e.status === 401){
      alert('아이디와 비번을 확인해주세요');
    }
    else{
      console.log(e);
      throw e;
    }
  
  }
}