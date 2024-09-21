import React from 'react'
import Category from '../components/Category'
import ProductCard from '../components/ProductCard'

function Product() {
  return (
    <div>
      {/* ---------------------------------- Category ------------------------------------ */}
      <div className='pb-10'>
        <Category/>
      </div>
      <div className='pb-40'>
        <ProductCard/>
      </div>
    </div>
  )
}

export default Product