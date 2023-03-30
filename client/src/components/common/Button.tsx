import React from 'react'
interface ButtonProps {
  title: string,
  classes: string,
  source?:string
}

const Button : React.FC<ButtonProps> = ({title,classes,source}) => {
  return (
    <button className={source ? `${classes} rounded-md flex justify-between items-center px-[1%]`: `${classes} rounded-md`}><span className='text-[0.7rem] lg:text-[auto] '>{title}</span> <img src={source} alt={source} className="h-[2vh] lg:h-[auto]" /></button>
  )
}

export default Button