import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import SignIn from './pages/onboarding/SignIn';
import Verify from './pages/onboarding/Verify';
import Confirmation from './pages/onboarding/Confimation';
import Verified from './pages/onboarding/Verified';
import Expired from './pages/onboarding/Expired';
import Update from './pages/onboarding/Update';
import { Provider} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducer from './redux/reducer';
import { ToastContainer } from 'react-toastify';
import Dashboard from './pages/dashboard/Dashboard';
import Social from './pages/Social';
import { ProtectRoute } from './components/ProtectedRoute';


const store = configureStore({
  reducer: reducer,
  middleware: [thunk]
});



function App() {

  return (
    <div className="App">
      <Provider store={store}>
      <ToastContainer />
      <Router>
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
      </Provider>
    </div>
  );
}

export default App;
