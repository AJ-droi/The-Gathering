import React from 'react'
import logo from '../../assets/logoblack.png'
import facebook from '../../assets/Facebook.png'
import instagram from '../../assets/instagram1.png'
import twitter from '../../assets/twitter.png'
import { Link } from 'react-router-dom'
import {FaTiktok, FaTelegramPlane} from 'react-icons/fa'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col lg:flex-row justify-between items-center lg:h-[30vh]'>
            <Link to={"/"}><img src={logo} alt="logo" className='h-[30vh] lg:h-[auto]' /></Link>
            <div className='pr-[5%] w-[60%] flex flex-col items-between lg:items-end'>
                <h4 className='text-center font-semibold'>Follow Us</h4>
                <ul className='flex justify-between items-center lg:w-[30%] my-[2%] '>
                    <li><Link to={'https://www.facebook.com/profile.php?id=100085799820860&mibextid=ZbWKwL'} target={"_blank"}><img src={facebook} alt="logo" className='h-[3vh]'/></Link></li>
                    <li><Link to={'https://instagram.com/_the.gathering?igshid=NTc4MTIwNjQ2YQ=='} target={"_blank"}><img src={instagram} alt="logo" className='h-[3vh]' /></Link></li>
                    <li><Link to={'https://twitter.com/_thegatheringng?t=XX-mYo8rdVTprCQ-fOrcKQ&s=09'} target={"_blank"}><img src={twitter} alt="logo" className='h-[3vh]' /></Link></li>
                    <li><Link to={'https://www.tiktok.com/@_thegathering?_t=8dZQqvW1ACU&_r=1'} target={"_blank"}><FaTiktok /></Link></li>
                    <li><Link to={'https://t.me/+r86P7uyHrOJmNTE0'} target={"_blank"}><FaTelegramPlane className="text-[#0088cc] h-[3vh]" /></Link></li>
                </ul>
            </div>
        </div>
        <h5 className='py-[2%] px-[5%] lg:px-[0%]'>Copyright © 2020 the gathering. All rights reserved.</h5>
    </div>
  )
}

export default Footer