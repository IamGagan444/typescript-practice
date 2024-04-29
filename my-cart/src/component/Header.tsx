import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-around items-center  h-[4rem] bg-stone-800 text-white font-semibold'>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/cart"}>Cart</NavLink>
      
    </div>
  )
}

export default Header
