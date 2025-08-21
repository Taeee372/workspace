import React, { useEffect, useState } from 'react'
import Modal from '../common/Modal'
import Input from '../common/Input'
import Button from '../common/Button'
import styles from './Join.module.css'
import Select from '../common/Select'
import axios from 'axios'
import { handleErrorMsg } from '../validate/joinValidate'
import { useDaumPostcodePopup } from 'react-daum-postcode'

const Join = ({isOpenJoin, onClose}) => {
  //다음 주소록 팝업 생성 함수
  const open = useDaumPostcodePopup('//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js');

  //유효성 검사결과 에러 메세지를 저장할 state 변수
  const [errorMsg, setErrorMsg] = useState({
    'memId' : '', 
    'memPw' : '',
    'confirmPw' : ''
  })

  //회원가입 버튼사용 가능 여부를 저장하는 state 변수
  const [isDisable, setIsDisable] = useState(true);

  //회원가입 시 입력한 내용을 저장할 state 변수
  const [joinData, setjoinData] = useState({
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
  const handlejoinData = (e) => {
    //이메일을 변경했으면
    if(e.target.name === 'firstEmail' || e.target.name ==='secondEmail'){
       setjoinData({
        ...joinData,
        [e.target.name] : e.target.value,
        'memEmail' : e.target.name === 'firstEmail' ? e.target.value + joinData.secondEmail : joinData.firstEmail + e.target.value
      })
    }

    //이메일을 제외한 다른 데이터를 변경했으면 
    else{
      setjoinData({
      ...joinData,
      [e.target.name] : e.target.value
      })
    } 
  }

  // console.log(joinData);

  //연락처 변경 시 실행 함수
  const handelmemTelArr = (e, index) => {
    // .splice를 바로 뽑으면 결과값이 나오는 게 아니라 날라간 데이터가 먼저 출력됨
    // const arr = [1, 2, 3]   console.log(arr.splice(0, 1, 10)) 이렇게 친다고 치면
    // [10, 2, 3] 이 출력되는 게 아니라 날라간 데이터인 0번째 1이 출력됨 => [1]
    // so [10, 2, 3]을 출력하고 싶으면 arr.splice(0, 1, 10); 을 먼저 실행해준 다음
    // console.log(arr); 을 출력해야함
    joinData.memTelArr.splice(index, 1, e.target.value);
    setjoinData({
    ...joinData,
    'memTelArr' : joinData.memTelArr
    })
  }

  //회원가입 버튼 클릭 시 실행 함수
  const join = () => {
    axios.post('/api/members', joinData)
    .then(res => {
      alert('환영합니다!');

      //모달창 닫기
      onClose();

      //입력한 값을 초기화 시키는 함수
        setjoinData({
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
    axios.get(`/api/members/checkId/${joinData.memId}`)
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

  //주소록 띄우기 함수
  const handlePost = () => {
    open({onComplete : (data) => {
    //매개변수 data 안에 선택한 주소의 모든 정보가 객체형태로 들어있음
      setjoinData({
        ...joinData,
        'memAddr' : data.address //도로명 주소
      }) 
    }})
  }


  return (
    <Modal
      isOpen={isOpenJoin} //isOpenJoin으로 바꾸기
      title='회원가입'
      size='400px'
      onClose={() => {
        //x버튼 클릭 시 회원가입 버튼 비활성화
        setIsDisable(true);

        //x버튼 클릭 시 모달을 닫는 함수
        onClose(); 

        //입력한 값을 초기화 시키는 함수
        setjoinData({
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

        //validation error 메세지 초기화
        setErrorMsg({
          'memId' : '',
          'memPw' : '',
          'confirmPw' : ''
        });
      }}
    >
      <div className={styles.container}>
        <div>
          <p>아이디</p>
          <div className={styles.id_div}>
            <Input size='70%' name='memId' value={joinData.memId} 
                   onChange={e => {
                    handlejoinData(e);
                    setIsDisable(true);

                    //유효성 검사 결과 세팅
                    setErrorMsg({
                      ...errorMsg, 
                      'memId' : handleErrorMsg(e)
                    });
                  }}
            />
            <Button size='30%' title='중복 확인' onClick={e => checkId()}/>
          </div>
          <p className={styles.error}>{errorMsg.memId}</p>
        </div>
        <div>
          <p>비밀번호</p>
          <Input size='100%' type='password' name='memPw' value={joinData.memPw} 
                onChange={e => {
                  handlejoinData(e)

                  //유효성 검사
                  setErrorMsg({
                    ...errorMsg, 
                    'memPw' : handleErrorMsg(e),
                  });
                }}
          />
          <p className={styles.error}>{errorMsg.memPw}</p>
        </div>
        <div>
          <p>비밀번호 확인</p>
          <Input size='100%' type='password' name='confirmPw' value={joinData.confirmPw} 
                onChange={e => {
                  handlejoinData(e)
                  
                   //유효성 검사
                  setErrorMsg({
                    ...errorMsg, 
                    'confirmPw' : handleErrorMsg(e, joinData)
                  });
                }}
          />
          <p className={styles.error}>{errorMsg.confirmPw}</p>
        </div>
        <div>
          <p>회원명</p>
          <Input size='100%' name='memName' value={joinData.memName} onChange={e => handlejoinData(e)}/>
        </div>        
        <div className={styles.tel_div}>
          <p>연락처</p>
          <div className={styles.tel_input}>
            <Input size='100%' name='memTelArr' value={joinData.memTelArr[0]} onChange={e => handelmemTelArr(e, 0)}/> 
            <Input size='100%' name='memTelArr' value={joinData.memTelArr[1]} onChange={e => handelmemTelArr(e, 1)}/>
            <Input size='100%' name='memTelArr' value={joinData.memTelArr[2]} onChange={e => handelmemTelArr(e, 2)}/>
          </div>
        </div>        
        <div>
          <p>이메일</p>
          <div className={styles.email_div}>
            <Input size='100%' name='firstEmail' value={joinData.firstEmail} onChange={e => handlejoinData(e)}/>
            <Select size='100%' name='secondEmail' value={joinData.secondEmail} onChange={e => handlejoinData(e)}>
              <option value=''>선택</option>
              <option value='@gmail.com'>@gmail.com</option>
              <option value='@naver.com'>@naver.com</option>
            </Select>
          </div>
        </div> 
         <div>
          <p>주소</p>
          <div className={styles.addr_div}>
            <Input size='70%' name='memAddr' value={joinData.memAddr} 
                   onChange={e => handlejoinData(e)} readOnly={true} //readOnly={true} : 읽기 전용 
                   onClick={() => handlePost()}
            />
            <Button size='30%' title='검색' onClick={() => handlePost()}/>
          </div>
          <Input size='100%' name='addrDetail' value={joinData.addrDetail} onChange={e => handlejoinData(e)}/>
        </div>   
        <Button size='100%' title='회원가입' onClick={e => join()} disabled={isDisable} /* 처음엔 사용 불가 */ />
        {/* disabled={true} => 사용할 수 없다 */}
      </div>    
    </Modal>
  )
}

export default Join