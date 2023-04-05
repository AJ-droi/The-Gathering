import React from 'react'
import OnboardingBg from './OnboardingBg'
import verify from '../../assets/verify.png'
import Button from '../../components/common/Button'

const Verify = () => {
  return (
    <div>
        <OnboardingBg children={<VerifyChild />} />

    </div>
  )
}

export default Verify

const VerifyChild = () => {
    return (
        <div className='flex flex-col justify-center items-center h-[100vh]'>
            <div className='px-[5%]'>
                <img src={verify} alt="" />
            </div>
            <p className='lg:text-[1.3rem] w-[55%] my-[5%]'>Welcome <span className='text-[#FF6E31]'>Sonia</span>, Please verify your email address by clicking on the button below.</p>
            <Button title={'VERIFY EMAIL'} classes={'bg-[#FF6E31] py-[1%] px-[5%]'} textStyle={`text-[#fff] lg:text-[1.3rem]`} />

        </div>
    )
}