import React, { Component } from 'react';
import { BrowserRouter  , Route } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import CarRents from './Components/CarRents';
import Guide from './Components/Guide';
import Destination from './Components/Destinations';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className='container'>
        <Header/>
     
          <Home/><hr/>
          <Destination/><hr/>
          <Contact/><hr/>
          <About/><hr/>
          <Guide/><hr/>
          <CarRents/><hr/>


        <Footer/>
        
      </div>
      </BrowserRouter>
    );
  }
}

export default App;