import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from './ProductItem'
import { setFlowers,setRecommend,openModal,closeModal } from '../store/flowersSlice'
import ProductModal from './ProductModal'

import { IoIosArrowDropright } from "react-icons/io";
import { Link } from 'react-router-dom';

function ProductRecommend() {
    const dispatch = useDispatch()
    const selectedCategory = useSelector((state)=>state.category.selectedCategory)
    const recommend = useSelector((state) => state.flowers.recommend)

    useEffect(()=>{
        dispatch(setFlowers())
    },[dispatch])
    
    useEffect(()=>{
        dispatch(setRecommend(selectedCategory))
    },[dispatch])

    function handleOpenModal(id){
        dispatch(openModal(id))
    }
    function handleCloseModal(){
        dispatch(closeModal());
    }

  return (
    <div>
        <h3 className="text-2xl font-bold leading-9 text-gray-800 ">
            Choose your flower
        </h3>
        <hr className='w-[90px] h-[5px] bg-red-400 border-none mt-2 mb-10'/>
        <div className="grid grid-cols-5 gap-y-8 place-items-center">
            {recommend.map((item) => {
                if (selectedCategory==='all' || selectedCategory.toLowerCase() === item.category) {
                  return (
                    <ProductItem key={item.id} id={item.id} name={item.name} img={item.image} price={item.price} handleOpenModal={handleOpenModal}/>
                )  
            }})}
        </div>
        <div className='flex justify-center'>
            <Link to='/product' className='flex gap-4 justify-center items-center py-4 my-5 rounded-2xl  w-[98%] cursor-pointer bg-red-100 hover:bg-red-200 transition-colors duration-200'>
                <p className='text-xl font-medium text-red-500'>View All Products</p>
                <IoIosArrowDropright 
                    size={30}
                    className='text-red-500'/>
            </Link>
        </div>
        <ProductModal handleCloseModal={handleCloseModal}/>
    </div>
  )
}

export default ProductRecommend