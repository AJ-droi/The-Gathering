import React from 'react'
import aboutBg from "../../assets/aboutBg.png";
import aboutLine from "../../assets/aboutLine.png"

const Mission = () => {
  return (
    <div>
        <div className="img-clip2">
            <img src={aboutBg} alt="" className="opacity-[0.5]" />
        </div>
        <h3 className='text-left text-3xl underline text-[#FF6E31] ml-[15%] mb-[2%]'>Our Mission</h3>

        <div className='flex px-[5%] lg:px-[0%] lg:pl-[10%] lg:w-[50%]'>
            <img src={aboutLine} alt="" className='h-[48vh] md:h-[41vh] lg:h-[40vh]' />
            <div className='text-left pl-[5%] '>
                <p className='text-[0.8rem]'>To reach out to budding young creative talents in photography, cinematography, fashion, visual arts, modelling by engaging them in projects that'll enable them work closely together.</p>
                <p className='text-[0.8rem] mt-[8%]'>To create a fun-filled aesthetic outdoor lifestyle experience for participants.</p>
                <p className='text-[0.8rem] mt-[18%] md:mt-[11%] lg:mt-[15%]'>To connect creatives and aspiring creatives across the country.</p>
            </div>
        </div>

        

    </div>
  )
}

export default Mission