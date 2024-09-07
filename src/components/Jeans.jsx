import React,{useState,useEffect} from 'react'
import Jeans1 from'../assets/Jeans1.jpg'
import Jeans2 from'../assets/Jeans2.jpg'
import Jeans3 from '../assets/Jeans3.jpg'
import Jeans4 from '../assets/Jeans4.jpg'
import { useDispatch } from 'react-redux'
import { AddToCart } from '../feature/cart/Cartslice'


const JeansArr=[
  {id:1, name:'Jeans 1', price:30.20, img: Jeans1},
  {id:2, name:'Jeans 2', price:25.20, img: Jeans2},
  {id:3, name:'Jeans 3', price:22.20, img: Jeans3},
  {id:4, name:'Jeans 4', price:40.20, img: Jeans4},
]

const Jeans = () => {
  const dispatch = useDispatch()
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

  return (
    <section className="w-full h-[100vh]">
      {visible?(<p className='w-32 h-16 text-center bg-slate-400 left-80  absolute top-1 z-[3]'>Added To cart</p>):''}
      <div className="w-full mt-20 flex flex-col justify-around space-y-10 md:space-y-0 items-center md:flex-row md:justify-start md:space-x-10 md:mt-4 md:pl-6">
      {JeansArr.map(item =>{
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

export default Jeans
