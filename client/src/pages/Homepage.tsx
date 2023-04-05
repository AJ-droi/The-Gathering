import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contact from '../components/HomeComponents/Contact'
import Footer from '../components/HomeComponents/Footer'
import Navbar from '../components/HomeComponents/Navbar'
import About from './About'
import Gallery from './Gallery'
import Home from './Home'

const Homepage = () => {
  return (
    <div> 
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Contact />
        <Footer />

    </div>
  )
}

export default Homepage