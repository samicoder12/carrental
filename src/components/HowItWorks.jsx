import React from 'react'
import { FaCarRear } from 'react-icons/fa6';
import { HiCalendarDays, HiMapPin } from "react-icons/hi2";
const HowItWorks = () => {
    const Items = [
        {
            id:1,
            icons:<h1><HiMapPin /></h1>,
            h1:"Choose location",
            p:"Choose your and find your best car"
        },
        {
        id:2,
        icons:<h1><HiCalendarDays /></h1>,
        h1:"Pick-up date",
        p:"Select your pick up date and time to book your car"
    }, {
        id:3,
        icons:<h1><FaCarRear /></h1>,
        h1:"Book your car",
        p:"Book your car and we will deliver it directly to you"
    },

    ]
  return (
    <div className='w-full container mt-10 md:mt-20 lg:mt-32'>
        <div className="flex flex-col">
            <div className="flex flex-col justify-center items-center space-y-4">
                <button className="px-8 py-4 text-sm bg-blue/15 text-blueDark font-semibold rounded-md">
                HOW IT WORKS
                </button>
                <p className="text-gray text-2xl font-medium text-center">Rent with following 3 working steps</p>

            </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-content-center place-items-center pb-10 pt-12">
           {
            Items.map((item) => (
                <div key={item.id} className="flex flex-col justify-center items-center space-y-2 ">
                    <button className='w-16 h-16 mb-2  rounded-md text-3xl flex items-center justify-center text-blueDark bg-blue/20'>{item.icons}</button>
                    <h1 className=" text-[20px] text-gray font-medium ">{item.h1}</h1>
                    <p className="text-[14px] text-gray font-medium text-center text-balance line-clamp-2">{item.p}</p>
                </div>
            ))
           }
        </div>
    </div>
    </div>
  )
}

export default HowItWorks