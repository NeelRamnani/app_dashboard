import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

function Layout({ children }) {
  const location = useLocation(); // Gets the current location object

  return (
    <div>
      {/* Render Navbar only if not on the HomeScreen */}
      {location.pathname !== '/HomeScreen' && <Navbar />}
      <main>{children}</main> {/* Render the child components */}
      <Footer />

         {/* Render Navbar only if not on the HomeScreen */}
      {location.pathname !== '/login' && <Navbar />}
      <main>{children2}</main> {/* Render the child components */}
      <Footer />
      {location.pathname !== '/SupportContact' && <Navbar />}
      <main>{children3}</main> {/* Render the child components */}
      <Footer />
    </div>

    
  );
}

export default Layout;
