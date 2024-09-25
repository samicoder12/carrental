import React from 'react'
import { VintageCars } from '../Data/Data'
import { IoMdPersonAdd, IoMdSpeedometer } from 'react-icons/io'
import { FcChargeBattery } from 'react-icons/fc'
import { TbManualGearbox } from 'react-icons/tb'
const LuxuryCar = () => {
 
  return (
    <div className=' container'>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {VintageCars.map((list) => (
            <div key={list.id} className="w-[300px] h-[450px] group rounded-2xl hover:bg-blueDark duration-200 ease-in bg-[#e1dfdf] group relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
                <img src={list.image} alt="images" className='w-full h-[200px] object-center rounded-2xl p-1' />
                <h1 className='text-sm group-hover:text-white font-medium py-2 pl-4'>{list.h1}</h1>
              <div className="flex items-center pl-4">
              <span className='text-2xl group-hover:text-white  font-bold '>{list.days}</span>
              <p className="group-hover:text-white ">{list.p}</p>
              </div>
                <div className="flex items-center space-x-2 justify-center pt-4">
                    <div className="flex flex-col space-y-1 items-center">
                        <span><IoMdSpeedometer  className='text-orange' /></span>
                        <h1 className="text-sm group-hover:text-white">4000</h1>
                    </div>
                    <div className="flex flex-col space-y-1 items-center">
                        <span><TbManualGearbox className='text-orange' /></span>
                        <h1 className="text-sm group-hover:text-white font-light">Auto</h1>
                    </div>
                    <div className="flex flex-col space-y-1 items-center">
                        <span><IoMdPersonAdd  className='text-orange' /></span>
                        <h1 className="text-sm group-hover:text-white">4 Person</h1>
                    </div>
                    <div className="flex flex-col space-y-1 items-center">
                        <span><FcChargeBattery  className='text-orange' /></span>
                        <h1 className="text-sm group-hover:text-white">Electric</h1>
                    </div>
                </div>
                <div className="flex justify-center px-2 pt-7">
                  <button  className='rounded-full border-black border-2 w-full bg-black text-white group-hover:bg-white group-hover:text-black py-1'>{list.price}</button>
                </div>
            </div>
            ))
        }
        </div> 
     
    </div>
  )
}

export default LuxuryCar