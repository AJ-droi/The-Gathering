import React from 'react'
import heroBgd from '../../assets/heroBgd.png'
import join from '../../assets/join.png'
import { Layout } from '../../interface'
import Button from '../common/Button'


const Hero = () => {
  return (
    <div className=' h-[auto]  '>
        <div className='flex justify-end  img-clip3'>
            <img src={heroBgd} alt="heroBgd"  className='h-[80vh] '/>
        </div>
        <HeroModal style={`absolute top-[0%] w-[100%] h-[93vh] lg:h-[91vh] bg-[#000000D5] px-[5%]`}>
            <div className='lg:w-[80%] flex flex-col justify-center h-[inherit]  text-[#fff] lg:text-left'>
            <h3 className="text-[30px] lg:text-[70px]">
                The <span className='text-[#FF6E31] '>#1</span> creative <br /> community in Nigeria.
                </h3>
                <p className='text-[0.7rem] lg:text-[1.2rem] lg:w-[70%]'>
                A home for creatives and aspiring creatives from various fields such as photography, arts and crafts, fashion, music, film, performance art, TV/Radio hosting, and writing/publishing.
                </p>
                <Button title={`Join The Community`} classes="bg-[#FF6E31] w-[70%] md:w-[50%] lg:w-[25%] text-[#fff] h-[4vh] my-[4%] lg:mt-[2%] mx-auto lg:mx-[0%] px-[6%] lg:px-[3%]" source={join}></Button>
            </div>
        </HeroModal>
        <div className='flex justify-center absolute top-[15%] z-[5] w-[100%]'>
            <p className='text-[#fff] '>Create <span className='text-[#FF6E31] '>Connect</span> Collab</p>
        </div>
          
    </div>
  )
}

export default Hero

 export const HeroModal: React.FC<Layout> = ({children,style}) => {
    return (
        <div className={` ${style}`}>
            {children}
        </div>
    )}

