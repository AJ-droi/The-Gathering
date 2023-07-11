import React from 'react'
import OnboardingBg from './OnboardingBg'
import verify from '../../assets/verify.png'
import Button from '../../components/common/Button'
import { useLocation } from 'react-router-dom'
import { verifyUser } from '../../redux/actions'
import { useDispatch } from 'react-redux'

const Verify = () => {
  return (
    <div>
        <OnboardingBg children={<VerifyChild />} />

    </div>
  )
}

export default Verify

const VerifyChild = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get('token') as unknown as string;
    const dispatch = useDispatch() as unknown as any;

    return (
        <div className='flex flex-col justify-center items-center h-[100vh]'>
            <div className='px-[5%]'>
                <img src={verify} alt="" />
            </div>
            <p className='lg:text-[1.3rem] w-[55%] my-[5%]'>Welcome, Please verify your email address by clicking on the button below.</p>
            <Button title={'VERIFY EMAIL'} classes={'bg-[#FF6E31] py-[1%] px-[5%]'} textStyle={`text-[#fff] lg:text-[1.3rem]`} onClick={() => dispatch(verifyUser(token))} />

        </div>
    )
}