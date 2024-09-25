import React from 'react'
import PopularCar from '../pages/PopularCar'
import LuxuryCar from '../pages/LuxuryCar'
import VintageCar from '../pages/VintageCar'
import FamilyCar from '../pages/FamilyCar'
import OffRoadCar from '../pages/OffRoadCar'
import { Route, Routes } from 'react-router-dom'

const ButtonCards = () => {
  return (
    <div className='flex overflow-hidden  items-center  px-2 md:px-6 lg:px-10  mt-6 sm:mt-10 lg:mt-16 2xl:px-96 2xl:mt-28'>
        <Routes>
            <Route path='/' element={<OffRoadCar/>} />
            <Route path='/LuxuryCar' element={<LuxuryCar />} />
            <Route path='/PopularCar' element={<PopularCar />} />
            <Route path='/VintageCar' element={<VintageCar />} />
            <Route path='/FamilyCar' element={<FamilyCar/>} />
        </Routes>
   </div>
  )
}

export default ButtonCards