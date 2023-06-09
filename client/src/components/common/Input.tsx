import React from 'react'
import show from '../../assets/show.png'
import hide from '../../assets/hide.png'
import { InputProps } from '../../interface'



const Input: React.FC<InputProps> = ({type, placeholder, name, signStyle, value, onchange, error}) => {
  return (
    <div>
        <input type={type} placeholder={placeholder} name={name} value={value} className={`${signStyle} rounded-lg border border-[#E5E5E5] outline-none px-[20px] text-[#000]`} onChange={onchange} required/>
        <p className='text-[red]'>{error}</p>
    
    </div>
  )
}

export default Input


export const SignInput: React.FC<InputProps> = ({type, placeholder, signStyle, caption,name, value, onchange}) => {
  const [showPassword, setShowPassword] = React.useState(true)
  return (
    <>
    {
      type === "checkbox" ? 
    <label className='w-[70%] text-left mx-auto flex items-center justify-start main '>
    <input type={type} name={name} value={value} placeholder={placeholder} className={`${signStyle} hidden `} onChange={onchange} />
    <span className='inline border w-[20px] h-[20px] border-[#FF6E31] border-[2px] geekmark'></span>
    <span className='text-[0.6rem] lg:text-[0.9rem]'>{caption}</span>   
    </label>
    :  type === "password" ? <div className='w-[70%] text-left mx-auto'>
    <label className='text-[#606060]'>{caption}</label>
    <div>
      <input type={showPassword ? 'password' : 'text'} name={name} value={value} placeholder={placeholder} className={`${signStyle} `} onChange={onchange} />
      <img src={showPassword ? show : hide} alt={showPassword ? show : hide} className="absolute right-[15%] md:right-[10%] mt-[-6.5%] md:mt-[-3.7%] lg:mt-[-2.2%] h-[3vh] " onClick={() => setShowPassword(!showPassword)} />
    </div>
    
  </div>  : <div className='w-[70%] text-left mx-auto'>
      <label className='text-[#606060]'>{caption}</label>
      <input type={type} name={name} value={value} placeholder={placeholder} className={`${signStyle} `} onChange={onchange} />
    </div> 

    }
    </>
    
  )
}