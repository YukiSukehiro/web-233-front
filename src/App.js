import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import InfoCraft from './components/pages/InfoCraft';
import Modules from './components/pages/Modules';
import CareerDev from './components/pages/CareerDev';
import ComprehensiveITLearning from './components/pages/ComprehensiveITLearning';
import AccessibleLearning from './components/pages/AccessibleLearning';
import SkillEnhancement from './components/pages/SkillEnhancement';
import SignIn from './components/SignIn';
import About from './components/pages/About';
import Footer from './components/Footer';
import logo from './images/logo-1.png'




function App() {
  return (
<div className='page-container'>



  <Router>
      <Navbar/>
    <Routes>
    <Route path='/' element={<InfoCraft/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/modules' element={<Modules />} />
      <Route path='/career-dev'  element={<CareerDev/>} />
      <Route path='/accessible-learning'  element={<AccessibleLearning/>} />
      <Route path='/comprehensive-it-learning'element={<ComprehensiveITLearning/>} />
      <Route path='/skill-enhancement'element={<SkillEnhancement/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/sign-in' element={<SignIn/>} />
    </Routes>
  </Router>
  <Footer />
  <div className='logo-container'>
  <img src={logo} className='logo' alt='' />
  </div>
  </div>
  );
}

export default App;
