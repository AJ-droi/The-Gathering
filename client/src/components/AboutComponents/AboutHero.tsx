import React from "react";
import aboutBg from "../../assets/aboutBg.png";
import logo from "../../assets/logo.png";
import join from "../../assets/join.png";
import Button from "../common/Button";

const AboutHero = () => {
  return (
    <div>
      <div className="img-clip">
        <img src={aboutBg} alt="" className="opacity-[0.5]"/>
      </div>
      <div className="flex flex-col items-center absolute top-[15%] z-[5] w-[100%]">
        <img src={logo} alt="" className="lg:h-[40vh] md:h-[20vh]" />
        <Button
          title={`Join The Community`}
          classes="bg-[#FF6E31] w-[60%] md:w-[50%] lg:w-[20%] text-[#fff] h-[4vh] my-[4%] lg:mt-[2%] px-[3%]"
          source={join}
        ></Button>
      </div>
      <div className="flex justify-center absolute top-[15%] z-[5] w-[100%]">
        <p className="text-[#fff]">
          Create <span className="text-[#FF6E31] ">Connect</span> Collab
        </p>
      </div>
      <div className="px-[5%] lg:px-[0%] lg:pl-[10%]">
        <h3 className="text-[2rem] text-left underline text-[#FF6E31]">Our Story</h3>
        <p className="text-[1.2rem] lg:text-[1.4rem] text-justify lg:text-left pt-[2%]">The Gathering is a creative nest, a home for creatives from different sectors of the creative sectors, including photography, arts & crafts, fashion, music, film, performance art, TV/Radio hosting, writing/publishing. We are a creative ecosystem that enable creatives create, collab & connect. We're more than a group, it's a culture, it's a tribe, it's a movement.</p>
      </div>
    </div>
  );
};

export default AboutHero;
