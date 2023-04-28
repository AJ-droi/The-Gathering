import React from 'react'
import Hero from '../components/HomeComponents/Hero'
import Event from '../components/HomeComponents/Event'
import Review from '../components/HomeComponents/Review'
import PhotoGallery from '../components/HomeComponents/PhotoGallery'


const Home = () => {
  return (
    <div>
        <Hero />
        <Event />
        <PhotoGallery />
        <Review />

    </div>
  )
}

export default Home