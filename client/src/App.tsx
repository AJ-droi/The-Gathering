import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import SignIn from './pages/onboarding/SignIn';
import Verify from './pages/onboarding/Verify';
import Confirmation from './pages/onboarding/Confimation';
import Verified from './pages/onboarding/Verified';
import Expired from './pages/onboarding/Expired';
import Update from './pages/onboarding/Update';
import { Provider, useDispatch, useSelector} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducer, { fetchDataStart } from './redux/reducer';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/dashboard/Dashboard';
import Social from './pages/Social';
import { ProtectRoute } from './components/ProtectedRoute';
import Loader from './components/common/Loader';






function App() {
  const loading = useSelector((state:any) => state.loading)
 

  return (
    <div className="App">

      <ToastContainer />
      <Router>
      {loading? <Loader /> : null}
        <Routes>
          <Route path="/*" element={<Homepage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignIn />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/confirm" element={<Confirmation />} />
          <Route path="/verified" element={<Verified />} />
          <Route path="/expired" element={<Expired />} />
          <Route path="/update" element={<Update />} />
          <Route path="/dashboard/*" element={<ProtectRoute><Dashboard /></ProtectRoute>} />
          <Route path="/auth/social/*" element={<Social />} />
 
        </Routes>
      

      </Router>

    </div>
  );
}

export default App;
