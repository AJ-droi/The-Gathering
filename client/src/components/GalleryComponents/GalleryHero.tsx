import React from 'react'
import { HeroModal } from '../HomeComponents/Hero'
import logo from '../../assets/logo.png'

const GalleryHero = () => {
  return (
    <div>
         <HeroModal style={`absolute top-[0%] w-[100%] h-[80vh] bg-[#212121E5] flex items-center flex-col justify-between pt-[12%] `}>
            <div className="flex justify-center absolute top-[15%] z-[5] w-[100%]">
                <p className="text-[#fff]">
                Create <span className="text-[#FF6E31] ">Connect</span> Collab
                </p>
            </div>
            <img src={logo} alt="" className="lg:h-[40vh] md:h-[20vh]" />
            <h3 className='text-[#fff] text-[2.2rem] bg-[#545761] w-[100%] '>GALLERY</h3>
        </HeroModal> 

    </div>
  )
}

export default GalleryHero