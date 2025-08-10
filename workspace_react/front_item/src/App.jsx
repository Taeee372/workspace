import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemList from './ItemList'
import ItemDetail from './ItemDetail'
import RegForm from './RegForm'
import UpdateForm from './UpdateForm'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <ItemList /> }/>
        <Route path='/detail/:itemNum' element={ <ItemDetail /> }/>
        <Route path='/reg' element={ <RegForm /> }/>
        <Route path='/update/:itemNum' element={ <UpdateForm /> }/>
      </Routes>
    </>
  )
}

export default App
