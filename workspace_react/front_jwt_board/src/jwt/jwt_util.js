import axios from "axios";
import { jwtDecode } from "jwt-decode";

//axios 객체
export const axiosInstance = axios.create({
  baseURL : 'http://localhost:8080',
  withCredentials : true
});

//요청 인터셉터
//요청마다 자동으로 토큰을 가져가게 설정
axiosInstance.interceptors.request.use(
  //인터셉터에서 실행할 내용 작성
  config => {
    const token = localStorage.getItem('accessToken');
    if(token){
      //헤더에 토큰 담기
      config.headers.Authorization = token;
    }
    return config;
  }, 
  //인터셉터 실행 중 오류 발생 시 진행할 코드
  //에러 발생 시 axios 실패로 간주하겠다
  error => Promise.reject(error)
)

//토큰이 존재하는지 검사하는 함수
export const getToken = () => {
  const token = localStorage.getItem('accessToken');
  console.log(token);

  if(token == null) return null;

  //jwt 토큰의 payload 부분만 해석해서 객체타입으로 리턴
  //토큰의 만료일(exp)
  const {exp} = jwtDecode(token);

  //현재 날짜 및 시간
  const currentDate = Date.now() / 1000;  //밀리세컨드 잘라내기 now만 쓰면 1.0000초 이렇게 나옴

  //만료일이 지났으면...
  if(exp < currentDate){
    //토큰 삭제
    localStorage.removeItem('accessToken');
    return null;
  }
  else{
    return token;
  }
}