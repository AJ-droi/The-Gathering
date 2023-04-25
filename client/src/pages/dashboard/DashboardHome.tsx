import React, { useState } from "react";
import avatar from "../../assets/avatar.png";
import nature from "../../assets/nature.png";
import info from "../../assets/info.png";

const DashboardHome = () => {
 
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
};

export default DashboardHome;

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
