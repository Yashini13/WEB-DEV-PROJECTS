// import React from 'react';
// import {BrowserRouter,Routes , Route} from 'react-router-dom';
// import {Contact} from './Contact';
// import {About} from './About';

// const Navbar = () =>
// {
//     return(
//        <BrowserRouter>
        
       
//        <div className="container">
//          <nav>
//      <div className="logo"><img src=""></img></div>
   
//    <ul>
//        <li><Route path='/' />Home</li>
//        <li><Route  path='#about' element={<About/>}/>About</li>
//        <li><Route path='#contact' element={<Contact/>}/>Contact</li>
//    </ul>
//    <button>Login</button>
//    </nav>
//      </div>
       
     
//        </BrowserRouter>
//     )
// }

// export default Navbar;

import React from 'react';
import { BrowserRouter, Route, Link, NavLink, Rou, NavLinkter } from 'react-router-dom';
import { Contact } from './Contact';
import { About } from './About';

const Home = () => {
  return <div>Home</div>;
};

const Navbar = () => {
  return (
   
      <nav>
        <div className="logo">
          <img src="./your-logo.png" alt="Logo" />
        </div>

        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>

        <button>Login</button>
      </nav>

      
        
      
    
  );
};

export default Navbar;
