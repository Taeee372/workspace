import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomeLayout from './pages/HomeLayout'
import CarManage from './pages/CarManage'
import RegSaleInfo from './pages/RegSaleInfo'
import SaleList from './pages/SaleList'
import Button from './common/Button'
import Title from './pages/Title'

function App() {

  return (
 <>
      {/* <Button /> */}
      <Routes>
        <Route path='/' element={ <HomeLayout /> } >
          <Route path='title' element={ <Title /> }/>
          <Route path='car-manage' element={ <CarManage /> } />
          <Route path='reg-car-info' element={ <RegSaleInfo /> } />
          <Route path='sale-list' element={ <SaleList /> } />
        </Route>
        
      </Routes>
 </>
  )
}

export default App
