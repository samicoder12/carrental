import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import car from "../assets/images/car.png"
const Home = () => {
  return (
    <div className='relative w-full h-[70vh] md:h-[90vh] lg:h-[100vh] xl:h-[150vh] bg-black'>
    <img src={car} alt="car" className="w-full pt-24 md:pt-0 md:mt-5 lg:-mt-7 object-center " />
       <div className="absolute top-0 left-0">
       <Navbar />
       <Hero />
       </div>
    </div>
  )
}

export default Home