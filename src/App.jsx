import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Dashboard from './Pages/Dashboard';
import './assets/css/style8a54.css';
import './assets/css/plugins8a54.css';

import ImageGenerate from './Pages/ImageGenerate';
import Callback from './Pages/Callback';
import Contact from './Pages/Contact';
import Documentation from './Pages/Documentation';
import UserSetting from './Pages/UserSetting';
import HomeScreen from './Pages/HomeScreen';
import Login from './Auth/Login';
import Nav from '../src/Components/HomeScreenLayout/Nav'
import Foot from '../src/Components/HomeScreenLayout/Foot'
import Signup from './Auth/Signup';
import ForgotPassword from './Auth/ForgotPassword';
import SupportContact from './Pages/SupportContact';
import PromptSuggest from './Pages/PromptSuggest';
import AboutUs from './Pages/AboutUs';
import PrivateRoute from './Middleware/PrivateRoute';
import PreviousGen from './Pages/PreviousGen';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

const HomeScreenLayout = ({ children, children3 }) => {
  return (
    <>
      <Nav />
      {children}
      {children3}
      <Foot />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<HomeScreenLayout><HomeScreen /></HomeScreenLayout>} />
        <Route path='/aboutus' element={<HomeScreenLayout><AboutUs /></HomeScreenLayout>} />
        <Route path='/ForgotPassword' element={<ForgotPassword />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Callback' element={<Callback />} />
        <Route path='/SupportContact' element={<HomeScreenLayout><SupportContact /></HomeScreenLayout>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/UserSetting' element={<PrivateRoute><Layout><UserSetting /></Layout></PrivateRoute>} />
        <Route path='/mygen' element={<PrivateRoute><Layout><PreviousGen /></Layout></PrivateRoute>} />
       
        <Route path='/Documentation' element={<Layout><Documentation /></Layout>} />
        <Route path='/Contact' element={<PrivateRoute><Layout><Contact /></Layout></PrivateRoute>} />
        <Route path='/ImageGenerate' element={<PrivateRoute><Layout><ImageGenerate /></Layout></PrivateRoute>} />
        {/* <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} /> */}
        <Route path='/username' element={<Layout><username /></Layout>} />
        <Route path='/PromptSuggest' element={<PrivateRoute><Layout><PromptSuggest /></Layout></PrivateRoute>} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Layout><Dashboard /></Layout>
            </PrivateRoute>
          }
        />


      </Routes>
    </BrowserRouter>


  );
}

export default App;
