import React from 'react'
import {
    GooglePlayButton,
    AppGalleryButton,
    ButtonsContainer,
  } from "react-mobile-app-button";
const Download = () => {
    const APKUrl =
    "https://play.google.com/store/games?hl=en";
     const iOSUrl = "https://www.apple.com/app-store/";
  return (
    <div className='bg-black '>
        <div className="container px-1 md:px-6">
            <div className=" grid overflow-x-hidden grid-cols-1 md:grid-cols-2 py-20 gap-6 place-items-center">
            <div className="space-y-3 flex flex-col">
                <h1 className="text-white flex gap-4 font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl">Download our mobile app<span>⚡️</span></h1>
                <p className="text-white text-center md:text-left line-clamp-3 text-balance text-sm">Get exclusive access to car rentals with our mobile app. Download now and experience convenience on the go.</p>
            </div>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-1">
            <ButtonsContainer>
                <GooglePlayButton
                    url={APKUrl}
                    theme={"light"}
                    className="bg-white "
                />
                <AppGalleryButton
                    url={iOSUrl}
                    theme={"light"}
                    className="bg-white "
                />
                </ButtonsContainer>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Download