import React, { useState } from 'react'
import { NavLink,Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store/userSlice';

import { FiShoppingCart } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import { GoPerson } from "react-icons/go";


function Navbar() {

    const dispatch = useDispatch()
    const totalAmount = useSelector((state)=>state.cart.totalAmount)
    const user = useSelector((state)=>state.user.user)
    const { name,authUser } = user

    const handleLogout=()=>{
        dispatch(logout())
    }

    
  return (
    <div className='flex items-center justify-between text-base font-medium pb-10'>
        {/* ----------------------------------------Logo----------------------------------------------- */}
        <Link to='/' className='text-5xl text-red-500 italic parisienne-regular'>De Flore.</Link>
        {/* ----------------------------------------NavLink----------------------------------------------- */}
        <ul className='hidden sm:flex gap-6 text-md text-gray-800'>
            <NavLink to='/' className='flex flex-col items-center gap-1 hover:text-red-500 transition-colors duration-200'>
                <p>Home</p>
                <hr className='w-3/4 h-[3px] bg-red-500 hidden'/>
            </NavLink>
            <NavLink to='/product' className='flex flex-col items-center gap-1 hover:text-red-500 transition-colors duration-200'>
                <p>Products</p>
                <hr className='w-3/4 h-[3px] bg-red-500 hidden'/>
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1 hover:text-red-500 transition-colors duration-200'>
                <p>About</p>
                <hr className='w-3/4 h-[3px] bg-red-500 hidden'/>
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1 hover:text-red-500 transition-colors duration-200'>
                <p>Contact Us</p>
                <hr className='w-3/4 h-[3px] bg-red-500 hidden'/>
            </NavLink>
        </ul>
        {/* ----------------------------------------Search----------------------------------------------- */}
        <div className='flex gap-2 items-center'>
            <div className='cursor-pointer hover:bg-red-400 rounded-full p-2 transition-colors duration-200 group'>
                <BiSearchAlt
                    size={25} 
                    className='text-gray-800 group-hover:text-white'/>
            </div>
            {/* ----------------------------------------Cart----------------------------------------------- */}
            <Link to='/cart' className='relative cursor-pointer hover:bg-red-400 rounded-full p-3 transition-colors duration-200 group'>
                <FiShoppingCart
                    size={20}
                    className='text-gray-800 group-hover:text-white'/>
                {totalAmount?(
                    <div className='absolute bg-red-500 w-4 h-4 right-[6px] top-[4px] rounded-full text-white text-[10px] text-center leading-4'>{totalAmount}</div>
                ):('')}
                
            </Link>
            {/* ----------------------------------------Login----------------------------------------------- */}
            {authUser?(
                <div className='relative cursor-pointer hover:bg-red-400 rounded-full p-3 transition-colors duration-200 group'>
                    <GoPerson 
                    size={20} 
                    className='text-gray-800 group-hover:text-white'/>
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-5'>
                        <div className='flex flex-col gap-2 w-40 py-3 bg-red-400 rounded-xl text-white'>
                            <p className='cursor-pointer text-center hover:bg-red-300 p-2'>My Profile</p>
                            <p className='cursor-pointer text-center hover:bg-red-300 p-2'>Orders</p>
                            <p className='cursor-pointer text-center hover:bg-red-300 p-2'
                            onClick={handleLogout}>Logout</p>
                        </div>
                    </div>
                </div>
            ):(
                <Link to='/login' className='relative cursor-pointer hover:bg-red-400 rounded-full p-3 transition-colors duration-200 group'>
                        <GoPerson 
                        size={20} 
                        className='text-gray-800 group-hover:text-white'/>
                </Link>
            )}
            
        </div>
    </div>
  )
}

export default Navbar