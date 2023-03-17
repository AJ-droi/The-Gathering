import React from 'react'
interface ButtonProps {
  title: string,
  classes: string,
  source?:string
}

const Button : React.FC<ButtonProps> = ({title,classes,source}) => {
  return (
    <button className={source ?`${classes} rounded-md flex justify-between items-center px-[1%]`: `${classes} rounded-md`}>{title} <img src={source} alt={source} /></button>
  )
}

export default Button