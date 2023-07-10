import React from "react";
import ellipseOne from "../../assets/ellipseOne.png"
import ellipseTwo from "../../assets/ellipseTwo.png"
import instagram from "../../assets/instagram.png"
import network from "../../assets/network.png"
import meet from "../../assets/meet.png"
import cube from "../../assets/cube.png"
import divider from '../../assets/divider.png'
import { EventProps } from "../../interface";


const Event = () => {
  return (
    <div >
       <Divider />
      <div className="lg:grid lg:grid-cols-2  px-[5%]">
        <EventCard
          header="Photo session"
          text="The photo session at our community event is a vibrant and collaborative experience that captured the essence of our community's creativity. With carefully curated themed setups, a variety of props, and professional guidance, participants have the opportunity to express themselves and collaborate with fellow creatives. The session showcases candid moments and posed shots, capturing the authentic interactions and joy shared among community members. The resulting photographs forms a digital gallery, inspiring others to embrace their creativity and join our artistic journey. It is a visual feast that celebrated the diversity, talent, and passion within our community."
          source={instagram}
        />
         <EventCard
          header="Networking"
          text="The networking session at our event has a dynamic and valuable opportunity for community members and participants to connect, collaborate, and expand their creative networks. Attendees have the chance to engage with professionals, experts, and like-minded individuals from various creative industries. The networking session provided a platform for sharing ideas, experiences, and resources, fostering potential collaborations and partnerships. Participants exchanged contact information, portfolios, and project ideas, laying the foundation for future collaborations and professional growth. It is a buzzing atmosphere filled with meaningful conversations, introductions, and the discovery of shared passions. The networking session plays a pivotal role in cultivating a supportive and thriving creative community, where connections are formed, knowledge is shared, and new possibilities emerge."
          source={network}
        />
        <EventCard
          header="Podcast"
          text="The podcast produced by our creative community is a captivating platform that brings together diverse voices, unique perspectives, and inspiring stories. With a focus on creativity and artistic exploration, the podcast delves into a wide range of topics, from the creative process and artistic techniques to personal journeys and challenges faced by creatives. Each episode features interviews with talented artists, photographers, musicians, writers, and other creative individuals who share their insights, experiences, and advice. The podcast serves as a valuable resource, providing listeners with a wealth of knowledge, inspiration, and practical tips for aspiring creatives to enhance their own creative endeavors. It creates a sense of community among creatives, fostering connections and a shared understanding of the joys and struggles of the creative journey. With its engaging format and diverse range of content, the podcast by our creative community is a must-listen for anyone seeking to explore, nurture, and celebrate their own creative passions"
          source={meet}
        />
         <EventCard
          header="Road Trip"
          text="Our creative community embarks on an adventure-filled road trip, merging art, inspiration, and limitless creativity. With an exploratory spirit, we embrace the open road, seeking hidden gems and capturing the essence of each destination. As we journey, conversations ignite, ideas flow, and collaborations flourish. Immersed in breathtaking landscapes and vibrant cityscapes, we draw inspiration from diverse cultures and experiences. Spontaneous performances and shared passions forge new friendships and meaningful connections. With every twist and turn, we unleash our creativity, transforming the journey into a masterpiece. Brimming with inspiration, we return home, carrying cherished memories that forever fuel our creative pursuits, a testament to the power of exploration and shared creativity."
          source={cube}
        />
      </div>
      <Divider />
    </div>
  );
};

export default Event;

const EventCard: React.FC<EventProps> = ({ header, text, source }) => {
  return (
    <div className="w-[95%]  h-[auto] md:h-[45vh]  border rounded-lg shadow shadow-[#FF6E31] shadow-500/40 mx-[auto] my-[3%] pb-[2%] md:pb-[0%]">
      <div className="flex justify-between px-[3%] py-[3%] border border-b-[#000] border-[2px]">
        <h4>{header}</h4>
        <img src={source} alt={source} className="h-[3vh] " />
      </div>
      
      <p className=" text-[0.7rem] lg:text-[0.8rem] text-left w-[100%] px-[3%] py-[2%] mt-[5%] md:mt-[0%] leading-[1.5]">{text}</p>
      <div className="flex justify-between">
        {/* <img src={ellipseOne} alt="ellipseOne" className=" h-[7vh] mt-[3.6%] md:mt-[5.5%] lg:mt-[4.5%] " />
        <img src={ellipseTwo} alt="ellipseTwo" className=" h-[7vh] mt-[3.6%] md:mt-[5.5%] lg:mt-[4.5%]"  /> */}
      </div>
    </div>
  );
};

const Divider = () => {
  return (
      <div className="flex justify-center my-[2%]">
          <img src={divider} alt="divider" />
      </div>
  )
}