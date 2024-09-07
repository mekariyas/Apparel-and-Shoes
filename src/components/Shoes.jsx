import React,{useState, useEffect} from 'react'
import Shoes1 from '../assets/shoes1.jpg'
import Shoes2 from '../assets/shoes2.jpg'
import Shoes3 from '../assets/shoes3.jpg'
import Shoes4 from '../assets/shoes4.jpg'
import { useDispatch } from 'react-redux'
import { AddToCart } from '../feature/cart/Cartslice'

const shoesArr = [
  {id:1, name:'Shoes 1', price:30.20, img: Shoes1},
  {id:2, name:'Shoes 2', price:100.20, img: Shoes2},
  {id:3, name:'Shoes 3', price:200.20, img: Shoes3},
  {id:4, name:'Shoes 4', price:130.20, img: Shoes4},
]

const Shoes = () => {
  const [visible,setVisible] = useState(false)
  const handleClick = () =>{
    setVisible(true)
  }
  useEffect(()=>{
    if(visible){
      setTimeout(()=>{
        setVisible(false)
      },3000)
    }
  },[visible])
  const dispatch = useDispatch();
  return (
    <section className="w-full h-[100vh] relative">
      {visible?(<p className='w-32 h-16 text-center bg-slate-400 left-80  absolute top-1 z-[3]'>Added To cart</p>):''}
    <div className="w-full mt-20 flex flex-col justify-around space-y-10 md:space-y-0 items-center md:flex-row md:justify-start md:space-x-10 md:mt-4 md:pl-6">
    {/* Mapping over the shoes array*/}
    {shoesArr.map(item =>{
      return(
        <div key={item.id} className="w-44 h-60 flex flex-col justify-around  items-center shadow-md shadow-black rounded-sm">
          <h3 className="w-full text-center">{item.name}</h3>
          <img src={item.img} alt={item.name} loading="lazy" className='w-[90%] h-[50%] object-cover'/>
          <p>${parseFloat(item.price)}</p>
          <button className="w-28 h-12 bg-black text-white rounded-sm mb-4" onClick={() =>{
            {handleClick()}
            dispatch(AddToCart({item}))}}>Add To Cart</button>
        </div>
      )
    })}
    </div>
  </section>
  )
}

export default Shoes
