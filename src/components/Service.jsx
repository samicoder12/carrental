import React from 'react'
import { LuUserCheck2 } from 'react-icons/lu'
import { GiReceiveMoney } from 'react-icons/gi'
import { BsStars } from 'react-icons/bs'
const Service = () => {
  return (
    <div className="bg-black pt-20 " id='services'>
        <div className='container'>
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold text-center text-white">Our Services & Benefits</h1>
                <p className="text-md text-balance font-medium text-center line-clamp-2 text-white ">To make renting easy and hassle-free, we provide a variety of services and advantages. We have you covered with a variety of vehicles and flexible rental terms.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-10 pb-20">
                        <div className="flex flex-col justify-center items-center space-y-3">
                            <span className=''><BsStars className='bg-white text-5xl p-2 rounded-full' /></span>
                            <h1 className="text-white font-semibold">Quality Choice</h1>
                            <p className="text-white text-center text-balance line-clamp-3 text-xs">We offer a wide range of high-quality vehicles to choose from, including luxury cars, SUVs, vans, and more.</p>
                        </div>

                        <div className="flex flex-col justify-center items-center space-y-3">
                            <span className=""><GiReceiveMoney className='bg-white text-5xl p-2 rounded-full' /></span>
                            <h1 className="text-white font-semibold">Quality Choice</h1>
                            <p className="text-white text-center text-balance line-clamp-3 text-xs">We offer a wide range of high-quality vehicles to choose from, including luxury cars, SUVs, vans, and more.</p>
                        </div>

                        <div className="flex flex-col justify-center items-center space-y-3">
                            <span className=""> <LuUserCheck2 className='bg-white text-5xl p-2 rounded-full' /></span>
                            <h1 className="text-white font-semibold">Quality Choice</h1>
                            <p className="text-white text-center text-balance line-clamp-3 text-xs">We offer a wide range of high-quality vehicles to choose from, including luxury cars, SUVs, vans, and more.</p>
                        </div>
            </div>
        </div>
    </div>
  )
}

export default Service