import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BoardList from './BoardList'
import RegForm from './RegForm'
import BoardDetail from './BoardDetail'
import UpdateForm from './UpdateForm'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div className='container'>
      <Routes>
        {/* 게시글 목록 페이지 */}
        <Route path='/' element={<BoardList />}/>
      
        {/* 게시글 등록 페이지 */}
        <Route path='/regBoard' element={<RegForm />}/>
      
        {/* 게시글 상세 페이지 */}
        <Route path='/boardDetail/:boardNum' element={<BoardDetail />}/>
        
        {/* 게시글 수정 페이지 */}
        <Route path='/updateBoard/:boardNum' element={<UpdateForm />}/>
      </Routes>
    </div>
  )
}

export default App
