import React from 'react'
import bonfire from '../../assets/bonfire.png'
import download from '../../assets/download.png'

const DashboardGallery = () => {
  return (
    <div className="bg-[#E0E0E0] grid grid-cols-3 lg:grid-cols-4  pt-[10%] pr-[1%]">
        <div>
            <img src={bonfire} alt="" />
            <div className='flex justify-end '>
                <img src={download} alt="" className='mt-[-29%] xl:mt-[-15%] h-[4vh] ' />
            </div> 
        </div>
        <div>
            <img src={bonfire} alt="" />
            <div className='flex justify-end '>
                <img src={download} alt="" className='mt-[-29%] xl:mt-[-15%] h-[4vh] ' />
            </div> 
        </div>
        <div>
            <img src={bonfire} alt="" />
            <div className='flex justify-end '>
                <img src={download} alt="" className='mt-[-29%] xl:mt-[-15%] h-[4vh] ' />
            </div> 
        </div>
        <div>
            <img src={bonfire} alt="" />
            <div className='flex justify-end '>
                <img src={download} alt="" className='mt-[-29%] xl:mt-[-15%] h-[4vh] ' />
            </div> 
        </div>
        <div>
            <img src={bonfire} alt="" />
            <div className='flex justify-end '>
                <img src={download} alt="" className='mt-[-29%] xl:mt-[-15%] h-[4vh] ' />
            </div> 
        </div>
        <div>
            <img src={bonfire} alt="" />
            <div className='flex justify-end '>
                <img src={download} alt="" className='mt-[-29%] xl:mt-[-15%] h-[4vh] ' />
            </div> 
        </div>
        <div>
            <img src={bonfire} alt="" />
            <div className='flex justify-end '>
                <img src={download} alt="" className='mt-[-29%] xl:mt-[-15%] h-[4vh] ' />
            </div> 
        </div>
        <div>
            <img src={bonfire} alt="" />
            <div className='flex justify-end '>
                <img src={download} alt="" className='mt-[-29%] xl:mt-[-15%] h-[4vh] ' />
            </div> 
        </div>
        
        
        
    </div>
  )
}

export default DashboardGallery