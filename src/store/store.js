import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categorySlice';
import cartReducer from './cartSlice';
import flowersReducer from './flowersSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    category: categoryReducer,
    cart: cartReducer,
    flowers: flowersReducer,
    user: userReducer
  },
})