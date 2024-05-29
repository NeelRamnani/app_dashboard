
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import './init8a54';



const Navbar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem('token');

    // Redirect to the login page
    navigate('/login');
  };

  return (
    <div className="ImaginAi_fn_wrapper">
    <div className="ImaginAi_fn_wrap">
      {/* Searchbar */}
      {/* !Searchbar */}
      {/* HEADER */}
      <header className="ImaginAi_fn_header">
        {/* Header left: token information */}
        <div className="header__left">
        </div>
        {/* /Header left: token information */}
        {/* Header right: navigation bar */}
        <div className="header__right">
          <div className="fn__nav_bar">
            {/* !Search (bar item) */}
            {/* Notification (bar item) */}
            {/* !Notification (bar item) */}
            {/* Full Screen (bar item) */}
            <div className="bar__item bar__item_fullscreen">
              <a href="#" className="item_opener fn__tooltip" title="Full Screen">
                <img src="svg/fullscreen.svg" className="fn__svg f_screen" />
                <img src="svg/smallscreen.svg"  className="fn__svg s_screen" />
              </a>
            </div>
            {/* !Full Screen (bar item) */}
            {/* Language (bar item) */}
            {/* !Language (bar item) */}
            {/* Site Skin (bar item) */}
            <div className="bar__item bar__item_skin">
              <a href="#" className="item_opener fn__tooltip" title="Dark/Light">
                <img src="svg/sun.svg"  className="fn__svg light_mode" />
                <img src="svg/moon.svg"  className="fn__svg dark_mode" />
              </a>
            </div>
            {/* !Site Skin (bar item) */}
            {/* User (bar item) */}
            <div className="bar__item bar__item_user">
              <a href="#" className="user_opener fn__tooltip" title="User Profile">
                <img src="img/user/user.jpg"  />
              </a>
              <div className="item_popup" data-position="right">
                <div className="user_profile">
                  <div className="user_img">
                    <img src="img/user/user.jpg"  />
                  </div>
                  <div className="user_info">
                  
                  </div>
                </div>
                <div className="user_nav">
                  <ul>
                  
                    <li>
                    <Link to="/UserSetting">
                        <span className="icon"><img src="svg/setting.svg"  className="fn__svg" /></span>
                        <span className="text">Settings</span>
                        </Link>
                    </li>
                   
                    <li>
                      <a href="sign-in.html">
                        <span className="icon"><img src="svg/logout.svg"  className="fn__svg" /></span>
                        <button className='text' onClick={handleLogout}>Logout</button>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* !User (bar item) */}
          </div>
        </div>
        {/* !Header right: navigation bar */}
      </header>
      {/* !HEADER */}
      {/* LEFT PANEL */}
      <div className="ImaginAi_fn_leftpanel">
        <div className="mobile_extra_closer" />
        {/* logo (left panel) */}
        <div className="leftpanel_logo">
          <Link to="/" className="fn_logo">
            <span className="full_logo">
              <img src="img/logo-desktop-full.png"  className="desktop_logo" />
              <img src="img/logo-retina-full.png"  className="retina_logo" />
            </span>
            <span className="short_logo">
              <img src="img/logo-desktop-mini.png"  className="desktop_logo" />
              <img src="img/logo-retina-mini.png"  className="retina_logo" />
            </span>
          </Link>
          <a href="#" className="fn__closer fn__icon_button desktop_closer">
            <img src="svg/arrow.svg"  className="fn__svg" />
          </a>
          <a href="#" className="fn__closer fn__icon_button mobile_closer">
            <img src="svg/arrow.svg"  className="fn__svg" />
          </a>
        </div>
        {/* !logo (left panel) */}
        {/* content (left panel) */}
        <div className="leftpanel_content">
          {/* #1 navigation group */}
          <div className="nav_group">
            <h2 className="group__title">Start Here</h2>
            <ul className="group__list">
              <li>
                <Link to='/' className="fn__tooltip active menu__item" data-position="right" title="Home">
                  <span className="icon"><img src="svg/home.svg"  className="fn__svg" /></span>
                  <span className="text">Home</span>
                </Link>
              </li>
              
            </ul>
          </div>
          {/* !#1 navigation group */}
          {/* #2 navigation group */}
          <div className="nav_group">
            <h2 className="group__title">User Tools</h2>
            <ul className="group__list">
            <li>
                <Link to='/promptsuggest' className="fn__tooltip menu__item" data-position="right" title="Image Generation">
                  <span className="icon"><img src="svg/image.svg"  className="fn__svg" /></span>
                  <span className="text">Promp Suggestion</span>
                  </Link>
              </li>
              <li>
                <Link to='/ImageGenerate' className="fn__tooltip menu__item" data-position="right" title="Image Generation">
                  <span className="icon"><img src="svg/image.svg"  className="fn__svg" /></span>
                  <span className="text">Image Generation</span>
                  </Link>
              </li>
            
            </ul>
          </div>
          {/* !#2 navigation group */}
          {/* #3 navigation group */}
          <div className="nav_group">
            <h2 className="group__title">Support</h2>
            <ul className="group__list">
              <li className="menu-item-has-children">
                <a href="video-generation.html" className="fn__tooltip menu__item" title="FAQ & Help" data-position="right">
                  <span className="icon"><img src="svg/question.svg"  className="fn__svg" /></span>
                  <span className="text">FAQ &amp; Help</span>
                  <span className="trigger"><img src="svg/arrow.svg"  className="fn__svg" /></span>
                </a>
                <ul className="sub-menu">
                  <li>
                    <Link to="/Documentation"><span className="text">Documentation</span></Link>
                  </li>
                  <li>
                    <Link to="/faq"><span className="text">FAQ</span></Link>
                  </li>
                  <li>
                    <Link to="/Contact"><span className="text">Contact Us</span></Link>
                  </li>
                </ul>
              </li>
              <li>
                <a className="fn__tooltip menu__item" data-position="right" title="Image Generation">
                <span className="icon"><img src="svg/logout.svg"  className="fn__svg" /></span>
                  <button className='text' onClick={handleLogout}>Logout</button>
                  </a>
              </li>
             
            </ul>
          </div>
          {/* !#3 navigation group */}
        </div>
        {/* !content (left panel) */}
      </div></div></div>
  )
}

export default Navbar