import React from 'react'
import logo from "../assets/images/logo.png"
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='bg-black'>
        <div className="container">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 place-items-center py-4 border-t border-white/20">
            <div className="">
              <img src={logo} alt="logo" />
            </div>
           
            <div className="text-white text-xs">
             Copyright @ 2024 All Right Reserved
            </div>
            </div>
        </div>
    </div>
  )
}

export default Footer