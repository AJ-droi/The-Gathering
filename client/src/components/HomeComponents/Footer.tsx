import React from 'react'
import logo from '../../assets/logoblack.png'
import facebook from '../../assets/Facebook.png'
import instagram from '../../assets/instagram1.png'
import twitter from '../../assets/twitter.png'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col lg:flex-row justify-between items-center'>
            <img src={logo} alt="logo" className='h-[30vh] lg:h-[auto]' />
            <div className='pr-[5%]'>
                <h4>Follow Us</h4>
                <ul className='flex lg:flex-col justify-evenly items-start h-[15vh]'>
                    <li><img src={facebook} alt="logo" className='h-[3vh]'/></li>
                    <li><img src={instagram} alt="logo" className='h-[3vh]' /></li>
                    <li><img src={twitter} alt="logo" className='h-[3vh]' /></li>
                </ul>
            </div>
        </div>
        <h5 className='py-[2%] px-[5%] lg:px-[0%]'>Copyright © 2020 the gathering. All rights reserved.</h5>
    </div>
  )
}

export default Footer