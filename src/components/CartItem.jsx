import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RemoveFromCart } from '../feature/cart/Cartslice'
const CartItem = () => {
  const dispatch= useDispatch()
  const cartItems= useSelector((state)=>state.cart)
  const totalCost = cartItems.cart.length >0 ? cartItems.cart.reduce((acc,{item})=>{
    return acc + Number(item.price)
  },0): 0;

  return (
    <main className="w-full h-[80vh] flex justify-center">
      <div className="mt-20 w-1/2">
        <h2 className="text-3xl font-bold w-full text-center">Cart</h2>
        <ul>
          {/*mapping all the  elements that are passed into the cart by using map and also dispatching the remove item event*/}
          {cartItems?.cart?.length > 0 ? (
            cartItems.cart.map(({item},index) => (
              <li key={index} className="flex items-center space-x-4 border-b p-4">
                <img src={item.img} alt={item.name} loading="lazy" className="w-20 h-20 object-cover" />
                <div>
                  <h3 className="text-xl">{item.name}</h3>
                  <p>${Number(item.price)}</p>
                </div>
                <button
                  className="ml-auto px-4 py-2 bg-red-500 text-white rounded"
                  onClick={() => dispatch(RemoveFromCart(index))}>  
                  Remove Item
                </button>
              </li>
            ))
          ) : (
            <p className="w-full text-center text-lg md:text-2xl">Your cart is empty.</p>
          )}
        </ul>
        <p className="w-full text-right text-lg md:text-2xl font-bold">Total:{totalCost.toFixed(2)}</p>
        {cartItems?.cart?.length > 0? (<div className="w-full h-32 flex justify-center items-center mb-4">
          <button className="w-20 h-10 bg-black text-white rounded-md">Check out</button>
        </div>):'' }
      </div>
    </main>
  );
};
export default CartItem
