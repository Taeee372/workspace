import React from 'react'
// ./ : 현재 내가 보고 있는 폴더
// ../ : 한 단계 상위 폴더로 가세요
// jsx는 확장자 생략해도 찾아와준다
import Modal from '../common/Modal'
import Input from '../common/Input'
import Button from '../common/Button'
import styles from './Login.module.css'

const Login = ({isOpenLogin, onClose}) => {
  return (
    <Modal 
      isOpen={isOpenLogin}
      title='LOGIN'
      size='300px'
      onClose={onClose}
    >
    <div className={styles.login_div}>
        <div className={styles.login_input}>
          <Input 
            size='100%'
            placeholder='ID'
          />
          <span>
            <i className="bi bi-person-fill"></i>
          </span>
        </div>

        <div className={styles.login_input}>
          <Input 
            size='100%'
            placeholder='Password'
            type='password'
          />
          <span>
            <i className="bi bi-lock-fill"></i>
          </span>
        </div>

        <Button 
          size='100%'
          title='Sign In'
        />
    </div>
    </Modal>
  )
}

export default Login