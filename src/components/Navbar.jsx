import React, { useState } from 'react'
import { Link } from 'react-scroll'
import logo from "../assets/images/logo.png"
import { HiBars2, HiMiniXMark } from "react-icons/hi2";
import {  SignedIn, SignedOut,SignInButton, UserButton, useUser } from '@clerk/clerk-react'
// React



const Navbar = () => {
    const Menu =[
        {
            id:1,
            title:"Home",
            link:"/"
        },
        {
            id:2,
            title:"Rental detail",
            link:"rentaldetail"
        },
        {
            id:3,
            title:"How it work",
            link:"howitwork"
        },
        {
            id:4,
            title:"Why choose us",
            link:"services"
        },
        {
            id:5,
            title:"customer say",
            link:"customer"
        },
        {
            id:6,
            title:"Contact Us",
            link:"contact"
        },
    ]

    const [isOpen , setIsOpen] = useState(false);
    const toggleNavbar = () => {
        setIsOpen(!isOpen)
    };

    const menuVar = {
        initial: {
         scaleY:0,
        },
        animate:{
        scaleY:1,
        transition: {
            duration: 0.2,
            easeIn:[0.12,0,0.39,0]
        }
        },
        exit:{
       scaleY:0,
       transition: {
        duration:0.5,
        ease:[0.22,1,0.36,1]
    }
        }
    }
  const {isLoaded,isSignedIn, user}= useUser()

  return (
    <div className='w-full fixed  top-0 pt-3 py-4 z-40 bg-black'>
        <div className="container  px-5 xl:px-0">
            <div className="flex   items-center justify-between">
                <div className="flex order-2 items-center gap-3">
                   <img src={logo} alt="logo"  />
                </div>
                <div className="flex order-1">  
                        <button className='text-3xl 2xl:text-6xl text-white hover:text-orange/90' onClick={toggleNavbar}>
                             { isOpen ? <HiMiniXMark /> :<HiBars2 /> }
                        </button>        
                </div>
                <div className="order-3 hidden md:flex ">
                <SignedOut>
                <SignInButton>
                    <button className='px-5 2xl:px-10 2xl:py-4 2xl:text-lg hover:bg-orange rounded-full py-2 text-white border border-white text-sm font-semibold'>Login/Register</button>
                    </SignInButton>
                        </SignedOut>
                        <SignedIn>
                        <UserButton/>
                         </SignedIn>
                        
                </div>

            </div>
        </div>
        {
                isOpen && (
                    <div className="absolute w-[300px] 2xl:w-[700px] h-[440px] md:h-[380px] 2xl:h-[500px] lg:h-[380px] rounded-b-xl bg-black/80  drop-shadow-md">
                       
                        <ul className='flex flex-col justify-center  items-center space-y-3 container pt-6 px-4 '>
                            {Menu.map((menu) => (
                            <li key={menu.id}  className="text-base text-center py-2 w-full 2xl:py-4  rounded-md bg-orange text-white cursor-pointer font-normal hover:bg-black/95"><Link 
                            spy={true} 
                            smooth={true} 
                offset={-70} 
                duration={500} onClick={toggleNavbar}  to={menu.link} >{menu.title}</Link></li>
                        ))}
                        </ul>
                        <div className="flex md:hidden gap-5 justify-center items-center pt-4">
                        <SignedOut>
                        <SignInButton>
                        <button onClick={toggleNavbar} className='px-5 hover:bg-orange rounded-full py-2 text-white border border-white text-sm font-semibold'>Login/Register</button>
                        </SignInButton>
                        </SignedOut>
                        <SignedIn>
                        <UserButton/>
                         </SignedIn> 
                        </div>
                        
                    </div>
                )
            }
            
    </div>
  )
}

export default Navbar