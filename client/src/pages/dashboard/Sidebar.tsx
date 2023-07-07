import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logoblack from "../../assets/logoblack.png";
import sidenav from "../../assets/sidenav.png";
import home from "../../assets/home.png";
import gallery from "../../assets/gallery.png";
import profile from "../../assets/profile.png";
import notification from "../../assets/notification.png";
import event from "../../assets/events.png";
import logout from "../../assets/logout.png";


const Sidebar = () => {
  const myRef = useRef<any>(null);
  const [isMobile, setIsMobile] = React.useState(false);

  const handleRef = async () => {
    const width = await myRef?.current.offsetParent.clientWidth;

    if (width > 769) {
      setIsMobile(false);
    } else {
      setIsMobile(true);
    }
  };

  useEffect(() => {
    handleRef();
  }, [isMobile]);
  return (
    <div ref={myRef} onChange={handleRef}>
      {isMobile ? <SidebarMobile /> : <SidebarDesktop />}
    </div>
  );
};

export default Sidebar;

export const SidebarDesktop = () => {
  const role = localStorage.getItem("role");
  return (
    <div className="w-[20%] bg-[#F5F5F5] flex flex-col justify-between h-[100vh] fixed ">
      <div className="px-[5%]">
        <Link to="/"><div className="flex justify-start items-center w-[100%] ">
          <img src={logoblack} alt="" className="h-[17vh]" />
        </div></Link>
      
        {role === "user" ? (
          <ul className="flex flex-col justify-between items-start text-[16px] w-[65%] h-[40vh] mx-[auto] pt-[5%] ">
            <li>
              <Link to="/dashboard" className="flex items-center">
                <img src={home} alt="" className="mr-[22%]" />
                Home
              </Link>
            </li>
            <li>
              <Link to="/dashboard/gallery" className="flex items-center">
                <img src={gallery} alt="" className="mr-[22%]" />
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/dashboard/profile" className="flex items-center">
                <img src={profile} alt="" className="mr-[22%]" />
                Profile
              </Link>
            </li>
            <li>
              <Link to="/dashboard/notifications" className="flex items-center">
                {" "}
                <img src={notification} alt="" className="mr-[15%]" />
                Notifications
              </Link>
            </li>
            <li>
              <Link to="/dashboard/event" className="flex items-center">
                <img src={event} alt="" className="mr-[22%]" />
                Event
              </Link>
            </li>
          </ul>
        ) : role === "admin" || role === "superadmin" ? (
          <ul className="flex flex-col justify-between items-start text-[16px] w-[65%] h-[40vh] mx-[auto] pt-[5%] ">
            <li>
              <Link to="/dashboard" className="flex items-center">
                <img src={home} alt="" className="mr-[22%]" />
            Photographers
              </Link>
            </li>
            <li>
              <Link to="/dashboard/users" className="flex items-center">
                <img src={gallery} alt="" className="mr-[22%]" />
               Users
              </Link>
            </li>
            <li>
              <Link to="/dashboard/profile" className="flex items-center">
                <img src={profile} alt="" className="mr-[22%]" />
                Profile
              </Link>
            </li>
            <li>
              <Link to="/dashboard/notifications" className="flex items-center">
                {" "}
                <img src={notification} alt="" className="mr-[15%]" />
                Notifications
              </Link>
            </li>
            <li>
              <Link to="/dashboard/event" className="flex items-center">
                <img src={event} alt="" className="mr-[22%]" />
                Event
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="flex flex-col justify-between items-start text-[16px] w-[65%] h-[40vh] mx-[auto] pt-[5%] ">
            <li>
              <Link to="/dashboard" className="flex items-center">
                <img src={home} alt="" className="mr-[22%]" />
                Home
              </Link>
            </li>
            {/* <li>
              <Link to="/dashboard/gallery" className="flex items-center">
                <img src={gallery} alt="" className="mr-[22%]" />
                Gallery
              </Link>
            </li> */}
            <li>
              <Link to="/dashboard/profile" className="flex items-center">
                <img src={profile} alt="" className="mr-[22%]" />
                Profile
              </Link>
            </li>
            <li>
              <Link to="/dashboard/notifications" className="flex items-center">
                {" "}
                <img src={notification} alt="" className="mr-[15%]" />
                Notifications
              </Link>
            </li>
            <li>
              <Link to="/dashboard/event" className="flex items-center">
                <img src={event} alt="" className="mr-[22%]" />
                Event
              </Link>
            </li>
          </ul>
        )}
      </div>
      <div className="border-t-[1px] border-black">
        <ul className="flex flex-col justify-between items-start text-[16px] w-[65%] h-[20vh] mx-[auto] ">
          <li className="my-[15%] flex items-center" >
          <Link to="/dashboard/logout" className="flex items-center">
            <img src={logout} alt="" className="mr-[22%]" />
            Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const SidebarMobile =() => {
  const [showNav, setShowNav] = useState(false)

  const toggleNav = () => {
    setShowNav(!showNav)
  }

  return(
    <>
    {showNav ? <SidebarMobile1 click={toggleNav} /> :<SidebarMobile2 click={toggleNav} />}
    </>
  )
}

export const SidebarMobile1 = ({click}:any) => {


  const role = localStorage.getItem("role");
  return (
    <div className="w-[10%] bg-[#F5F5F5] flex flex-col justify-between h-[100vh] fixed overflow-[none] ">
      <div className="px-[5%]">
        <Link to={'/'}><div className="flex justify-start items-center w-[100%] ">
          <img src={logoblack} alt="" className="h-[17vh]" />
        </div></Link>
        <div className="flex items-center w-[65%] mx-[auto] pb-[25%]">
          <img src={sidenav} alt="" onClick={click} />
        </div>
        {role === "user" ? (
          <ul className="flex flex-col justify-between items-start text-[16px] w-[65%] h-[40vh] mx-[auto] pt-[5%] ">
            <li>
              <Link to="/dashboard" className="flex items-center" onClick={click}>
                <img src={home} alt="" className="mr-[22%]" />
              </Link>
            </li>
            <li>
              <Link to="/dashboard/gallery" className="flex items-center" onClick={click}>
                <img src={gallery} alt="" className="mr-[22%]" />
              </Link>
            </li>
            <li>
              <Link to="/dashboard/profile" className="flex items-center" onClick={click}>
                <img src={profile} alt="" className="mr-[22%]" />
              </Link>
            </li>
            <li>
              <Link to="/dashboard/notifications" className="flex items-center" onClick={click}>
                <img src={notification} alt="" className="mr-[15%]" />
              </Link>
            </li>
            <li>
              <Link to="/dashboard/event" className="flex items-center" onClick={click}>
                <img src={event} alt="" className="mr-[22%]" />
              </Link>
            </li>
          </ul>
        ) : role === "admin" || role === "superadmin" ? (
          <ul className="flex flex-col justify-between items-start text-[16px] w-[65%] h-[40vh] mx-[auto] pt-[5%] ">
            <li>
              <Link to="/dashboard" className="flex items-center" onClick={click}>
                <img src={home} alt="" className="mr-[22%]" />
              </Link>
            </li>
            <li>
              <Link to="/dashboard/users" className="flex items-center" onClick={click}>
                <img src={gallery} alt="" className="mr-[22%]" />
              </Link>
            </li>
            <li>
              <Link to="/dashboard/profile" className="flex items-center" onClick={click}>
                <img src={profile} alt="" className="mr-[22%]" />
              </Link>
            </li>
            <li>
              <Link to="/dashboard/notifications" className="flex items-center" onClick={click}>
                <img src={notification} alt="" className="mr-[15%]" />
              </Link>
            </li>
            <li>
              <Link to="/dashboard/event"  className="flex items-center" onClick={click}>
                <img src={event} alt="" className="mr-[22%]" />
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="flex flex-col justify-between items-start text-[16px] w-[65%] h-[40vh] mx-[auto] pt-[5%] ">
            <li>
              <Link to="/dashboard" className="flex items-center" onClick={click}>
                <img src={home} alt="" className="mr-[22%]" />
              </Link>
            </li>
            <li>
              <Link to="/dashboard/profile" className="flex items-center" onClick={click}>
                <img src={profile} alt="" className="mr-[22%]" />
              </Link>
            </li>
            <li>
              <Link to="/dashboard/notifications" className="flex items-center" onClick={click}>
                <img src={notification} alt="" className="mr-[15%]" />
              </Link>
            </li>
            <li>
              <Link to="/dashboard/event"className="flex items-center" onClick={click}>
                <img src={event} alt="" className="mr-[22%]" />
              </Link>
            </li>
          </ul>
        )}
      </div>
      <div className="border-t-[1px] border-black">
        <ul className="flex flex-col justify-between items-start text-[16px] w-[65%]  mx-[auto] my-[10%] ">
          <li className="my-[15%] flex items-center" onClick={click} >
          <Link to="/dashboard/logout" className="flex items-center" onClick={click}>
            <img src={logout} alt="" className="mr-[22%]" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export const SidebarMobile2 = ({click}:any) => {
  const role = localStorage.getItem("role");
  return (
    <div className="w-[50%] bg-[#F5F5F5] flex flex-col justify-between h-[100vh] fixed ">
      <div className="px-[5%]">
        <Link to="/"><div className="flex justify-start items-center w-[100%] ">
          <img src={logoblack} alt="" className="h-[17vh]" />
        </div></Link>
        <div className="flex items-center justify-end pb-[25%">
          <img src={sidenav} alt="" onClick={click} />
        </div>
        {role === "user" ? (
          <ul className="flex flex-col justify-between items-start text-[16px] w-[65%] h-[40vh] mx-[auto] pt-[5%] ">
            <li>
              <Link to="/dashboard" className="flex items-center" onClick={click}>
                <img src={home} alt="" className="mr-[22%]" />
                Home
              </Link>
            </li>
            <li>
              <Link to="/dashboard/gallery" className="flex items-center" onClick={click}>
                <img src={gallery} alt="" className="mr-[22%]" />
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/dashboard/profile" className="flex items-center" onClick={click}>
                <img src={profile} alt="" className="mr-[22%]" />
                Profile
              </Link>
            </li>
            <li>
              <Link to="/dashboard/notifications" className="flex items-center" onClick={click}>
                {" "}
                <img src={notification} alt="" className="mr-[15%]" />
                Notifications
              </Link>
            </li>
            <li>
              <Link to="/dashboard/event" className="flex items-center" onClick={click}>
                <img src={event} alt="" className="mr-[22%]" />
                Event
              </Link>
            </li>
          </ul>
        ) : role === "admin" || role === "superadmin" ? (
          <ul className="flex flex-col justify-between items-start text-[16px] w-[65%] h-[40vh] mx-[auto] pt-[5%] ">
            <li>
              <Link to="/dashboard" className="flex items-center" onClick={click}>
                <img src={home} alt="" className="mr-[22%]" />
            Photographers
              </Link>
            </li>
            <li>
              <Link to="/dashboard/users" className="flex items-center" onClick={click}>
                <img src={gallery} alt="" className="mr-[22%]" />
               Users
              </Link>
            </li>
            <li>
              <Link to="/dashboard/profile" className="flex items-center" onClick={click}>
                <img src={profile} alt="" className="mr-[22%]" />
                Profile
              </Link>
            </li>
            <li>
              <Link to="/dashboard/notifications" className="flex items-center" onClick={click}>
                {" "}
                <img src={notification} alt="" className="mr-[15%]" />
                Notifications
              </Link>
            </li>
            <li>
              <Link to="/dashboard/event" className="flex items-center" onClick={click}>
                <img src={event} alt="" className="mr-[22%]" />
                Event
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="flex flex-col justify-between items-start text-[16px] w-[65%] h-[40vh] mx-[auto] pt-[5%] ">
            <li>
              <Link to="/dashboard" className="flex items-center" onClick={click}>
                <img src={home} alt="" className="mr-[22%]" />
                Home
              </Link>
            </li>
            {/* <li>
              <Link to="/dashboard/gallery" className="flex items-center" onClick={click}>
                <img src={gallery} alt="" className="mr-[22%]" />
                Gallery
              </Link>
            </li> */}
            <li>
              <Link to="/dashboard/profile" className="flex items-center" onClick={click}>
                <img src={profile} alt="" className="mr-[22%]" />
                Profile
              </Link>
            </li>
            <li>
              <Link to="/dashboard/notifications" className="flex items-center" onClick={click}>
                {" "}
                <img src={notification} alt="" className="mr-[15%]" />
                Notifications
              </Link>
            </li>
            <li>
              <Link to="/dashboard/event" className="flex items-center" onClick={click}>
                <img src={event} alt="" className="mr-[22%]" />
                Event
              </Link>
            </li>
          </ul>
        )}
      </div>
      <div className="border-t-[1px] border-black">
        <ul className="flex flex-col justify-between items-start text-[16px] w-[65%] h-[20vh] mx-[auto] ">
          <li className="my-[15%] flex items-center"  >
          <Link to="/dashboard/logout" className="flex items-center" onClick={click} >
            <img src={logout} alt="" className="mr-[22%]" />
            Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
