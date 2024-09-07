import React,{useState, useEffect} from 'react'
import Tshirt from '../assets/tshirt.jpg'
import Tshirt2 from '../assets/Tshirt1.jpg'
import Tshirt3 from '../assets/T-shirtRack.jpg'
import Tshirt4 from '../assets/T-shirtRack2.jpg'
import{ useDispatch } from 'react-redux'
import { AddToCart } from '../feature/cart/Cartslice'


const tshirtArr = [
  {id:1, name:'T-shirt', price:50.20, img: Tshirt},
  {id:2, name:'T-shirt2', price:75.20, img: Tshirt2},
  {id:3, name:'T-shirt3', price:80.45, img:Tshirt3},
  {id:4, name:'T-shirt4', price:97.20, img:Tshirt4}
]

const Tshirts = () => {
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
      {tshirtArr.map(item =>{
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

export default Tshirts
