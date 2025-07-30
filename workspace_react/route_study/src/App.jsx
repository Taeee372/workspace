import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './Header'
import Login from './Login'
import Join from './Join'
import Home from './Home'
import ItemDetail from './ItemDetail'

 
// Route 컴포넌트 하나가 페이지 하나라고 생각하면 됨!
// Route 안의 path 속성 : 요청 url(연결할 페이지 url)
// ex) path="/abc"  =>  http://localhost:5173/abc
// ex) path=""  =>  http://localhost:5173
// Route 안의 element 속성 : path 작성한 url로 접근 시 보여줄 화면(페이지)
        
function App() {

  return (
    <>
      {/* Routes 밖에 있는 내용은 페이지가 바뀌어도 항상 표시됨 */}
      <Header />
      <Routes>
        <Route path='/'   element={ <Home /> }/> 
        <Route path='/login'  element={ <Login /> }/> 
        <Route path='/join'  element={ <Join /> }/>
        <Route path='/items/:itemNum/:title'  element={ <ItemDetail /> }/> 
        {/* '/items/:itemNum' => '/items/{itemNum}' 과 같은 뜻, 문법만 다르다*/}
        {/* 객체로 나오기 때문에 /:itmeNum/:title 이런식으로 더 추가할 수 있다 */}
        {/* 이때 itemNum : key값, itemNum 자리에 직접 입력한 값 : value값 으로 나온다 */}

        {/* path='*' : 설정한 주소 외에 다른 모든 주소 */}
        <Route path='*'   element={ <div>없는 페이지입니다</div> }/>
      </Routes>
    </>
  )
}

export default App
