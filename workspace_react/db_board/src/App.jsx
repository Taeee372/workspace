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
        <Route path='/' element={<BoardList />}/>
        <Route path='/regBoard' element={<RegForm />}/>
        <Route path='/boardDetail/:boardNum' element={<BoardDetail />}/>
        <Route path='/updateBoard/:boardNum' element={<UpdateForm />}/>
      </Routes>
    </div>
  )
}

export default App
