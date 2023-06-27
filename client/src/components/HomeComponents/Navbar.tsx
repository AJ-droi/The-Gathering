import React, { useEffect, useRef } from 'react'
import logo from '../../assets/logo.png'
import Button from '../common/Button'
import {HiOutlineMenuAlt1} from "react-icons/hi"
import { Link } from 'react-router-dom'

const Navbar = () => {
    const myRef = useRef<any>(null)
    const [isMobile, setIsMobile] = React.useState(false)

    const handleRef = async() => {
        const width = await myRef?.current?.clientWidth
        if(width > 769){
            setIsMobile(false)
        }else{
            setIsMobile(true)
    }
    }

    useEffect (() => {
        handleRef()
    }, [isMobile])

    return (
        <div ref={myRef} onChange={handleRef}>
           {isMobile ? <NavbarMobile  /> : <NavbarDesktop />} 
        </div>
    )
}

const NavbarDesktop = () => {
  return (
    <div className='bg-[#212121] flex justify-evenly relative z-[2]'>
        <img src={logo} alt="logo" />
        <ul className='flex justify-between items-center text-[#fff] text-[16px] w-[25%]'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
        </ul>
        <div className='flex justify-center items-center w-[20%]'>
        <Link to={"/signin"} className="w-[35%] mr-[5%]"><Button title="Sign In" classes="bg-[#fff] w-[100%] h-[4vh] " /></Link>
                <Link to={"/signup"} className="w-[35%]"><Button title="Sign Up" classes="bg-[#FF6E31] w-[100%] text-[#fff] h-[4vh]" /></Link>
        </div>
    

    </div>
  )
}

const NavbarMobile= () => {
    const [isOpen, setIsOpen] = React.useState(false)
    return (
      <div className='bg-[#212121] flex flex-col justify-evenly relative z-[15]'>
        <div className='w-[100%] flex justify-between items-center'>
            <img src={logo} alt="logo" />
            <HiOutlineMenuAlt1 className='text-[#fff] text-[4rem] pr-[5%]' onClick={() => setIsOpen(!isOpen)} />
        </div>
         
       {isOpen ?<div>
            <ul className='flex flex-col justify-between items-center text-[#fff] text-[16px] h-[15vh] my-[5%]'>
                <li onClick={() => setIsOpen(!isOpen)}><Link to="/">Home</Link></li>
                <li onClick={() => setIsOpen(!isOpen)}><Link to="/about">About Us</Link></li>
                <li onClick={() => setIsOpen(!isOpen)}><Link to="/gallery">Gallery</Link></li>
            </ul>
            <div className='flex justify-center items-center pb-[5%]'>
                <Link to={"/signin"} className="w-[30%] mr-[5%]"><Button title="Sign In" classes="bg-[#fff] w-[100%] h-[4vh] " /></Link>
                <Link to={"/signup"} className="w-[30%]"><Button title="Sign Up" classes="bg-[#FF6E31] w-[100%] text-[#fff] h-[4vh]" /></Link>
            </div>
        </div> : null}

      </div>
    )
  }

export default Navbar