import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Dashboard from './Pages/Dashboard';
import './assets/css/style8a54.css';
import './assets/css/plugins8a54.css';
import ImageGenerate from './Pages/ImageGenerate';
import Faq from './Pages/Faq';
import Contact from './Pages/Contact';
import Documentation from './Pages/Documentation';
import UserSetting from './Pages/UserSetting';

function App  () {
  

  return (
    
   <BrowserRouter>
     <Navbar />
   <Routes>
   <Route path='/' element={<Dashboard/>}></Route>
   <Route path='/UserSetting' element={<UserSetting/>}></Route>
   <Route path='/faq' element={<Faq/>}></Route>
   <Route path='/Documentation' element={<Documentation/>}></Route>
   <Route path='/Contact' element={<Contact/>}></Route>
   <Route path='/ImageGenerate' element={<ImageGenerate/>}></Route>
   
   </Routes>
   <Footer />
   </BrowserRouter>
  )
}

export default App