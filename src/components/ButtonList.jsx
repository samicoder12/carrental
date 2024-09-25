import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const ButtonList = () => {
    const linkClass = ({isActive}) => 
        isActive
      ? "px-3 py-2 text-center bg-orange text-white rounded-full" : "px-3 py-2 text-center bg-blueDark text-white hover:bg-orange rounded-full"
  return (
    <div className=" flex justify-center pt-8 ">
               <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 py-4'>
                  <NavLink  to="/" className={linkClass}><li>Off-Road Car</li></NavLink>
                  <NavLink  to="/LuxuryCar" className={linkClass}><li>Luxury Car</li></NavLink>
                  <NavLink  to="/PopularCar" className={linkClass}><li>Popular Car</li></NavLink>
                  <NavLink  to="/VintageCar" className={linkClass}><li>Vintage Car</li></NavLink>
                  <NavLink  to="/FamilyCar" className={linkClass}><li>Family Car</li></NavLink>
                </ul>
    </div>
  )
}

export default ButtonList