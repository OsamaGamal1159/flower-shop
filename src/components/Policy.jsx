import React from 'react'

import { GiFlowerPot } from "react-icons/gi";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerServiceLine } from "react-icons/ri";


function Policy() {
  return (
    <div className='flex justify-between items-start flex-wrap lg:flex-nowrap gap-3'>
        <div className='flex flex-col items-center w-1/4'>
            <GiFlowerPot size={50}
            className='text-gray-700'/>
            <h3 className='text-lg font-bold text-gray-700 pt-3'>Fresh Flower</h3>
            <p className='text-xs text-gray-500'>Every flower is carefully selected from trusted farms.</p>
        </div>
        <div className='flex flex-col items-center w-1/4'>
            <MdOutlineWorkspacePremium size={50}
            className='text-gray-700'/>
            <h3 className='text-lg font-bold text-gray-700 pt-3'>Premium Quality</h3>
            <p className='text-xs text-gray-500'>We only choose flowers of the highest quality.</p>
        </div>
        <div className='flex flex-col items-center w-1/4'>
            <TbTruckDelivery size={50}
            className='text-gray-700 font-bolder' />
            <h3 className='text-lg font-bold text-gray-700 pt-3'>Timely Delivery</h3>
            <p className='text-xs text-gray-500'>We offer fast and safe delivery services.</p>
        </div>
        <div className='flex flex-col items-center w-1/4'>
            <RiCustomerServiceLine size={50}
            className='text-gray-700'/>
            <h3 className='text-lg font-bold text-gray-700 pt-3 '>Customer Satisfaction</h3>
            <p className='text-xs text-gray-500 text-center'>We are dedicated to making every occasion special with our beautiful fresh flowers.</p>
        </div>
    </div>
  )
}

export default Policy