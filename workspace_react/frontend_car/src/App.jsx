import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Menu from './pages/Menu'
import CarManage from './pages/CarManage'
import RegSaleInfo from './pages/RegSaleInfo'
import SaleList from './pages/SaleList'
import Button from './common/Button'
import Home from './pages/Home'

function App() {

  return (
 <>
      {/* <Button /> */}
      <Routes>
        <Route path='/' element={ <Menu /> } >
          <Route path='home' element={<Home />}/>
          <Route path='car-manage' element={ <CarManage /> } />
          <Route path='reg-car-info' element={ <RegSaleInfo /> } />
          <Route path='sale-list' element={ <SaleList /> } />
        </Route>
        
      </Routes>
 </>
  )
}

export default App
