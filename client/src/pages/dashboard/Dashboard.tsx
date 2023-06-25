import { Route, Routes } from 'react-router-dom'
import DashboadRegister from './DashboardRegister'
import DashboardGallery from './DashboardGallery'
import DashboardHome, { AdminUsers, HomeAdmin } from './DashboardHome'
import DashboardNotifications from './DashboardNotifications'
import DashboardProfile from './DashboardProfile'
import Header from './Header'
import Sidebar from './Sidebar'
import DashboardEvent from './DashboardEvent'
import AddEvent from './AddEvent'
import MyCard from './MyCard'
import BuyTicket from './BuyTicket'
import Logoutt from './Logout'

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
              <Route path="/users" element={<AdminUsers />} />
              <Route path="/notifications" element={<DashboardNotifications />} />
              <Route path="/register" element={<DashboadRegister />} />
              <Route path="/event" element={<DashboardEvent />} />
              <Route path="/add-event" element={<AddEvent />} />
              <Route path="/card" element={<MyCard />} />
              <Route path="/buy-ticket/:id" element={<BuyTicket />} />
              <Route path="/logout" element={<Logoutt />} />
              <Route path="/event/:id" element={<DashboardGallery />} />
            </Routes>
        </div>
        

    </div>
  )
}

export default Dashboard