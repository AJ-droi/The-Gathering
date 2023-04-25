import React from 'react'
import headerBg from '../../assets/headerBg.png'
import dashprofile from '../../assets/dashprofile.png'

const Header = () => {
  return (
    <div className='bg-[#F5F5F5] flex justify-between h-[15vh] md:h-[auto] border border-l-[#FF6E31] border-[2px]'>
        <div className='flex items-center md:items-end pl-[5%]'>
            <img src={dashprofile} alt="" className=' h-[10vh] md:h-[20vh]  md:mb-[-25%]' />
            <div>
                <h4>Welcome, Sonia</h4>
                <h4>ID number: 12345</h4>
            </div>
        </div>
        <div className='w-[30%]'>
          <img src={headerBg} alt="" />
        </div>

        
    </div>
  )
}

export default Header