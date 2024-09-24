import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addToCart,removeFromCart } from '../store/cartSlice'
import Add_Icon from '../assets/add-icon.svg'
import Remove_Icon from '../assets/remove-icon.svg'

function ProductItem({id,name,img,price,handleOpenModal}) {
    const dispatch = useDispatch()
    const cartItem = useSelector((state)=>state.cart.cart)

    const itemInCart = cartItem.find((item)=>item.id===id)

    const handleAddToCart=()=>{
        dispatch(addToCart({
            id: id,
            name: name,
            price: price,
            amount: 1,
            totalPrice: price,
            image: img,
        }))
    }

    const handleRemoveFromCart=()=>{
        dispatch(removeFromCart({
            id: id,
            name: name,
            price: price,
            amount: 1,
            totalPrice: price,
            image: img,
        }))
    }

  return (
    <div className='flex flex-col justify-start items-center w-[240px] h-[300px] rounded-2xl gap-2 bg-white shadow-box hover:scale-105 duration-200'>
        <div 
            className='w-full h-[170px] bg-cover bg-center bg-no-repeat rounded-t-lg bg-red-300 cursor-pointer'
            style={{ backgroundImage:`url(${img})`}}
            onClick={()=>handleOpenModal(id)}>
        </div>
        <div className='flex flex-col h-[100px] items-start w-full gap-2 text-gray-800 px-4'>
            <p className='text-lg font-medium'>{name}</p>
            <div className='flex items-end gap-2'>
                <span className='text-2xl font-bold text-red-500'>$</span>
                <h3 className='text-2xl font-bold text-red-500'>{price}</h3>
            </div>
            <div className='flex w-full justify-end'>
                {!itemInCart ?(
                    <img 
                        src={Add_Icon} 
                        alt=''
                        onClick={handleAddToCart}
                        className='hover:scale-105 hover:duration-200 hover:ease-in cursor-pointer'
                    />
                ) :(
                <div className='flex justify-center items-center gap-4'>
                    <img 
                        src={Remove_Icon} 
                        alt=''
                        className='cursor-pointer'
                        onClick={handleRemoveFromCart}
                    />
                    <p className='text-xl font-bold w-[15px]'>        
                        {itemInCart.amount}
                    </p>
                    <img 
                        src={Add_Icon} 
                        alt=''
                        onClick={handleAddToCart}
                        className='cursor-pointer'
                    />
                </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default ProductItem