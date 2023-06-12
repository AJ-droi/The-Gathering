import React from 'react'
import { Button } from 'react-bootstrap'
import { GrAdd } from 'react-icons/gr'
import bonfire from '../../assets/bonfire.png'
import download from '../../assets/download.png'
import {HiXMark} from 'react-icons/hi2'

const DashboardGallery = () => {
    const role = localStorage.getItem('role')
    const [show, setShow] = React.useState(false)

    const toggleShow = () => {
        setShow(!show)
    }
  return (
    <div>
        {role === "photographer" ?<Button className='bg-[#FF6E31] flex-row-reverse w-[25%]  py-[1%] px-[5%] text-[#fff] mx-[auto] rounded-md mt-[3%]' onClick={toggleShow}>Add Photo</Button> : null}
        {show ?<AddPhotos click={toggleShow}/> : null}
         <div className="bg-[#E0E0E0] grid grid-cols-3 lg:grid-cols-4  pt-[5%] pr-[1%]">
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
        

    </div>
   
  )
}

export default DashboardGallery

const AddPhotos = ({click}:any) => {
  return(
    <div className='fixed bg-[#000000A5] w-[100%] h-[100vh] top-[0%] left-[0%] flex flex-col items-center justify-center'>
      <div className="bg-[#fff] flex flex-col justify-center items-center w-[50%] rounded-md py-[3%] border border-dashed border-[4px] ">
        <GrAdd className="text-[#FF6E31] text-[3rem]"/>
        <p className="text-[1.3rem] my-[2%]">Drag and Drop or <span className="text-[#FF6E31] underline">Browse</span></p>
        <HiXMark className='absolute text-[2.2rem] right-[27%] top-[39%]' onClick={click} />
      </div>

    </div>

  )}