import React from 'react'
import { Route, Routes } from "react-router-dom"
import CartDetails from './Pages/CartDetails'
import CompoWrapper from './Pages/CompoWrapper'
import Login from './Pages/Login'
import Nike from './Pages/Nike'
import "./App.css"
import ShoppingBag from './Pages/ShoppingBag'
const App = () => {
  return (
    <div>
      {/* <CompoWrapper /> */}
      <Routes>
        <Route path='/' element={<CompoWrapper />} />
        <Route path='/cart/:id' element={<CartDetails />} />
        <Route path='/shoppingPage' element={<ShoppingBag />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App

