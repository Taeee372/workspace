import React, { useEffect, useState } from 'react'
import Modal from '../common/Modal'
import Input from '../common/Input'
import Button from '../common/Button'
import styles from './Login.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = ({isOpenLogin, onClose}) => {

  const nav = useNavigate();

  //입력한 아이디, 비번 저장할 state 변수
  const [loginData, setLoginData] = useState({
    'memId' : '',
    'memPw' : '',
    'memRole' : ''
  });

  //입력한 데이터를 저장하는 변수
  const handleLoginData = (e) => {
    setLoginData({
      ...loginData, 
      [e.target.name] : e. target.value
    })
  }

  //로그인 함수
  //get에서 데이터를 2개 이상 가져갈 때 key값은 params로 고정되어 있음
  //최소 2개부터 가져갈 수 있으니 value값은 객체 형식으로 들어와야 한다
  const login = () => {
    axios.get(`/api/members/login`, {params : loginData})
    //리턴된 결과값이 null이면 빈문자 가져옴
    .then(res => {
      console.log(res.data)

      if(res.data){ //가능
        alert('로그인 가능');
          //로그인 한 회원이 관리자라면 상품 등록 페이지로 이동
          if(res.data.memRole === 'ADMIN'){
            nav('/admin/reg-book')
          }
          //로그인 한 회원이 일반 유저라면 상품 목록 페이지로 이동
          else{
            //모달창을 닫아줌 + 모달 안 input 태그를 초기화
            onClose();
            setLoginData({
              'memId' : '',
              'memPw' : ''
            })
            nav('/')
          }
      }
      else{
       alert('아이디 혹은 비밀번호를 확인해주세요.');
      }
    }) 
    .catch(e => console.log(e));
  }


  return (
    <Modal 
      isOpen={isOpenLogin}
      title='LOGIN'
      size='300px'
      onClose={() => {
        onClose();
        setLoginData({
          'memId' : '',
          'memPw' : ''
        })
      }}
      
    >
      <div className={styles.login_div}>

        <div className={styles.login_input}>
          <Input size='100%' placeholder='Input your ID' 
                 name='memId' value={loginData.memId} onChange={e => handleLoginData(e)}
          />
          <span>
            <i className="bi bi-person-fill"></i>
          </span>
        </div>

        <div className={styles.login_input}>
          <Input size='100%' placeholder='Input your Password' type="password"
                 name='memPw' value={loginData.memPw} onChange={e => handleLoginData(e)}
          />
          <span>
            <i className="bi bi-lock-fill"></i>
          </span>
        </div>

        <Button size='100%' title='Sign In' onClick={e => login()}/>  
      </div>
    </Modal>
  )
}

export default Login