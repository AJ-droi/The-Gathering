import React from 'react'
import Button from '../common/Button'
import Input from '../common/Input'
import map from '../../assets/map.svg'
import call from '../../assets/call.png'
import mail from '../../assets/mail.png'

const Contact = () => {
  return (
    <div className='flex flex-col lg:flex-row bg-[#212121] text-[#fff] justify-between items-start px-[10%] py-[5%]'>
        <div className='text-left flex flex-col justify-between h-[45vh] lg:h-[37vh]'>
            <h4>Feel free to contact us for any kind of enquiry or Partnerships.</h4>
            <h4>Thank you for your interest in hiring a service from us.</h4>
            <div>
                <div className='flex items-center'>
                    <img src={map} alt="" />
                    <p>Office Address</p>
                </div>
                <p>6391 Elgin St. Celina, Delaware 10299</p>
            </div>
            <div>
                <div className='flex items-center'>
                    <img src={mail} alt="" />
                    <p>Mail address</p>
                </div>
                <p>curtis.weaver@example.com</p>
            </div>
            <div>
                <div className='flex items-center'>
                    <img src={call} alt="" />
                    <p>Phone number</p>
                </div>
                <p>(217) 555-0113</p>
            </div>

        </div>
        <div className='w-[100%] lg:w-[50%]'>
            <div className='flex flex-col lg:flex-row justify-between '>
                <Input type={''} placeholder={'First Name'} style={`h-[50px] w-[100%] lg:w-[auto] mt-[5%] lg:mt-[0%]`} />
                <Input type={''} placeholder={'Last Name'} style={`h-[50px] w-[100%] lg:w-[auto] mt-[2%] lg:mt-[0%]`} />
            </div>
       
            <Input type={''} placeholder={'Email Address'} style={`w-[100%] lg:w-[70%] my-[3%] h-[50px]`} />
        
            <Input type={''} placeholder={'message'} style={`w-[100%] h-[100px]`} />
            <Button title={'Send'} classes={'bg-[#FF6E31] w-[100%] my-[2%] h-[40px] my-[6%]'} />
               
        </div>

    </div>
  )
}

export default Contact