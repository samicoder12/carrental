import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { HiMiniCalendar } from 'react-icons/hi2'
import { MdOutlineEmojiEmotions } from 'react-icons/md'

const Content = () => {
  return (
    <div  className='container mt-20' id='howitwork'>
       <div className="flex flex-col items-center justify-center space-y-4">
            <h1 className="text-4xl font-bold">How it woks</h1>
            <p className="text-sm text-center line-clamp-2 xl:text-lg text-balance font-medium">Renting a luxury car has never been easier. Our streamlined process makes it simple for you to book and confirm your vehicle of choice online</p>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 pt-2 place-content-center place-items-center">
        <div className="flex flex-col space-y-8 px-4">
        <div className="flex gap-4 items-center ">
            <div className=""><FaSearch className='text-xl'/></div>
            <div className="flex flex-col space-y-3">
                <h1 className="text-lg xl:text-2xl font-semibold">Browse and select</h1>
                <p className="text-xs xl:text-lg font-medium md:line-clamp-2 text-balance line-clamp-3">Choose from our wide range of premium cars, select the pickup and return dates and locations that suit you best.</p>
            </div>
        </div>
        <div className="flex gap-4 items-center">
            <div className=""><HiMiniCalendar className='text-xl' /></div>
            <div className="flex flex-col space-y-3">
                <h1 className="text-lg xl:text-2xl font-semibold">Book and confirm</h1>
                <p className="text-xs xl:text-lg font-medium md:line-clamp-2 text-balance line-clamp-3">Book your desired car with just a few clicks and receive an instant confirmation via email or SMS.</p>
            </div>
        </div>
        <div className="flex gap-4 items-center">
            <div className=""><MdOutlineEmojiEmotions className='text-xl' /></div>
            <div className="flex flex-col space-y-3">
                <h1 className="text-lg xl:text-2xl font-semibold">Enjoy your ride</h1>
                <p className="text-xs font-medium xl:text-lg md:line-clamp-2 text-balance line-clamp-3">Pick up your car at the designated location and enjoy your premium driving experience with our top-quality service.</p>
            </div>
        </div>
        </div>
        <div className="flex justify-center items-center">
           <img src="https://i.pinimg.com/736x/f7/c4/c5/f7c4c5428bd7b17fb101e516c9d815a0.jpg" alt="jeep" />
        </div>
       </div>
    </div>
  )
}

export default Content