import React from 'react'
import notification from '../../assets/notification.png'

 const DashboardNotifications = () => {
  return (
    <div className='pt-[10%]'>
        <div className='flex justify-end px-[5%]'>
            <img src={notification} alt="" />
        </div>
        <div className='px-[5%]'>
            <p className='text-left  py-[2%]'>New user just signed up</p>
            <div className='bg-[#F2F2F2] h-[0.2rem]'> </div>
        </div>
        <div className='px-[5%]'>
            <p className='text-left  py-[2%]'>New user just signed up</p>
            <div className='bg-[#F2F2F2] h-[0.2rem]'> </div>
        </div>
        <div className=' px-[5%]'>
            <p className='text-left  py-[2%]'>New user just signed up</p>
            <div className='bg-[#F2F2F2] h-[0.2rem]'> </div>
        </div>

        <PaginationBar />
       
    </div>
  )
}

export const PaginationBar = ({prev, next, page}:any) => {



  return(
    <div className="flex items-center my-[5%] bg-[#F7F7F7] px-[3%] py-[2%] mx-[4%] rounded-md">
      <p className='text-[#9F9F9F]' onClick={prev}>Previous Page</p>
      <div className="flex w-[50%] justify-center">
      
        <p className="bg-[##C2C2C2] text-[#4C4C4C] w-[5%] px-[4%] py-[2%] flex justify-center rounded-[50%] bg-[#E6E6E6] mx-[2%]"> {page}</p>
      </div>
      <p className='text-[#4C4C4C]' onClick={next}>Next Page</p>
    
  </div>
  )
}

export default DashboardNotifications