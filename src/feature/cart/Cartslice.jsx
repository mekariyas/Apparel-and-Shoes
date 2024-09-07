import { createSlice } from "@reduxjs/toolkit"

const initialValue= {cart:[]}


const cart= createSlice({
    name:'cart',
    initialState:initialValue,
    reducers:{
        AddToCart:(state, action)=>{
           state.cart = [...state.cart, {...action.payload}]
        },
        RemoveFromCart:(state, action)=>{
            state.cart = state.cart.filter((item)=> state.cart.indexOf(item) !== action.payload)
        }
    }
})

export default cart.reducer
export  const  {AddToCart, RemoveFromCart} = cart.actions;