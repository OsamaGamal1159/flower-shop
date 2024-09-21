import React from 'react'
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slider_1 from '../assets/slider-img/slider-1.jpg'
import slider_2 from '../assets/slider-img/slider-2.jpg'
import slider_3 from '../assets/slider-img/slider-3.jpg'
import slider_4 from '../assets/slider-img/slider-4.jpg'
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";

import Category from '../components/Category';
import ProductRecommend from '../components/ProductRecommend';
import Policy from '../components/Policy';

function Home() {
  return (
    <div>
      <Swiper
        className='relative group z-10'
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: '.button-nextEl',
          prevEl: '.button-prevEl'
        }}
        pagination={{
          clickable: true,
          colorEl: '.swiper-pagination'
        }}
        modules={[Navigation, Pagination]}
      >
        {/* Slider-1 */}
        <SwiperSlide className='relative'>
          <div 
            className='relative bg-cover bg-no-repeat bg-center w-full h-[520px] rounded-2xl'
            style={{ backgroundImage: `url(${slider_1})`}}>
              {/* Overlay */}
              <div className='absolute top-0 left-0 w-full h-[520px] bg-gray-200 opacity-20'></div>
          </div>
          {/* text-content */}
          <div className='absolute top-[20%] left-[5%] flex flex-col items-start gap-2 w-1/4'>
            <p className=' text-md font-medium text-white pb-3'>More Happy Time</p>
            <h1 className='prata-regular text-4xl font-bold text-red-400'>The Beauty and Charm of a Flower Bouquet</h1>
            <hr className='w-1/5 h-[5px] bg-red-400 border-none my-5 '/>
            <p className='text-sm text-white pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt itaque ratione vel saepe culpa eveniet ab officiis molestiae odit sequi!</p>
            <Link to='/product'>
              <button className='bg-red-400 px-7 py-2 text-white font-medium hover:scale-110 transition duration-200'>Shop Now</button>
            </Link>
          </div>
        </SwiperSlide>
        
        {/* Slider-2 */}
        <SwiperSlide className='relative'>
          <div 
            className='relative bg-cover bg-no-repeat bg-center w-full h-[520px] rounded-2xl'
            style={{ backgroundImage: `url(${slider_2})`}}>
              {/* Overlay */}
              <div className='absolute top-0 left-0 w-full h-[520px] bg-gray-200 opacity-20'></div>
          </div>
          {/* text-content */}
          <div className='absolute top-[20%] left-[5%] flex flex-col items-start gap-2 w-1/4'>
            <p className=' text-md font-medium text-white pb-3'>More Happy Time</p>
            <h1 className='prata-regular text-4xl font-bold text-red-400'>The Beauty and Charm of a Flower Bouquet</h1>
            <hr className='w-1/5 h-[5px] bg-red-400 border-none my-5'/>
            <p className='text-sm text-white pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt itaque ratione vel saepe culpa eveniet ab officiis molestiae odit sequi!</p>
            <Link to='/product'>
              <button className='bg-red-400 px-7 py-2 text-white font-medium hover:scale-110 transition duration-200'>Shop Now</button>
            </Link>
          </div>
        </SwiperSlide>

        {/* Slider-3 */}
        <SwiperSlide className='relative'>
          <div 
            className='relative bg-cover bg-no-repeat bg-top w-full h-[520px] rounded-2xl'
            style={{ backgroundImage: `url(${slider_3})`}}>
              {/* Overlay */}
              <div className='absolute top-0 left-0 w-full h-[520px] bg-gray-200 opacity-20'></div>
          </div>
          {/* text-content */}
          <div className='absolute top-[20%] left-[5%] flex flex-col items-start gap-2 w-1/4'>
            <p className=' text-md font-medium text-white pb-3'>More Happy Time</p>
            <h1 className='prata-regular text-4xl font-bold text-red-400'>The Beauty and Charm of a Flower Bouquet</h1>
            <hr className='w-1/5 h-[5px] bg-red-400 border-none my-5'/>
            <p className='text-sm text-white pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt itaque ratione vel saepe culpa eveniet ab officiis molestiae odit sequi!</p>
            <Link to='/product'>
              <button className='bg-red-400 px-7 py-2 text-white font-medium hover:scale-110 transition duration-200'>Shop Now</button>
            </Link>
          </div>
        </SwiperSlide>
        
        {/* Slider-4 */}
        <SwiperSlide className='relative'>
          <div 
            className='relative bg-cover bg-no-repeat bg-top w-full h-[520px] rounded-2xl'
            style={{ backgroundImage: `url(${slider_4})`}}>
              {/* Overlay */}
              <div className='absolute top-0 left-0 w-full h-[520px] bg-gray-200 opacity-20'></div>
          </div>
          {/* text-content */}
          <div className='absolute top-[20%] left-[5%] flex flex-col items-start gap-2 w-1/4'>
            <p className=' text-md font-medium text-white pb-3'>More Happy Time</p>
            <h1 className='prata-regular text-4xl font-bold text-red-400'>The Beauty and Charm of a Flower Bouquet</h1>
            <hr className='w-1/5 h-[5px] bg-red-400 border-none my-5'/>
            <p className='text-sm text-white pb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt itaque ratione vel saepe culpa eveniet ab officiis molestiae odit sequi!</p>
            <Link to='/product'>
              <button className='bg-red-400 px-7 py-2 text-white font-medium hover:scale-110 transition duration-200'>Shop Now</button>
            </Link>
          </div>
        </SwiperSlide>

        {/* Button Slider */}
        <div className='absolute top-[50%] z-10 button-nextEl group-hover:right-[10px] -right-[50px] duration-300 w-[40px] h-[40px] bg-red-400 opacity-80 rounded-full grid place-items-center text-white cursor-pointer'>
          <IoIosArrowDropright size={25} />
        </div>
        <div className='absolute top-[50%] z-10 button-prevEl group-hover:left-[10px] -left-[50px] duration-300 w-[40px] h-[40px] bg-red-400 opacity-80 rounded-full grid place-items-center text-white cursor-pointer'>
          <IoIosArrowDropleft size={25} />
        </div>

        {/* Swiper Pagination */}
        <div className='swiper-pagination bg-red-300'></div>
      </Swiper>

      {/* ---------------------------------- Category ------------------------------------ */}
      <div className='my-10'>
        <Category/>
      </div>
      <hr className='h-[1px] bg-gray-200 mb-10'/>
      {/* ----------------------------- Recommend Product --------------------------------*/}
      <div className='w-full'>
        <ProductRecommend/>
      </div>
      {/* ------------------------------- Policy -------------------------------------*/}
      <div className='py-20 px-10'>
        <Policy/>
      </div>
    </div>
  )
}

export default Home