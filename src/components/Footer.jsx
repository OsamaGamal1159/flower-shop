import React from 'react'

import logo from '../assets/logo.png'

function Footer() {
  return (
    <>
        <div className='flex grid grid-cols-[3fr_1fr_1fr] gap-20 bg-red-100 rounded-2xl py-10 px-5'>
            <div className='flex justify-center items-center'>
                <img src={logo} alt="" width={200} height={200} />
                <div className='flex flex-col gap-1'>
                    <h1 className='text-xl font-bold'><span className='text-3xl text-red-500'>We</span> are committed to providing the highest quality fresh flowers</h1>
                    <p className='text-md'> because we understand that the freshness and beauty of flowers are important for every occasion.</p>
                </div>
            </div>
            <div className='flex flex-col justify-start'>
                <p className='text-xl font-bold'>Company</p>
                <hr className='w-1/6 h-[5px] my-2 bg-red-500'/>
                <ul className='flex flex-col justify-center text-md gap-1'>
                    <li>Home</li>
                    <li>Product</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='flex flex-col justify-start'>
                <p className='text-xl font-bold'>Contact us</p>
                <hr className='w-1/6 h-[5px] my-2 bg-red-500'/>
                <ul className='flex flex-col justify-center text-md gap-1'>
                    <li>+66 83-462-0925</li>
                    <li>contact@deflore.com</li>
                </ul>
            </div>
        </div>
        <div>
            <p className='text-sm text-center py-5 text-gray-700 '>Copyright 2024@ deflore.com - All Right Reserved.</p>
        </div>
    </>
  )
}

export default Footer