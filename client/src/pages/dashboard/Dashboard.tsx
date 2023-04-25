import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardGallery from './DashboardGallery'
import DashboardHome from './DashboardHome'
import DashboardProfile from './DashboardProfile'
import Header from './Header'
import Sidebar from './Sidebar'

const Dashboard = () => {
  return (
    <div className='flex'>
        <Sidebar />
        <div className='w-[100%] ml-[10%] lg:ml-[20%]'>
            <Header />
            <Routes>
              <Route path="" element={<DashboardHome />} />
              <Route path="/gallery" element={<DashboardGallery />} />
              <Route path="/profile" element={<DashboardProfile />} />
            </Routes>
        </div>
        

    </div>
  )
}

export default Dashboard