import React, { useEffect, useRef } from 'react'
import logo from '../../assets/logo.png'
import Button from '../common/Button'
import {HiOutlineMenuAlt1} from "react-icons/hi"
import { Link, useLocation } from 'react-router-dom'

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
    const location = useLocation().pathname
  return (
    <div className='bg-[#212121] flex justify-evenly relative z-[25] h-[10vh]'>

         <Link to="/" className='w-[15%] flex items-center justify-center '><img src={logo} alt="logo" className='lg:h-[20vh]'/></Link> 

        <ul className='flex justify-between items-center text-[#fff] text-[16px] w-[25%] '>
        <Link to="/"><li className={location === "/" ?`text-[#FF6E31]` : ``}>Home</li></Link>
        <Link to="/about"><li className={location === "/about" ?`text-[#FF6E31]` : ``}>About Us</li></Link>
        <Link to="/gallery"><li className={location === "/gallery" ?`text-[#FF6E31]` : ``}>Gallery</li></Link>
        </ul>
        <div className='flex justify-center items-center w-[20%]'>
        <Link to={"/login"} className="w-[35%] mr-[5%]"><Button title="Sign In" classes="bg-[#fff] w-[100%] h-[4vh] " /></Link>
                <Link to={"/signup"} className="w-[35%]"><Button title="Sign Up" classes="bg-[#FF6E31] w-[100%] text-[#fff] h-[4vh]" /></Link>
        </div>
    

    </div>
  )
}

const NavbarMobile= () => {
    const [isOpen, setIsOpen] = React.useState(false)
    const location = useLocation().pathname
    return (
      <div className={`bg-[#212121] flex flex-col justify-evenly relative z-[15] ${isOpen ? `h-[auto]` : `h-[10vh]`}`}>
        <div className='w-[100%] flex justify-between items-center'>
        <Link to="/" className='w-[75%] flex items-center justify-start'><img src={logo} alt="logo" className='h-[150px] w-[150px]'/></Link> 
            <HiOutlineMenuAlt1 className='text-[#fff] text-[4rem] pr-[5%]' onClick={() => setIsOpen(!isOpen)} />
        </div>
         
       {isOpen ?<div >
            <ul className='flex flex-col justify-between items-center text-[#fff] text-[16px] h-[15vh] my-[5%]'>
                <li className={location === "/" ?`text-[#FF6E31]` : ``} onClick={() => setIsOpen(!isOpen)}><Link to="/">Home</Link></li>
                <li className={location === "/about" ?`text-[#FF6E31]` : ``} onClick={() => setIsOpen(!isOpen)}><Link to="/about">About Us</Link></li>
                <li className={location === "/gallery" ?`text-[#FF6E31]` : ``} onClick={() => setIsOpen(!isOpen)}><Link to="/gallery">Gallery</Link></li>
            </ul>
            <div className='flex justify-center items-center pb-[5%]'>
                <Link to={"/login"} className="w-[30%] mr-[5%]"><Button title="Sign In" classes="bg-[#fff] w-[100%] h-[4vh] " /></Link>
                <Link to={"/signup"} className="w-[30%]"><Button title="Sign Up" classes="bg-[#FF6E31] w-[100%] text-[#fff] h-[4vh]" /></Link>
            </div>
        </div> : null}

      </div>
    )
  }

export default Navbar