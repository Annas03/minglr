import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/Home'
import LandingPage from './components/LandingPage';
import UserView from './components/user/UserView';
import { CloudinaryContext, Image } from 'cloudinary-react';

function App() {

  // const cld = new Cloudinary({cloud: {cloudName: 'dxl2vlar6'}});
  
  return (
    <>
    <CloudinaryContext cloudName="dxl2vlar6">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/home/*" element={<HomePage/>}/>
          <Route path="/Annas" element={<UserView/>}/>
        </Routes>
      </BrowserRouter>
    </CloudinaryContext>
    </>
  )
}

export default App
