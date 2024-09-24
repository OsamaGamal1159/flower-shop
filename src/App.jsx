import React from 'react'
import { Routes,Route } from 'react-router-dom'

import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div className='min-h-screen h-screen py-10 px-20'>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/orders' element={<Orders/>}/>
        </Routes>
      <Footer/>
    </div>
  )
}

export default App