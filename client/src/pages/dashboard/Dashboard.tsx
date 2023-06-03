import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboadRegister from './DashboardRegister'
import DashboardGallery from './DashboardGallery'
import DashboardHome, { HomeAdmin } from './DashboardHome'
import DashboardNotifications from './DashboardNotifications'
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
              <Route path="/users" element={<HomeAdmin />} />
              <Route path="/notifications" element={<DashboardNotifications />} />
              <Route path="/register" element={<DashboadRegister />} />
            </Routes>
        </div>
        

    </div>
  )
}

export default Dashboard