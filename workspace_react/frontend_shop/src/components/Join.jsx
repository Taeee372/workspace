import React, { useState } from 'react'
import Modal from '../common/Modal'
import Input from '../common/Input'
import Button from '../common/Button'
import styles from './Join.module.css'
import Select from '../common/Select'

const Join = ({isOpenJoin, onClose}) => {

  const [memInfo, setMemInfo] = useState({
    'memId' : '',
    'memPw' : '',
    'pwConfirm' : '',
    'memName' : '',
    'memTel' : '',
    'memEmail' : '',
    'memAddr' : '',
    'addrDetail' : ''
  })

  const handleMemInfo = (e) => {
    setMemInfo({
      ...memInfo,
      [e.target.name] : e.target.value
    })
  }

  console.log(memInfo);

  return (
    <Modal
      isOpen={isOpenJoin}
      title='회원가입'
      size='400px'
      onClose={onClose}
    >
      <div className={styles.container}>
        <div>
          <p>아이디</p>
          <div className={styles.id_div}>
            <Input size='70%' name='memId' value={memInfo.memId} onChange={e => handleMemInfo(e)}/>
            <Button size='30%' title='중복 확인'/>
          </div>
        </div>
        <div>
          <p>비밀번호</p>
          <Input size='100%' type='password' name='memPw' value={memInfo.memPw} onChange={e => handleMemInfo(e)}/>
        </div>
        <div>
          <p>비밀번호 확인</p>
          <Input size='100%' type='password'  name='pwConfirm' value={memInfo.pwConfirm} onChange={e => handleMemInfo(e)}/>
        </div>
        <div>
          <p>회원명</p>
          <Input size='100%'  name='memName' value={memInfo.memName} onChange={e => handleMemInfo(e)}/>
        </div>        
        <div className={styles.tel_div}>
          <p>연락처</p>
          <div className={styles.tel_input}>
            <Input size='100%'/>
            <Input size='100%'/>
            <Input size='100%'/>
          </div>
        </div>        
        <div>
          <p>이메일</p>
          <div className={styles.email_div}>
            <Input size='100%'/>
            <Select size='100%'>
              <option>선택</option>
              <option>@gmail.com</option>
              <option>@naver.com</option>
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
        <Button size='100%' title='회원가입'/>
      </div>    
    </Modal>
  )
}

export default Join