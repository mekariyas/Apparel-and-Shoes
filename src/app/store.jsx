import { configureStore } from '@reduxjs/toolkit'
import cartReducer  from '../feature/cart/Cartslice'

export const store = configureStore({
    reducer:{
        'cart': cartReducer
    }
})