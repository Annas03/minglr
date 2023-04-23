import { useState } from 'react'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage'
import LandingPage from './components/LandingPage';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(localStorage.getItem('Auth-token'))
  return (
    <>
    {!isLoggedIn ? <LandingPage setLoggedIn={setLoggedIn}/> : <HomePage/>}
    </>
  )
}

export default App
