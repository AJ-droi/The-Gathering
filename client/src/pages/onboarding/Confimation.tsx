import React from 'react'
import OnboardingBg from './OnboardingBg'
import confirmation from '../../assets/confirmation.png'
import Button from '../../components/common/Button'
import { resendverification } from '../../redux/actions'
import { useDispatch } from 'react-redux'

const Confirmation = () => {
  return (
    <div>
        <OnboardingBg children={<ConfirmationChild />} />
    </div>
  )
}

export default Confirmation

const ConfirmationChild = () => {
    const dispatch = useDispatch() as unknown as any;
    const token = localStorage.getItem('signature') as unknown as string
    return(
        <div className='flex flex-col justify-between items-center h-[100vh] py-[7%]'>
            <div className='flex flex-col items-center '>
                <div className='px-[5%]'>
                <img src={confirmation} alt="" className='h-[20vh] lg:h-[auto]'/>
                </div>
                <p className='lg:text-[1.2rem] mt-[4%] px-[5%]'>A verification email has been sent to your email. Please check your email and click the link provided in the email to complete your account registration.  </p>
            </div>
            <div className='flex flex-col items-center '>
                <p className='lg:text-[1.2rem] mb-[4%] px-[5%]'>If you do not receive the email within the next five minutes, please check your spam folder. If you still haven’t received it, use the button below to resend verification email.</p>
                <Button title={'RESEND VERIFICATION EMAIL'} classes={'bg-[#FF6E31] py-[1%] px-[5%]'} textStyle={`text-[#fff] lg:text-[1.3rem]`} onClick={() => dispatch(resendverification(token))}  />
            </div>
            
        </div>
    )
}