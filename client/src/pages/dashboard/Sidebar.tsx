import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import logoblack from "../../assets/logoblack.png"
import sidenav from "../../assets/sidenav.png"
import home from "../../assets/home.png"
import gallery from "../../assets/gallery.png"
import profile from "../../assets/profile.png"
import notification from "../../assets/notification.png"
import event from "../../assets/events.png"
import setting from "../../assets/setting.png"
import logout from "../../assets/logout.png"

const Sidebar = () => {
    const myRef = useRef<any>(null)
    const [isMobile, setIsMobile] = React.useState(false)

    const handleRef = async() => {
        const width = await myRef?.current.offsetParent.clientWidth
        console.log(myRef)
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
        {isMobile ?  <SidebarMobile /> : <SidebarDesktop />}
    </div>
  )
}

export default Sidebar

export const SidebarDesktop = () => {
    return(
        <div className='w-[20%] bg-[#F5F5F5] flex flex-col justify-between h-[100vh] fixed '>
            <div className='px-[5%]'>
                <div className='flex justify-start items-center w-[100%] '>
                    <img src={logoblack} alt="" className='h-[17vh]' />
                </div>
                <div className='flex items-center justify-end pb-[25%'>
                    <img src={sidenav} alt=""  />
                </div>
                <ul className='flex flex-col justify-between items-start text-[16px] w-[65%] h-[40vh] mx-[auto] pt-[5%] '>
                    <li><Link to="/dashboard" className='flex items-center'><img src={home} alt="" className='mr-[22%]'/>Home</Link></li>
                    <li><Link to="/dashboard/gallery" className='flex items-center'><img src={gallery} alt="" className='mr-[22%]'/>Gallery</Link></li>
                    <li><Link to="/dashboard/profile" className='flex items-center'><img src={profile} alt="" className='mr-[22%]'/>Profile</Link></li>
                    <li><Link to="/about" className='flex items-center'> <img src={notification} alt="" className='mr-[15%]'/>Notifications</Link></li>
                    <li><Link to="/about" className='flex items-center'><img src={event} alt="" className='mr-[22%]'/>Event</Link></li>
                </ul>
            </div>
            <div className='border-t-[1px] border-black'>
                <ul className='flex flex-col justify-between items-start text-[16px] w-[65%] h-[20vh] mx-[auto] '>
                    <li className='mt-[25%]'><Link to="/" className='flex items-center'><img src={setting} alt="" className='mr-[22%]'/>Settings</Link></li>
                    <li className='mb-[15%]'><Link to="/gallery" className='flex items-center'><img src={logout} alt="" className='mr-[22%]'/>Logout</Link></li>
                </ul>
            </div>

        </div>

    )}

export const SidebarMobile = () => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false)

    const handleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)

    }
        return(
            <div className='w-[10%] bg-[#F5F5F5] flex flex-col justify-between h-[100vh] fixed overflow-[none] '>
                <div className='px-[5%]'>
                    <div className='flex justify-start items-center w-[100%] '>
                        <img src={logoblack} alt="" className='h-[17vh]' />
                    </div>
                    <div className='flex items-center w-[65%] mx-[auto] pb-[25%]'>
                        <img src={sidenav} alt="" onClick={handleSidebar} />
                    </div>
                    <ul className='flex flex-col justify-between items-start text-[16px] w-[65%] h-[40vh] mx-[auto] pt-[5%] '>
                        <li><Link to="/dashboard" className='flex items-center'><img src={home} alt="" className='mr-[22%]'/></Link></li>
                        <li><Link to="/dashboard/gallery" className='flex items-center'><img src={gallery} alt="" className='mr-[22%]'/></Link></li>
                        <li><Link to="/dashboard/profile" className='flex items-center'><img src={profile} alt="" className='mr-[22%]'/></Link></li>
                        <li><Link to="/about" className='flex items-center'> <img src={notification} alt="" className='mr-[15%]'/></Link></li>
                        <li><Link to="/about" className='flex items-center'><img src={event} alt="" className='mr-[22%]'/></Link></li>
                    </ul>
                </div>
                <div className='border-t-[1px] border-black'>
                    <ul className='flex flex-col justify-between items-start text-[16px] w-[65%] h-[20vh] mx-[auto] '>
                        <li className='mt-[25%]'><Link to="/" className='flex items-center'><img src={setting} alt="" className='mr-[22%]'/></Link></li>
                        <li className='mb-[15%]'><Link to="/gallery" className='flex items-center'><img src={logout} alt="" className='mr-[22%]'/></Link></li>
                    </ul>
                </div>
    
            </div>
        
    
        )}
    