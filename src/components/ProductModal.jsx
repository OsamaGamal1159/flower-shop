import React from 'react'

import { IoMdClose } from "react-icons/io";
import { useSelector } from 'react-redux';

function ProductModal({handleCloseModal}) {

    const isModalOpen = useSelector((state)=>state.flowers.isModalOpen)
    const selectedFlower = useSelector((state)=>state.flowers.selectedFlower)

    if (!isModalOpen || !selectedFlower) return null
    return (
        <div className='fixed inset-0 bg-white bg-opacity-80 w-full h-screen flex flex-col items-center justify-center gap-10 z-50'>
            <div className='relative flex flex-col bg-red-100 bg-opacity-90 w-[1000px] h-[510px] rounded-2xl shadow-category'>
                <span>
                    <IoMdClose
                    size={40}
                    className='absolute top-4 right-4 cursor-pointer text-red-500'
                    onClick={handleCloseModal}
                    />
                </span>
                <h1 className='text-2xl font-medium text-gray-800 pt-5 pb-3 px-10'>Detail Product</h1>
                <hr className='w-[90px] h-[5px] bg-red-400 border-none mb-8 mx-10'/>
                <div className='flex px-10 grid grid-cols-[1fr] md:grid-cols-[1fr_2fr]'>
                    <div 
                        className="w-[300px] h-[350px] bg-cover bg-center bg-no-repeat rounded-2xl"
                        style={{ backgroundImage:`url(${selectedFlower.image})`}}>
                    </div>
                    <div className='flex flex-col gap-4 pl-10'>
                        <p className='text-5xl font-bold text-gray-700'>{selectedFlower.name}</p>
                        <hr className='w-full h-[5px] bg-red-400 border-none mb-5'/>
                        <p className='text-xl text-gray-700'><span className='font-bold'>Description : </span>{selectedFlower.description}</p>
                        <p className='text-xl text-gray-700'><span className='font-bold'>Details : </span>{selectedFlower.details}</p>
                        <p className='text-5xl font-bold text-red-500 text-center py-4 mt-7 bg-red-200 rounded-2xl'><span>Price : $ </span>{selectedFlower.price}</p>
                    </div> 
                </div>
            </div>
        </div>
      
    )
  }

export default ProductModal