import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const handleVisibility = () =>{
    return setVisible(!visible)
  }
  return (
    <header className= "w-full h-20 flex justify-between items-center bg-neutral-500 fixed z-10 top-0 md:static">
      <Link to="/">
          <div className="w-8 h-8 ml-3">
            <span className="text-2xl">Logo</span>
          </div>
      </Link>
      <nav className="w-28 h-8 md:w-2/3 absolute md:static md:flex md:justify-center">
        <ul className= {`${visible? 'block': 'hidden'} w-[100vw] z-[5] md:z-0 md:top-0 h-32 flex flex-col justify-around items-center absolute top-12 bg-neutral-500  bg-opacity-70 md:relative md:block md:space-x-14 md:w-3/4 md:h-full   md:flex-row md:justify-between md:items-center`}>
          <li className="w-full text-center md:inline md:w-30 md:h-full">
            <NavLink to="/" style={({isActive})=>{
              return isActive? {color:`white`} : {}
            }} className="w-full h-full text-center hover:text-white">Home</NavLink>
          </li>
          <li className="w-full text-center md:inline md:w-24 md:h-full">
            <NavLink to="/T-shirts" style={({isActive})=>{
              return isActive? {color:`white`} : {}
            }}  className="w-full h-full text-center hover:text-white">T-shirts</NavLink>
          </li>
          <li className="w-full text-center md:inline md:w-24 md:h-full">
            <NavLink to="/Shoes" style={({isActive})=>{
              return isActive? {color:`white`} : {}
            }} className="w-full h-full text-center hover:text-white">Shoes</NavLink>
          </li>
          <li className="w-full text-center md:inline md:w-24 md:h-full">
            <NavLink to="/Jeans" style={({isActive})=>{
              return isActive? {color:`white`} : {}
            }} className="w-full h-full text-center hover:text-white"> Jeans</NavLink>
          </li>
        </ul>
      </nav>
      <div className="w-28 h-8 mr-6 flex justify-between md:justify-center">
        <img src="./Hamburger.png" alt="burger" className='w-11 h-10 object-cover md:hidden' onClick={handleVisibility}/>
        <NavLink to="/Cart"><img src="./shopping-cart.png" alt="cart" className='w-11 h-10 object-cover'/></NavLink>
      </div>
  </header>
  )
}

export default Navbar
