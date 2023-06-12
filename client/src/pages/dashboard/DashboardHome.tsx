import { useState } from "react";
import avatar from "../../assets/avatar.png";
import nature from "../../assets/nature.png";
import info from "../../assets/info.png";
import Button from "../../components/common/Button";
import addPhoto from "../../assets/addPhoto.png";
import search from "../../assets/search.png";
import { IoCall } from "react-icons/io5";
import {GrMail} from "react-icons/gr"
import { Link, useLocation } from "react-router-dom";
import HomePhotographer from "./HomePhotographer";

const DashboardHome = () => {
  const role = localStorage.getItem('role')

 
  return (
    <>

    {role === "user" ? <HomeUsers /> : role === "admin" || role === "superadmin" ?<HomeAdmin /> : role === "photographer" ? <HomePhotographer /> : null}
    </>
  );
};

export default DashboardHome;

const HomeUsers = () => {
 
    return (
      <div className="bg-[#E0E0E0]">
        <div className="flex justify-end">
          <div className="petit text-[#FF6E31] bg-[#fff] w-[70%] text-[0.8rem] md:text-[1.2rem] font-bold px-[2%] py-[2%] mr-[4%] md:mr-[2%] my-[2%] rounded-lg">
            <p>
              “oofficia consequat duis enim velit mollit. Exercitation veniam
              consequat sunt nostrud amet.”
            </p>
            <p>-John Claire.</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between px-[5%] pb-[2%]">
          <RecommendedBooks />
          <div className=" w-[100%] md:w-[35%] flex flex-col justify-between my-[2%] md:my-[0%] ">
            <UpcomingEvents />
            <Rings />
          </div>
        </div>
      </div>
    );

}

export const HomeAdmin= () => {
  const location = useLocation()
 
  return (
    <div className="bg-[#E0E0E0] px-[5%]">
      <div className="flex justify-end my-[2%]">
        <div className="flex items-center bg-[#fff] py-[1%] px-[1%] rounded-md mr-[5%]">
          <img src={search} alt="" className="h-[2vh]" />
          <input type="text" placeholder="Search here" className="pl-[4%]" />
        </div>
        
        {location.pathname === "/dashboard/users" ? null :<Link to="/dashboard/register" className="w-[20%] bg-[#FF6E31] flex items-center justify-center rounded-md"><Button title={"Add Photographer"} source={addPhoto} classes={" flex-row-reverse text-[#fff]"} /></Link>}
       
      </div>
      <div className="w-[100%]">
        <h3>{location.pathname === "/dashboard/users" ? "Users" : "Photographers"}</h3>
        <div className="grid grid-cols-4 grid-rows-3 w-[100%]">
        <PhotographerCard />
        <PhotographerCard />
        <PhotographerCard />
        <PhotographerCard />
        <PhotographerCard />
        <PhotographerCard />
        <PhotographerCard />
        <PhotographerCard />
        <PhotographerCard />
        <PhotographerCard />
        <PhotographerCard />
        <PhotographerCard />

        </div>
        <div className="flex justify-between items-center my-[5%]">
          <p>Showing 1-10 from 46 data</p>
          <div className="flex w-[50%] justify-end">
            <p className="bg-[##C2C2C2] border border-[black] w-[5%] px-[4%] py-[2%] flex justify-center rounded-md"> {"<"} </p>
            <p className="bg-[#FF6E31]  w-[5%] flex justify-center rounded-md px-[4%] py-[2%] text-[#fff] flex justify-center items-center mx-[2%]"> 1 </p>
            <p className="bg-[##C2C2C2] border border-[black] w-[5%] px-[4%] py-[2%] flex items-center justify-center rounded-md"> {">"} </p>
          </div>
        </div>
      
      </div>
      
    </div>
  );

}

