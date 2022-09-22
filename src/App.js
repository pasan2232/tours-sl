import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import CarRents from './Components/CarRents';
import Guide from './Components/Guide';
import Destination from './Components/Destinations';



function App() {
  return (
    <div className='app'>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
