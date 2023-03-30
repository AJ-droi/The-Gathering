import React from 'react'

interface InputProps {
    type: string,
    placeholder: string,
    source?:string,
    style?:string
  }

const Input: React.FC<InputProps> = ({type, placeholder, style}) => {
  return (
    <div>
        <input type={type} placeholder={placeholder} className={`${style} rounded-lg border border-[#E5E5E5] outline-none px-[20px] text-[#000]`} />
    </div>
  )
}

export default Input