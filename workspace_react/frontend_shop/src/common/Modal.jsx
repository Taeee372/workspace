import React from 'react'
import styles from './Modal.module.css'

//props
// 1. size => 모달의 크기 지정
// 2. title => 모달의 제목 지정
// 3. children => 모달의 내용부

//props 자리에 {size=500} 
// : props에 넘어온 게 아무것도 없으면 size에 500을 기본값으로 주겠다
//children : <컴포넌트>ㅇㅇ</컴포넌트>에서 ㅇㅇ부분의 내용이 넘어옴
const Modal = ({size='500px', title='', isOpen=false, onClose, children}) => {

  //isOpen이 false면 모달을 닫는다.
  if(!isOpen) return null;

  //컴포넌트는 return 안의 내용을 그린다.
  //return은 하나만 실행되니까 null그리라는 return이 실행되면
  //밑에 있는 return문이 실행되지 않아 빈 화면(null)을 그리는 것


  return (
    <div className={styles.modal_overlay}>
      <div 
        className={styles.modal_content}
        style={{width: size}}
      >
        <div className={styles.modal_title}>
          <button type='button' className={styles.close_btn} onClick={onClose}>x</button>
          <h4>{title}</h4>
        </div>
        <div className={styles.content_div}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal