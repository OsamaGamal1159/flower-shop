import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart:[],
  amount:0,
  totalAmount:0,
  totalPrice:0,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const productId = action.payload;
      try{
        const exist = state.cart.find((product)=>product.id === productId.id)
        if(exist){
          exist.amount++
          exist.totalPrice+=productId.totalPrice
          state.totalAmount++
          state.totalPrice+=productId.totalPrice
        } else {
          state.cart.push({
            id: productId.id,
            price: productId.price,
            amount: 1,
            totalPrice: productId.price,
            name: productId.name,
            img: productId.image
          })
          state.totalAmount++
          state.totalPrice+=productId.price
        }
      } catch (err){
        return err
      }
    },
    removeFromCart(state,action){
      const productId = action.payload
      try {
        const exist = state.cart.find((product)=>product.id === productId.id)
        if(exist.amount===1){
          state.cart = state.cart.filter((product)=>product.id!==productId.id)
          state.totalAmount--
          state.totalPrice-=productId.price
        } else {
          exist.amount--
          exist.totalPrice-=productId.price
          state.totalAmount--
          state.totalPrice-=productId.price
        }
      } catch (err){
        return err
      }
    },
    deleteFromCart(state,action){
      const productId = action.payload
      try {
        const exist = state.cart.find((product)=>product.id === productId.id)
        if(exist){
          state.cart = state.cart.filter((product)=>product.id!==productId.id)
          state.totalAmount-=exist.amount
          state.totalPrice-=exist.totalPrice
        }
      } catch (err){
        return err
      }
    }
  }
})

export const { addToCart,removeFromCart,deleteFromCart } = cartSlice.actions
export default cartSlice.reducer;