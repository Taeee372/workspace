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
  }
}