const PhotographerCard = ({name, phone, email}:any) => {
  return(
    <div className="bg-[#fff] rounded-md px-[4%] text-left py-[7%] text-[#212121] mx-[3%] my-[3%] ">
      <div className="text-center flex flex-col items-center">
        <img src={avatar} alt="" className="w-[100%] rounded-md h-[12vh] w-[12vh]" />
        <h3 className="font-semibold">Angela Moss</h3>
      </div>
      <div className="mt-[15%]">
        <div className="flex items-center my-[5%]">
          <div className="bg-[#FFE2D6] w-[10%] flex justify-center py-[2%] rounded-md">
            <IoCall className="text-[#FF6E31]  " />
          </div>
          <p className="pl-[5%] text-[0.8rem]">+12 345 6789 0</p>
        </div>

        <div className="flex items-center">
          <div className="bg-[#FFE2D6] w-[10%] flex justify-center py-[2%] rounded-md">
            <GrMail className="text-[#FF6E31]  " />
          </div>
          <p className="pl-[5%] text-[0.8rem]">+12 345 6789 0</p>
        </div>
       
      </div>

    </div>

  )}

const RecommendedBooks = () => {
  return (
    <div className="bg-[#fff] md:w-[63%] rounded-md px-[2%] text-left py-[2%] text-[#212121]">
      <div>
        <h3 className="text-[0.9rem] text-[#212121] py-[2%]">Recommended Movies Of The Month</h3>
        <div className="flex my-[2%] items-center">
          <img src={avatar} alt="" />
          <p className="text-left px-[2%]">
            Avatar: The Way of Water <br />
            2023
          </p>
        </div>
        <div className="flex my-[2%] items-center">
          <img src={avatar} alt="" />
          <p className="text-left px-[2%]">
            Avatar: The Way of Water <br />
            2023
          </p>
        </div>
        <div className="flex my-[2%] items-center">
          <img src={avatar} alt="" />
          <p className="text-left px-[2%]">
            Avatar: The Way of Water <br />
            2023
          </p>
        </div>
      </div>

      <div className=" border-t-[3px] border-[#B4B4B4]">
        <h3 className="text-[0.9rem] text-[#212121] py-[2%]">Recommended Books Of The Month</h3>
        <div className="flex my-[2%] items-center">
          <img src={avatar} alt="" />
          <p className="text-left px-[2%]">
            Avatar: The Way of Water <br />
            2023
          </p>
        </div>
        <div className="flex my-[2%] items-center">
          <img src={avatar} alt="" />
          <p className="text-left px-[2%]">
            Avatar: The Way of Water <br />
            2023
          </p>
        </div>
        <div className="flex my-[2%] items-center">
          <img src={avatar} alt="" />
          <p className="text-left px-[2%]">
            Avatar: The Way of Water <br />
            2023
          </p>
        </div>
      </div>
    </div>
  );
};

const UpcomingEvents = () => {
  return (
    <div className="bg-[#fff] rounded-md flex flex-col items-center pt-[2%]  ">
      <h3>Upcoming Events</h3>
      <img src={nature} alt="" />
      <img src={nature} alt="" />
      <img src={nature} alt="" />
    </div>
  );
};



const Rings = () => {
    const [ringInfo, setRingInfo] = useState(false)
  return (
    <div className="bg-[#fff] px-[4%] py-[2%] rounded-md my-[2%]">
      <h3 className="text-left underline text-[1.5rem]">Rings</h3>
      <p className="text-[7rem] text-[#FF6E31]">0</p>
      <div className="flex justify-end ">
        <img src={info} alt="" onClick={() => setRingInfo(!ringInfo)}/>
      </div>
      {ringInfo ? <div className="border border-[#FF6E31] rounded-md absolute bottom-[-88%] md:bottom-[-12%] right-[12%] md:right-[6%] bg-[#fff] w-[50%] md:w-[20%] py-[2%] px-[1%] text-left">
        <p className="text-[0.8rem]">
          Rings are a reward for participating in community activity and
          supporting community members.<br /> <br /> You can get rings by engaging with tasks
          that have points attached to it (community activities and helping
          other community members).
        </p>
      </div>: null}
    </div>
  );
};


