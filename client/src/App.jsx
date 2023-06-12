import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/Home'
import LandingPage from './components/LandingPage';
import UserView from './features/user/UserView';

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/home/*" element={<HomePage/>}/>
        <Route path="/Annas" element={<UserView/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
