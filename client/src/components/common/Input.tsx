import React from 'react'
import show from '../../assets/show.png'
import hide from '../../assets/hide.png'

interface InputProps {
    type: string,
    placeholder: string,
    source?:string,
    signStyle?:string,
    caption?:string
  }

const Input: React.FC<InputProps> = ({type, placeholder, signStyle}) => {
  return (
    <div>
        <input type={type} placeholder={placeholder} className={`${signStyle} rounded-lg border border-[#E5E5E5] outline-none px-[20px] text-[#000]`} />
    </div>
  )
}

export default Input


export const SignInput: React.FC<InputProps> = ({type, placeholder, signStyle, caption}) => {
  const [showPassword, setShowPassword] = React.useState(true)
  return (
    <>
    {
      type === "checkbox" ? 
    <label className='w-[70%] text-left mx-auto flex items-center justify-start main '>
    <input type={type} placeholder={placeholder} className={`${signStyle} hidden `} />
    <span className='inline border w-[20px] h-[20px] border-[#FF6E31] border-[2px] geekmark'></span>
    <span className='text-[0.6rem] lg:text-[0.9rem]'>{caption}</span>   
    </label>
    :  type === "password" ? <div className='w-[70%] text-left mx-auto'>
    <label className='text-[#606060]'>{caption}</label>
    <div>
      <input type={showPassword ? 'password' : 'text'} placeholder={placeholder} className={`${signStyle} `} />
      <img src={showPassword ? show : hide} alt={showPassword ? show : hide} className="absolute right-[15%] md:right-[10%] mt-[-7%] md:mt-[-4%] lg:mt-[-2.3%] " onClick={() => setShowPassword(!showPassword)} />
    </div>
    
  </div>  : <div className='w-[70%] text-left mx-auto'>
      <label className='text-[#606060]'>{caption}</label>
      <input type={type} placeholder={placeholder} className={`${signStyle} `} />
    </div> 

    }
    </>
    
  )
}