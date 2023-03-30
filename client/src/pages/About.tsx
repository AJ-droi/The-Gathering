import React from 'react'
import AboutHero from '../components/AboutComponents/AboutHero'
import FAQ from '../components/AboutComponents/FAQ'
import Mission from '../components/AboutComponents/Mission'

const About = () => {
  return (
    <div className='bg-[#FCFCFC]'>
       <AboutHero />
       <Mission />
       <FAQ />
    </div>
  )
}

export default About