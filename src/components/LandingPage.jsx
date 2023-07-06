import React, { useState } from 'react'
import minglr from "../assets/medium.svg"
import Login from './Login'
import SignUp from './signup'

const LandingPage = () => {

  const [togglePage, setTogglePage] = useState('')
  
  return (
    <div className='relative bg-gray-200 h-screen'>
      <div className='flex justify-between xl:mt-44 lg:mt-36 w-3/4 max-w-6xl mx-auto'>
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