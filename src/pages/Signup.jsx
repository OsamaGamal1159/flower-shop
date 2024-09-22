import React, { useEffect, useState } from 'react'
import bg_signup from '../assets/bg-signup.jpg'
import { Link,useNavigate } from 'react-router-dom'
import { signup } from '../store/userSlice'
import { useDispatch, useSelector } from 'react-redux'

function SignUp() {

  const initalState = {
    name: '',
    mobile_number: '',
    email: '',
    password: ''
  }
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [values, setValues] = useState(initalState)
  const [isSubmit, setIsSubmit] = useState(false)
  const [errors, setErrors] = useState({})
  const user = useSelector((state)=>state.user.user)
  const authUser = user.authUser
  const authError = useSelector((state)=>state.user.error)

  const handleOnChange=(e)=>{
    const { name, value } = e.target
    setValues({...values, [name]: value})
  }

  const validationForm=()=>{
    let formErrors = {}
    // Check Name
    if(!values.name) {
      formErrors.name = 'Name is required'
    } else if(!/^[A-Za-z]{4,10}$/i.test(values.name)){
      formErrors.name = 'Invalid name format!'
    }
    // Check Mobile Number
    if(!values.mobile_number){
      formErrors.mobile_number = 'Mobile number is required'
    } else if(!/^(06|08|09)\d{8}$/.test(values.mobile_number)){
      formErrors.mobile_number = 'Invalid mobile number format!'
    }
    // Check Email
    if(!values.email) {
      formErrors.email = 'Email is required' 
    } else if(!/^\S+@\S+\.\S+$/.test(values.email)){
      formErrors.email = 'Invalid email format!'
    }
    // Check Password
    if(!values.password) {
      formErrors.password = 'Password is required'
    } else if(!/^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{4,10}$/i.test(values.password)){
      formErrors.password = 'Invalid password format!'
    }
    return formErrors
  }

  const handleClickSignup=()=>{
    const formErrors = validationForm()
    setErrors(formErrors)
    if(Object.keys(formErrors).length===0){
      dispatch(signup(values))
      setIsSubmit(true)
    }
  }

  useEffect(()=>{
    if(authUser&&isSubmit){navigate('/')}
  },[authUser,navigate,isSubmit])
  
  console.log(values)

  return (
    <div className='grid grid-cols-[1fr_1fr] pb-20 pt-2 px-10 h-full'>
      <div className='relative w-full h-full bg-cover bg-center bg-no-repeat bg-red-300'
           style={{ backgroundImage:`url(${bg_signup})`}}>
          {/* Overlay */}
          <div className='absolute top-0 left-0 w-full h-full bg-gray-500 opacity-20'></div>
    </div>
      {/* ----------------------------------Signup----------------------------------------- */}
      <div className='flex flex-col justify-center items-center px-20 text-gray-800'>
        <div className='flex flex-col items-start gap-2 w-full pb-10'>
          <h3 className='text-3xl font-bold'>Create Account!</h3>
          <p className='text-lg'>It's free and only take a minute.</p>
        </div>
        <div className='w-full flex flex-col gap-3'>
          <div className='relative'>
            <input 
              type='text'
              name='name'
              placeholder='Name'
              value={values.name}
              onChange={handleOnChange}
              required
              className='relative w-full border-b-2 border-gray-300 outline-none focus:outline-none focus:border-black text-md py-2 px-5'/>
              {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>
          <input 
            type='text'
            name='mobile_number'
            placeholder='Mobile Number'
            value={values.mobile_number}
            onChange={handleOnChange}
            required
            className='w-full border-b-2 border-gray-300 outline-none focus:outline-none focus:border-black text-md py-2 px-5'/>
            {errors.mobile_number && <p className="text-red-500">{errors.mobile_number}</p>}
          <input 
            type='email'
            name='email'
            placeholder='Email'
            value={values.email}
            onChange={handleOnChange}
            required
            className='w-full border-b-2 border-gray-300 outline-none focus:outline-none focus:border-black text-md py-2 px-5'/>
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          <input 
            type='password'
            name='password'
            placeholder='Password'
            value={values.password}
            onChange={handleOnChange}
            required
            className='w-full border-b-2 border-gray-300 outline-none focus:outline-none focus:border-black text-md py-2 px-5'/>
            {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>
        {authError && <p className='w-full text-center text-red-500 font-medium bg-red-100 p-3 my-5'>{authError}</p>}
        <button
          type='submit'
          onClick={handleClickSignup}
          className='w-full rounded-md bg-green-2 text-lg font-bold text-white py-3 mt-5'>Sign Up</button>
        <p className='pt-5'>Do you have a account? <Link to ='/login' className='font-medium underline underline-offset-2 cursor-pointer'>Log in</Link></p>
      </div>
    </div>
  )
}

export default SignUp