import React from 'react'
import OnboardingBg from './OnboardingBg'
import email from '../../assets/email.png'
import Button from '../../components/common/Button'

const Expired = () => {
  return (
    <div>
        <OnboardingBg children={<ExpiredChild />} />
    </div>
  )
}

export default Expired

const ExpiredChild = () => {
    return(
        <div className='flex flex-col justify-center items-center h-[100vh] py-[7%]'>

            <div className='px-[5%]'>
                <img src={email} alt="" />
            </div>
            <p className='lg:text-[1.2rem] w-[80%] px-[5%] my-[5%]'>Your Email verification link has expired.</p>
           
            <Button title={'RESEND VERIFICATION EMAIL'} classes={'bg-[#FF6E31] py-[1%] px-[5%]'} textStyle={`text-[#fff] lg:text-[1.1rem]`} />
            
        </div>
    )
}