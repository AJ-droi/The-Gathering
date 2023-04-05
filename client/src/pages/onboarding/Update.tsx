import React from 'react'
import update from "../../assets/update.png"
import Button from '../../components/common/Button'
import { SignInput } from '../../components/common/Input'
import OnboardingBg from './OnboardingBg'
import finish from '../../assets/finish.png'
import finshHover from '../../assets/finishHover.png'

const Update = () => {
  return (
    <div>
        <div>
            <OnboardingBg children={<UpdateChild />} />
        </div>
       
       

    </div>
  )
}

export default Update

const UpdateChild = () => {
    return(
        <div className='flex flex-col justify-evenly items-center h-[100vh] py-[7%]'>

            <div className=' flex flex-col items-center'>
                <img src={update} alt="" className='h-[15vh]' />
                <p>Please finish up setting your profile</p>
            </div>
            <SignInput type={'text'} placeholder={'Enter your username'} caption={'Username'} style={'border border-[#FF6E31] border-[2px] rounded-xl w-[100%] h-[5vh] pl-[4%]'} />
            <SignInput type={'tel'} placeholder={'Enter your phone number'} caption={'Phone number'} style={'border border-[#FF6E31] border-[2px] rounded-xl w-[100%] h-[5vh] pl-[4%]'} />
            <SignInput type={'date'} placeholder={'YYYY-MM-DD'} caption={'Date of Birth'} style={'border border-[#FF6E31] border-[2px] rounded-xl w-[100%] h-[5vh] px-[4%]'} />
            <SignInput type={'text'} placeholder={'Select your country'} caption={'Where are you from?'} style={'border border-[#FF6E31] border-[2px] rounded-xl w-[100%] h-[5vh] pl-[4%]'} />
            <SignInput type={'text'} placeholder={'Enter your username'} caption={'Gender'} style={'border border-[#FF6E31] border-[2px] rounded-xl w-[100%] h-[5vh] pl-[4%]'} />
            <div className='flex justify-end w-[100%] px-[15%]'>
                <Button title={'Finish'} classes={'border border-[#FF6E31] border-[1px] text-[#FF6E31] px-[5%] bg-[#FCFCFC] my-[2%] hover:bg-[#FF6E31] hover:text-[#fff]'} source={finish} />
            </div>
        </div>
    )
}
