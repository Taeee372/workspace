import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './Footer'
import Table from './Table'

function Header(){
  return (
    <div>헤더 영역</div>
  )
}



function App() {

  return (
    <>
      <Header></Header>
      <div>이곳은 메인페이지입니다</div>
      <Table></Table>
      <Footer></Footer>
    </>
  )
}

export default App
