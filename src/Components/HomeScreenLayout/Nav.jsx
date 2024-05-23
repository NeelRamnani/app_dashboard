import React from 'react';

import { Link } from 'react-router-dom';
import '../../assets/css/another.css'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';


const Nav = () => {
  return (
    <div><div className="fixed top-0 -z-10">
    <div className="blur-[200px] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-tl from-red-600/40 to-pink-600/40" />
  </div>
  <div className="fixed top-0 end-0 -z-10">
    <div className="blur-[200px] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-tl from-red-200/40 to-pink-600/40" />
  </div>
 <header id="navbar-sticky" className="navbar">
    <div className="container">
      <nav>
        {/* Navbar Brand Logo */}
        <Link to='/'className="logo">
          <img src="./img/logo.png" className="h-10" alt="" />
       </Link>
        {/* Moblie Menu Toggle Button (Offcanvas Button) */}
        <div className="lg:hidden flex items-center ms-auto px-2.5">
          <button className="material-icons-outlined" type="button" id="hs-unstyled-collapse" data-hs-collapse="#mobileMenu" data-hs-type="collapse">
         <MenuOutlinedIcon />
          
          </button>
        </div>

        
        {/* Nevigation Menu */}
        <div id="mobileMenu" className="hs-collapse transition-all duration-300 lg:basis-auto basis-full grow hidden lg:flex items-center justify-center mx-auto mt-2 lg:mt-0">
          <ul id="navbar-navlist" className="navbar-nav">
            {/* Home Page Link */}
            <li className="nav-item">
              <Link className="nav-link" to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#ai_made">AI Made</a>
            </li>
            {/* Features Page Link */}
            <li className="nav-item">
              <Link className="nav-link" to='/SupportContact'>Contact</Link>
            </li>
           
            <li className="nav-item">
              <Link className="nav-link" to='/aboutus'>About us</Link>
            </li>
            {/* Features Page Link */}
           
            {/* Price Page Link */}
            {/* <li className="nav-item">
              <Link className="nav-link" to="/Documentation">Documentation</Link>
            </li> */}
          </ul>
          {/* Download Button */}
          <div className="lg:hidden flex items-center pt-4 mt-4 lg:pt-0 lg:mt-0 border-t border-white/10 lg:border-none">
            <Link to='/login' className="inline-flex items-center justify-center gap-2 bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-3" style={{ background: 'linear-gradient(90deg, rgba(93,7,114,1) 0%, rgb(86, 125, 251) 100%);'}}><i data-lucide="arrow-big-down-dash"  /> Get started</Link>
          </div>
        </div>
        {/* Download Button */}
        <div className="hidden lg:flex items-center">
          <Link to='/login' className="inline-flex items-center justify-center gap-2 bg-primary text-white py-2 px-6 rounded-full hover:bg-primary-hover transition-all duration-300" style={{ backgroundColor: 'linear-gradient(90deg, rgba(93,7,114,1) 0%, rgb(86, 125, 251) 100%);'}}><i data-lucide="arrow-big-down-dash"  />  Get started</Link>
        </div>
      </nav>{/* end nav */}
    </div>
  </header></div>
  )
}

export default Nav;