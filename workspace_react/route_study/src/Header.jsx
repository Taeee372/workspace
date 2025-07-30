import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header-container'>
      <div className='profile'>
        <span>
          <Link to={'/join'}>Join</Link>
          </span>
        <span>
          <Link to={'/login'}>Login</Link> 
          {/* to 안에는 이동할 path값 입력 */}
        </span>
      </div>
      <div className='title'>
        P R O J E C T
      </div>
    </div>
  )
}

export default Header