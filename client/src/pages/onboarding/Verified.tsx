import React from 'react'
import OnboardingBg from './OnboardingBg'
import verified from '../../assets/verified.png'
import Button from '../../components/common/Button'
import arrowRight from '../../assets/arrow-right.png'

const Verified = () => {
  return (
    <div>
        <OnboardingBg children={<VerifiedChild />} />
    </div>
  )
}

export default Verified

const VerifiedChild = () => {
    return(
        <div className='flex flex-col justify-center items-center h-[100vh] py-[7%]'>

            <div>
                <img src={verified} alt="" className='h-[40vh]' />
            </div>
            <p className='md:text-[1.2rem] w-[80%] px-[5%] my-[5%]'>Your Email <span className='text-[#FF6E31]'>soniaakpati7@gmail.com</span> has been successfully verified. </p>

            <Button title={'Continue'} classes={'bg-[#FF6E31] py-[1%] px-[7%]'} textStyle={`text-[#fff] text-[1.1rem]`} source={arrowRight} />

            
        </div>
    )
}