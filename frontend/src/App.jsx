import { useState } from 'react'

import './App.css'

import { Route,Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/settingsPage';

function App() {




  return (
    <div>
       <Navbar />

       <Routes>

          <Route path = "/" element= {<HomePage />} />
          <Route path = "/signup" element= {<SignUpPage />} />
          <Route path = "/login" element= {<LoginPage />} />
          <Route path = "/profile" element= {<ProfilePage/>} />
          <Route path = "/settings" element= {<SettingsPage />} />
       </Routes>
     
    </div>
  )
}

export default App
