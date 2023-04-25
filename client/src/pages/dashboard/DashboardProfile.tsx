import React from 'react'
import dashprofile from '../../assets/dashprofile.png'
import camera from "../../assets/Camera.png"

const DashboardProfile = () => {
  return (
    <div className='bg-[#E0E0E0] h-[100vh]'>
        <div className='flex flex-col items-center py-[3%]'>
            <img src={dashprofile} alt="" className='h-[20vh] ' />
            <img src={camera} alt="" className='h-[8vh] mt-[-4%] ml-[8%]' />
        </div>
        <div className='grid grid-cols-2 justify-center pl-[3%] py-[2%] '>
            <div className='w-[100%] flex flex-col items-start my-[1%]'>
                <label className='my-[2%]'>First Name</label><br />
                <input type={'text'} placeholder={'Sonia'} value={'Sonia'} className={'border border-[#FF6E31] rounded-xl w-[90%] py-[2%] pl-[2%] mt-[-8%] xl:mt-[-3%]'} />
            </div>
            <div className='w-[100%] flex flex-col items-start my-[1%]'>
                <label className='my-[2%]'>Last Name</label><br />
                <input type={'text'} placeholder={'Sonia'} value={'Akpati'} className={'border border-[#FF6E31] rounded-xl w-[90%] py-[2%] pl-[2%] mt-[-8%] xl:mt-[-3%]' }  />
            </div>
            <div className='w-[100%] flex flex-col items-start my-[1%]'>
                <label className='my-[2%]'>Email</label><br />
                <input type={'email'} placeholder={'Sonia'} value={'Soniaakpati7@gmail.com'} className={'border border-[#FF6E31] rounded-xl w-[90%] py-[2%] pl-[2%] mt-[-8%] xl:mt-[-3%]'} />
            </div>
            <div className='w-[100%] flex flex-col items-start my-[1%]'>
                <label className='my-[2%]'>Phone Number</label><br />
                <input type={'tel'} placeholder={'Sonia'} value={'+2347062639647'} className={'border border-[#FF6E31] rounded-xl w-[90%] py-[2%] pl-[2%] mt-[-8%] xl:mt-[-3%]'} />
            </div>

        </div>
    </div>
  )
}

export default DashboardProfile