import React from 'react'
import sign from '../../assets/sign.png'
import arrowleft from '../../assets/arrow-left.png'
import { Link } from 'react-router-dom'
import { Onboarding } from '../../interface'


const OnboardingBg : React.FC<Onboarding> = ({children}) => {
  return (
    <div className='flex justify-between'>
        <div className='flex items-center justify-center bg-[#FCFCFC] w-[30%] md:w-[50%] h-[100vh]'>
            <img src={sign} alt="" className='md:h-[70vh]'/>
            <Link to=""><img src={arrowleft} alt="" className=' absolute top-[2%] left-[2%]' /></Link>
        </div>
        <div className=' w-[70%] md:w-[50%] '>
            {children}
        </div>

    </div>
  )
}

export default OnboardingBg