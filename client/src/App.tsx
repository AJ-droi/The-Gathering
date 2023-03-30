import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './components/HomeComponents/Contact';
import About from './pages/About';
import Navbar from './components/HomeComponents/Navbar';
import Footer from './components/HomeComponents/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Contact />
        <Footer />

      </Router>
    </div>
  );
}

export default App;
