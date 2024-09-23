import React from 'react'
import { useSelector } from 'react-redux'
import { BsBasket2Fill } from "react-icons/bs";
import { Link } from 'react-router-dom';

function Orders() {
  const purchase = useSelector((state)=>state.user.user.purchaseHistory)

  return (
    <div className='mb-20 text-gray-700'>
      <h3 className='text-gray-700 text-3xl font-bold leading-9'>My Purchase</h3>
      <hr className='w-[90px] h-[4px] bg-red-400 border-none my-4 mb-10'/>
      {!purchase || purchase.length===0 ?(
        <div className='text-center flex items-center justify-center mt-16'>
          <div 
            className='w-[75%] shadow-category flex flex-col justify-center items-center gap-5 px-5 py-16 text-gray-700'>
              <BsBasket2Fill size={70}/>
              <h3 className='text-3xl font-bold'>You have no purchase history yet.</h3>
              <p className='text-lg'>You haven't made any purchases yet. Start shopping now to view your order history here!</p>
              <Link to='/product' className='bg-red-500 text-white text-xl font-bold px-10 py-4 rounded-lg hover:scale-105 duration-100'>Continue Shopping</Link>
          </div>
        </div>
        ):(
        <div className='px-20 flex flex-col gap-2'>
          <div className='grid grid-cols-4 bg-stone-200 py-3 px-10 font-medium text-center'>
            <p></p>
            <p>Product name</p>
            <p>Amount</p>
            <p>Total Price/Unit</p>
          </div>
          <div className='flex flex-col gap-5'>
            {purchase.map((purchaseItem)=>{
              return (
              <div key={purchaseItem.id}>
                <div className='bg-stone-100 flex flex-col gap-4 px-10 py-4'>
                  <div className='font-medium'>
                    <p>Purchase ID : <span>{purchaseItem.id}</span></p>
                    <p>Date : <span>{purchaseItem.date}</span></p>
                  </div>
                  <hr className='w-fll h-[3px] bg-stone-200'/>
                  {purchaseItem.item.map((item)=>{
                    return (
                      <div key={item.id} className='grid grid-cols-4 flex justify-center items-center'>
                        <div
                            className='w-[100px] h-[70px] bg-cover bg-center bg-no-repeat bg-red-300'
                            style={{ backgroundImage:`url(${item.image})`}}>
                        </div>
                        <p className='text-center'>{item.name}</p>
                        <p className='text-center'>X <span>{item.amount}</span></p>
                        <p className='text-center'>$ {item.amount*item.price}</p>
                      </div>
                    )
                  })}
                  <hr className='w-fll h-[2px] bg-stone-200'/>
                </div>
                <div className='flex flex-col bg-stone-100 items-end text-lg font-medium px-10 pb-4'>
                  <p>Item : {purchaseItem.totalAmount}</p>
                  <p>Total Price : $ {purchaseItem.totalPrice}</p>
                </div>
              </div>
            )})}
          </div>
        </div>
      )}
      
    </div>
  )
}

export default Orders