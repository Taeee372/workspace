import React from 'react'
import styles from './Button.module.css'

const Button = ({title='버튼', size='80px', color='seagreen', onClick}) => {
  return (
    <button 
      type='button'
      className={`${styles.btn} ${styles[color]}`}
      style={{width : size}}
      onClick={onClick}
    >{title}</button>
  )
}

export default Button

// .join
// ['a', 'b', 'c'].join('-') => 'a-b-c'
// [styles.btn, styles.btn_primary].join(' ') 
// => style='btn btn_primary' 와 같은 느낌

// 안에 들어있는 변수값을 꺼내쓰고 싶으면 [] 안에 변수명 넣어줘야 함
// color='blue' 여기서 blue를 쓰고 싶으면
// styles.color이 아니라 styles[color] => . 안 찍음    