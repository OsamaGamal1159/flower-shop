import React, { useState } from 'react'
import bg_login from '../assets/login-bg.jpg'
import { Link } from 'react-router-dom'
import { login } from '../store/userSlice' 

function Login() {

  const initalState = {
    email: '',
    password: ''
  }

  const [values, setValues]=useState(initalState)
  
  const handleOnChange=(e)=>{
    const { value } = e.value
    setValues(value)
  }
  console.log(values)
  return (
    <div className='grid grid-cols-[1fr_1fr] pb-20 pt-2 px-10 h-full'>
      <div className='relative w-full h-full bg-cover bg-bottom bg-no-repeat bg-red-300'
           style={{ backgroundImage:`url(${bg_login})`}}>
          {/* Overlay */}
          <div className='absolute top-0 left-0 w-full h-full bg-gray-200 opacity-20'></div>
            
      </div>
      {/* ----------------------------------------------Login side----------------------------------------------- */}
      <div className='flex flex-col justify-center items-center px-20 text-gray-800'>
        <div className='flex flex-col items-start gap-2 w-full pb-10'>
          <h3 className='text-3xl font-bold'>Login</h3>
          <p className='text-lg'>Welcome Back! Please enter your details.</p>
        </div>
        <div className='w-full flex flex-col gap-3'>
          <input 
            type='email'
            name='email'
            placeholder='Email'
            value={values.email}
            onChange={handleOnChange}
            required
            className='w-full border-b-2 border-gray-300 outline-none focus:outline-none focus:border-black text-md py-2 px-5'/>
          <input 
            type='password'
            name='password'
            placeholder='Password'
            value={values.password}
            onChange={handleOnChange}
            required
            className='w-full border-b-2 border-gray-300 outline-none focus:outline-none focus:border-black text-md py-2 px-5'/>
        </div>
        <div className='flex justify-between w-full py-2'>
          <div className='flex items-center gap-2'>
            <input 
              type='checkbox' 
              name='remember'
              className='w-4 h-4 rounded-xl'/>
              <p className='text-md'>Remember me</p>
          </div>
          <p className='text-md font-medium underline underline-offset-2 cursor-pointer'>Forget Password ?</p>
        </div>
        <button className='w-full rounded-md bg-red-400 text-lg font-bold text-white py-3 mt-5'>Log in</button>
        <p className='pt-5'>Don't you have a account? <Link to ='/signup' className='font-medium underline underline-offset-2 cursor-pointer'>Sign up for free</Link></p>
      </div>
    </div>
  )
}

export default Login