import React from "react";
import ellipseOne from "../assets/ellipseOne.png"
import ellipseTwo from "../assets/ellipseTwo.png"
import instagram from "../assets/instagram.png"
import network from "../assets/network.png"
import meet from "../assets/meet.png"
import cube from "../assets/cube.png"


interface EventProps {
  header: string;
  text: string;
  source?: string;
}

const Event = () => {
  return (
    <div>
      <div className="lg:grid lg:grid-cols-2 my-[5%] px-[5%]">
        <EventCard
          header="Event 1"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl."
          source={instagram}
        />
         <EventCard
          header="Event 1"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl."
          source={network}
        />
        <EventCard
          header="Event 1"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl."
          source={meet}
        />
         <EventCard
          header="Event 1"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl nisl eget nisl."
          source={cube}
        />
      </div>
    </div>
  );
};

export default Event;

const EventCard: React.FC<EventProps> = ({ header, text, source }) => {
  return (
    <div className="w-[95%] h-[30vh] rounded-lg shadow shadow-500/40 mx-[auto] my-[3%] ">
      <div className="flex justify-between px-[3%] py-[3%] border border-b-[#000] border-[2px]">
        <h4>{header}</h4>
        <img src={source} alt={source} className="h-[3vh]" />
      </div>
      
      <p className=" text-[0.6rem] lg:text-[0.8rem] text-left w-[80%] px-[3%] py-[1%]">{text}</p>
      <div className="flex justify-between">
        <img src={ellipseOne} alt="ellipseOne" className=" h-[7vh] mt-[11%] lg:mt-[6%] " />
        <img src={ellipseTwo} alt="ellipseTwo" className=" h-[7vh] mt-[11%] lg:mt-[6%]"  />
      </div>
    </div>
  );
};
