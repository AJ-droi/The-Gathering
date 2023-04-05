import React from 'react'
import GalleryHero from '../components/GalleryComponents/GalleryHero'
import galOne from '../assets/gal-one.png'
import Categories from '../components/GalleryComponents/Categories'
const Gallery = () => {
  return (
    <div>
        <img src={galOne} alt="" className='h-[68vh] w-[100%]'/>
        <GalleryHero />
        <Categories />

    </div>
  )
}

export default Gallery