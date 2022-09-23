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
          <Route path='/' exact element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/carrents' element={<CarRents />} />
          <Route path='/guides' element={<Guide />} />
          <Route path='/destinations' element={<Destination />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App;






// import React, { Component } from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import { Router  , Route } from 'react-router-dom';

// import Header from './Components/Header';
// import Footer from './Components/Footer';
// import Home from './Components/Home';
// import Contact from './Components/Contact';
// import About from './Components/About';
// import CarRents from './Components/CarRents';
// import Guide from './Components/Guide';
// import Destination from './Components/Destinations';

// export default class App extends Component {
//   render() {
//     return (
//   <BrowserRouter>
//       <div className='container'>
//         <Header/>
//          <Router>
//           <Route path='/home' element={Home}/>
//          </Router>
         


//         <Footer/>
        
//       </div>
//       </BrowserRouter>
//     )
//   }
// }

