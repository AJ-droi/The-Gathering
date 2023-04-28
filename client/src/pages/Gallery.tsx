import GalleryHero from '../components/GalleryComponents/GalleryHero'
import galOne from '../assets/gal-one.png'
import galTwo from '../assets/gal-two.png'
import galThree from '../assets/gal-three.png'
import galFour from '../assets/gal-four.png'
import galFive from '../assets/gal-five.png'
import Categories from '../components/GalleryComponents/Categories'
import SimpleImageSlider from "react-simple-image-slider";
import { useState } from 'react';

const Gallery = () => {

  // eslint-disable-next-line
  const [imageNum, setImageNum] = useState(1);
  

  const sliderImages = [
    {
       url: galOne,
    },
    {
       url: galTwo,
    },
    {
       url: galThree,
    },
    {
       url: galFour,
    },
    {
       url: galFive,
    },
 ];

  return (
    <div className='bg-[#000]'>
        {/* <img src={galOne} alt="" className='h-[50vh] w-[100%] opacity-[0.35]'/> */}
        <div className='bg-[#000] opacity-[0.5]'>
        <SimpleImageSlider
            width={window.innerWidth}
            height={370}
            images={sliderImages}
            showBullets={true}
            showNavs={true}
            autoPlay={true} 
            onStartSlide = {(index, length) => {
               setImageNum(index);
            }}
              autoPlayDelay = {3}
         />

        </div>

        
        <GalleryHero />
        <Categories />

    </div>
  )
}

export default Gallery