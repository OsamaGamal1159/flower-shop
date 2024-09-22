import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, removeFromCart,deleteFromCart, clearCart } from '../store/cartSlice'

import { ImHome } from "react-icons/im";
import { BsCart4 } from "react-icons/bs";
import { addPurchase } from '../store/userSlice';

function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector((state)=>state.cart.cart)
  const totalPrice = useSelector((state)=>state.cart.totalPrice)
  const totalAmount = useSelector((state)=>state.cart.totalAmount)

  const handleAddToCart=(item)=>{
    dispatch(addToCart({
        id: item.id,
        name: item.name,
        price: item.price,
        amount: 1,
        totalPrice: item.price,
        image: item.img,
    }))
  }
  const handleRemoveFromCart=(item)=>{
    dispatch(removeFromCart(item))
  }
  const handleDeleteFromCart=(item)=>{
    dispatch(deleteFromCart({id:item.id}))
  }
  const handleCheckOut=()=>{
    const purchase ={
      id: Date.now(),
      date: new Date().toLocaleString(),
      item: cart.map((item)=>({
        id: item.id,
        name: item.name,
        price: item.price,
        amount: item.amount,
        image: item.img
      })),
      totalAmount: totalAmount,
      totalPrice: totalPrice
    }

    dispatch(addPurchase(purchase))
    dispatch(clearCart())

    alert('Purchase Successful!')
    console.log(purchase)
  }
  

  return (
    <div className='pb-40 text-gray-700'>
      <h3 className='text-gray-700 text-3xl font-bold leading-9'>My Cart</h3>
      <hr className='w-[90px] h-[5px] bg-red-400 border-none my-4 mb-4'/>
        {/*------------------------------------------Cart List-------------------------------------*/}
        {cart.length===0 ?(
          <div className='text-center flex items-center justify-center mt-16'>
            <div 
              className='w-[75%] shadow-category flex flex-col justify-center items-center gap-5 px-5 py-16 text-gray-700'>
                <BsCart4 size={70}/>
                <h3 className='text-3xl font-bold'>Your cart feels lonely.</h3>
                <p className='text-lg'>Your shopping cart lives to serve. Give it purpose - fill it with the fresh flowers and make it happy.</p>
                <Link to='/product' className='bg-red-500 text-white text-xl font-bold px-10 py-4 rounded-lg hover:scale-105 duration-100'>Continue Shopping</Link>
            </div>
          </div>
        ):(
          <>
            <div className='grid grid-cols-[1fr] lg:grid-cols-[2fr_1fr] gap-10 pt-7 px-5'>
              <div className='flex flex-col gap-4'>
              <Link to='/product' className='text-md font-medium underline underline-offset-4 text-gray-600'>Back to Products</Link>
                {cart.map((item,index)=>{
                  return (
                    <div key={index} className='grid grid-cols-[1fr_4fr_2fr_1fr] bg-stone-100 p-5'>
                      <div 
                        className='w-[70px] h-[70px] bg-cover bg-center bg-no-repeat bg-red-300'
                        style={{ backgroundImage:`url(${item.img})`}}>
                      </div>
                      <div className='flex flex-col justify-center gap-1'>
                        <p className='text-lg font-medium'>{item.name}</p>
                        <div className='flex gap-4 text-xs'>
                          <p>X {item.amount}</p>
                          <div 
                            className='underline underline-offset-4 font-medium cursor-pointer'
                            onClick={()=>handleDeleteFromCart(item)}>Remove
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-center items-center'>
                        <div className=' flex justify-center items-center gap-4 bg-transparent border-solid border-[1px] border-gray-500 px-5 py-2 rounded-md'>
                          <div
                            className='cursor-pointer text-xl font-medium px-2'
                            onClick={()=>handleRemoveFromCart(item)}>-
                          </div>
                            <p className='text-md font-medium'>{item.amount}</p>
                          <div 
                            className='cursor-pointer text-xl font-medium px-2'
                            onClick={()=>handleAddToCart(item)}>+
                          </div>
                        </div>
                      </div> 
                      <div className='flex justify-center items-center'>
                        <p className='text-xl font-bold'>$ {item.amount * item.price}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
              {/*----------------------------------Bill---------------------------------*/}
              <div className='bg-white shadow-category rounded-xl w-[400px] min-h-[400px] h-[450px] flex flex-col gap-3 px-8'>
                <h3 className='text-3xl font-bold text-center pt-8 pb-5'>Total Charge</h3>
                <p className='text-lg font-bold'>Item : <span>{totalAmount}</span></p>
                <div className='flex gap-3 justify-center items-center bg-stone-100 cursor-pointer'>
                  <p className='font-medium underline underline-offset-4 text-center py-2'>Add address</p>
                  <ImHome size={18}
                  className='text-gray-600'/>
                </div>
                <div className='flex justify-between'>
                  <p>Subtotal</p>
                  <p className='font-bold'><span>$</span>{totalPrice}</p>
                </div>
                <hr/>
                <p>Tax Included</p>
                <div className='flex justify-center'>
                  <button 
                    className='flex justify-between text-xl font-bold text-white bg-red-500 w-[97%] rounded-xl px-5 py-3 mt-4 hover:bg-red-600 transition-colors duration-100'
                    onClick={handleCheckOut}>
                    <p>Check Out</p>
                    <p>$ {totalPrice}</p>
                    </button>
                </div>
              </div>
            </div>
          </>
        )}
    </div>
  )
}

export default Cart