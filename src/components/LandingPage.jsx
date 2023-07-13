import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import minglr from "../assets/medium.svg"
import Login from './Login'
import SignUp from './signup'
import Error from './Error/index'
import { useSelector } from 'react-redux'


const LandingPage = () => {

  const [togglePage, setTogglePage] = useState('')

  const userName = useSelector( state => state.user.name)
  const loginError = useSelector(state => state.user.error)

  useEffect(() => {
    if(localStorage.getItem('jwt-token')) window.location = '/home'
  },[])

  
  return (  
    <div className='relative bg-gray-200 h-screen'>
      {loginError && <Error/>}
      <div className='flex justify-between 2xl:pt-44 lg:pt-36 w-3/4 max-w-6xl mx-auto'>
        <div className='h-1/3 max-w-md pt-8'>
          <h1 className='font-bold text-5xl mb-4'>Minglr</h1>
          <p className='font-semibold text-xl'>A social Media App on which you can connect to your friends, share and posts images, videos and texts. You can comment and like posts of your friends.</p>
        </div>
        <div className='max-w-md'>
          {togglePage == 'signup' ? <SignUp setTogglePage={setTogglePage}/> : <Login setTogglePage={setTogglePage}/>}
        </div>
      </div>
    </div>
  )
}

export default LandingPage