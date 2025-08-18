import React, { useEffect, useState } from 'react'
import Modal from '../common/Modal'
import Input from '../common/Input'
import Button from '../common/Button'
import styles from './Join.module.css'
import Select from '../common/Select'
import axios from 'axios'

const Join = ({isOpenJoin, onClose}) => {

  //아이디 유효성 검사 결과를 저장할 state 변수
  const [errorMsg, setErrorMsg] = useState('');

  //비밀번호 유효성 검사 
  const [errorPwMsg, setErrorPwMsg] = useState('');

  //회원가입 버튼사용 가능 여부를 저장하는 state 변수
  const [isDisable, setIsDisable] = useState(true);

  //회원가입 시 입력한 내용을 저장할 state 변수
  const [memInfo, setMemInfo] = useState({
    'memId' : '',
    'memPw' : '',
    'confirmPw' : '',
    'memName' : '',
    'memTelArr' : ['', '', ''],
    'firstEmail' : '',
    'secondEmail' : '',
    'memEmail' : '',
    'memAddr' : '',
    'addrDetail' : ''
  })

  //값 입력 시 실행할 함수
  const handleMemInfo = (e) => {
    //이메일을 변경했으면
    if(e.target.name === 'firstEmail' || e.target.name ==='secondEmail'){
       setMemInfo({
        ...memInfo,
        [e.target.name] : e.target.value,
        'memEmail' : e.target.name === 'firstEmail' ? e.target.value + memInfo.secondEmail : memInfo.firstEmail + e.target.value
      })
    }

    //이메일을 제외한 다른 데이터를 변경했으면 
    else{
      setMemInfo({
      ...memInfo,
      [e.target.name] : e.target.value
      })
    } 
  }

  // console.log(memInfo);

  //연락처 변경 시 실행 함수
  const handelmemTelArr = (e, index) => {
    // .splice를 바로 뽑으면 결과값이 나오는 게 아니라 날라간 데이터가 먼저 출력됨
    // const arr = [1, 2, 3]   console.log(arr.splice(0, 1, 10)) 이렇게 친다고 치면
    // [10, 2, 3] 이 출력되는 게 아니라 날라간 데이터인 0번째 1이 출력됨 => [1]
    // so [10, 2, 3]을 출력하고 싶으면 arr.splice(0, 1, 10); 을 먼저 실행해준 다음
    // console.log(arr); 을 출력해야함
    memInfo.memTelArr.splice(index, 1, e.target.value);
    setMemInfo({
    ...memInfo,
    'memTelArr' : memInfo.memTelArr
    })
  }

  //회원가입 버튼 클릭 시 실행 함수
  const join = () => {
    axios.post('/api/members', memInfo)
    .then(res => {
      alert('환영합니다!');

      //모달창 닫기
      onClose();

      //입력한 값을 초기화 시키는 함수
        setMemInfo({
          'memId' : '',
          'memPw' : '',
          'confirmPw' : '',
          'memName' : '',
          'memTelArr' : ['', '', ''],
          'firstEmail' : '',
          'secondEmail' : '',
          'memEmail' : '',
          'memAddr' : '',
          'addrDetail' : ''
        })
    })
    .catch(e => console.log(e));
  }

  //아이디 사용 가능 여부 확인 함수
  const checkId = () => {
    axios.get(`/api/members/checkId/${memInfo.memId}`)
    .then(res => {
      if(res.data){
        alert('사용 가능');

        //회원가입 버튼 활성화
        setIsDisable(false);

      }
      else{
        alert('사용 불가능');
      }
    })
    .catch(e => console.log(e));
  
  }


  return (
    <Modal
      isOpen={true} //isOpenJoin으로 바꾸기
      title='회원가입'
      size='400px'
      onClose={() => {
        //x버튼 클릭 시 회원가입 버튼 비활성화
        setIsDisable(true);

        //x버튼 클릭 시 모달을 닫는 함수
        onClose(); 

        //입력한 값을 초기화 시키는 함수
        setMemInfo({
          'memId' : '',
          'memPw' : '',
          'confirmPw' : '',
          'memName' : '',
          'memTelArr' : ['', '', ''],
          'firstEmail' : '',
          'secondEmail' : '',
          'memEmail' : '',
          'memAddr' : '',
          'addrDetail' : ''
        })
      }}
    >
      <div className={styles.container}>
        <div>
          <p>아이디</p>
          <div className={styles.id_div}>
            <Input size='70%' name='memId' value={memInfo.memId} 
                   onChange={e => {
                    handleMemInfo(e);
                    setIsDisable(true);

                    //아이디 유효성 검사(정규식 사용)
                    //4~8글자, 영문과 숫자만 가능
                    const memIdRegex = /^[a-zA-Z0-9]{4,8}$/;

                    //유효성 검사
                    // if(memInfo.memId === ''){ 
                    // => state 변경 함수가 비동기 함수라서 memId에 아직 값이 들어가있지 않음 so memId로는 판별 불가

                    // if(e.target.value === '') trusy falsy에 의해 아래와 같은 말
                    if(!e.target.value){ //빈 문자열이면...
                      setErrorMsg('아이디는 필수입력입니다.');
                    }
                    else if(e.target.value.length < 4 || e.target.value.length > 8){
                      setErrorMsg('아이디는 4~8글자여야 합니다.')
                    }
                    else if(!memIdRegex.test(e.target.value)){
                      setErrorMsg('아이디는 영문, 숫자만 가능합니다.');
                    }
                    else{
                      setErrorMsg('');
                    }

                  }}
            />
            <Button size='30%' title='중복 확인' onClick={e => checkId()}/>
          </div>
          <p className={styles.error}>{errorMsg}</p>
        </div>
        <div>
          <p>비밀번호</p>
          {/* 1. 필수입력  2. 6~12글자  3. 영문+숫자 조합만 가능(정규식) */}
          <Input size='100%' type='password' name='memPw' value={memInfo.memPw} 
                 onChange={e => {
                  handleMemInfo(e)

                  //비번 유효성 검사
                  const pwRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,12}$/;
                  if(!e.target.value){
                    setErrorPwMsg('비밀번호는 필수입력입니다.');
                  }
                  else if(e.target.value.length < 6 || e.target.value.length > 12){
                    setErrorPwMsg('비밀번호는 6~12글자 사이여야 합니다.');
                  }
                  else if(!pwRegex.test(e.target.value)){
                    setErrorPwMsg('비밀번호는 영문과 숫자를 모두 포함해야 합니다.');
                  }
                  else{
                    setErrorPwMsg('');
                  }
                }}
          />
          <p className={styles.error}>{errorPwMsg}</p>
        </div>
        <div>
          <p>비밀번호 확인</p>
          <Input size='100%' type='password' name='confirmPw' value={memInfo.confirmPw} onChange={e => handleMemInfo(e)}/>
        </div>
        <div>
          <p>회원명</p>
          <Input size='100%' name='memName' value={memInfo.memName} onChange={e => handleMemInfo(e)}/>
        </div>        
        <div className={styles.tel_div}>
          <p>연락처</p>
          <div className={styles.tel_input}>
            <Input size='100%' name='memTelArr' value={memInfo.memTelArr[0]} onChange={e => handelmemTelArr(e, 0)}/> 
            <Input size='100%' name='memTelArr' value={memInfo.memTelArr[1]} onChange={e => handelmemTelArr(e, 1)}/>
            <Input size='100%' name='memTelArr' value={memInfo.memTelArr[2]} onChange={e => handelmemTelArr(e, 2)}/>
          </div>
        </div>        
        <div>
          <p>이메일</p>
          <div className={styles.email_div}>
            <Input size='100%' name='firstEmail' value={memInfo.firstEmail} onChange={e => handleMemInfo(e)}/>
            <Select size='100%' name='secondEmail' value={memInfo.secondEmail} onChange={e => handleMemInfo(e)}>
              <option value=''>선택</option>
              <option value='@gmail.com'>@gmail.com</option>
              <option value='@naver.com'>@naver.com</option>
            </Select>
          </div>
        </div> 
         <div>
          <p>주소</p>
          <div className={styles.addr_div}>
            <Input size='70%' name='memAddr' value={memInfo.memAddr} onChange={e => handleMemInfo(e)}/>
            <Button size='30%' title='검색'/>
          </div>
          <Input size='100%' name='addrDetail' value={memInfo.addrDetail} onChange={e => handleMemInfo(e)}/>
        </div>   
        <Button size='100%' title='회원가입' onClick={e => join()} disabled={isDisable} /* 처음엔 사용 불가 */ />
        {/* disabled={true} => 사용할 수 없다 */}
      </div>    
    </Modal>
  )
}

export default Join