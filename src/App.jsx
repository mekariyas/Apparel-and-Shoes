import React,{lazy, Suspense} from 'react'
import {Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'
import Loading from './components/Loading'

const Home = lazy(()=> import('./components/Home'))
const Tshirts = lazy(()=> import('./components/T-shirts'))
const Shoes = lazy(()=> import('./components/Shoes'))
const Jeans = lazy(()=>import('./components/Jeans'))
const CartItem = lazy(()=>import('./components/CartItem'))


const App = () => {
  return(
       <>
          <Navbar/>
              <Suspense fallback={<Loading/>}>
                 <Routes>
                     <Route path="/" element={<Home/>}/>
                     <Route path="/Shoes" element={<Shoes/>}/>
                     <Route path="/T-shirts" element={<Tshirts/>}/>
                     <Route path="/Jeans" element={<Jeans/>}/>
                     <Route path="/Cart" element={<CartItem/>}/>
                     <Route path="*" element={<NotFound/>}/>
                </Routes>
              </Suspense>
          </>
)}


export default App
