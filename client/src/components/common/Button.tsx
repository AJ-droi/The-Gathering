import React from 'react'
import { ButtonProps } from '../../interface'

const Button : React.FC<ButtonProps> = ({title,classes,source, textStyle, imgHeight, onClick}) => {
  return (
    <button type="submit" className={source ? `${classes} rounded-md flex justify-between items-center px-[1%]`: `${classes} flex items-center justify-center rounded-md`} onClick={onClick} ><span className={ `${textStyle} lg:text-[auto] `}>{title}</span> <img src={source} alt={source} className={`h-[2vh] ${imgHeight}`}  /></button>
  )
}

export default Button

