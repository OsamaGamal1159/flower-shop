import React from 'react'
import { useSelector } from 'react-redux'

function Orders() {
  const purchase = useSelector((state)=>state.user.user.purchaseHistory)
  console.log(purchase)

  return (
    <div className='pb-40 text-gray-700'>
      <h3 className='text-gray-700 text-3xl font-bold leading-9'>My Purchase</h3>
      <hr className='w-[90px] h-[4px] bg-red-400 border-none my-4 mb-4'/>
      <div className='px-10 flex flex-col gap-2'>
        <div className='grid grid-cols-4 bg-stone-200 py-3 px-10 font-medium text-center'>
          <p></p>
          <p>Product name</p>
          <p>Amount</p>
          <p>Total Price/Unit</p>
        </div>
        <div className='flex flex-col gap-5'>
          {purchase.map((purchaseItem)=>{
            return (
            <div>
              <div key={purchaseItem.id} className='bg-stone-100 flex flex-col gap-4 px-10 py-4'>
                <div className='font-medium'>
                  <p>Purchase ID : <span>{purchaseItem.id}</span></p>
                  <p>Date : <span>{purchaseItem.date}</span></p>
                </div>
                <hr className='w-fll h-[3px] bg-stone-200'/>
                {purchaseItem.item.map((item)=>{
                  return (
                    <div key={item.id} className='grid grid-cols-4 flex justify-center items-center'>
                      <div
                          className='w-[70px] h-[70px] bg-cover bg-center bg-no-repeat bg-red-300'
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
              <div className='flex flex-col bg-stone-100 items-end font-medium px-10 pb-4'>
                <p>item : {purchaseItem.totalAmount}</p>
                <p>Total Price : $ {purchaseItem.totalPrice}</p>
              </div>
            </div>
          )})}
        </div>
      </div>
    </div>
  )
}

export default Orders