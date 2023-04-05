import React from 'react'
interface ButtonProps {
  title: string,
  classes: string,
  source?:string,
  textStyle?:string,
  imgHeight?:string
}

const Button : React.FC<ButtonProps> = ({title,classes,source, textStyle, imgHeight}) => {
  return (
    <button className={source ? `${classes} rounded-md flex justify-between items-center px-[1%]`: `${classes} flex items-center justify-center rounded-md`}><span className={ `${textStyle} lg:text-[auto] `}>{title}</span> <img src={source} alt={source} className={`h-[2vh] ${imgHeight}`} /></button>
  )
}

export default Button

