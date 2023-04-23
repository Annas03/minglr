import React from 'react'
import NavBar from './NavBar'
import Friends from './Friends'
import Posts from './Posts'

const HomePage = () => {
  return (
    <div className='relative bg-gray-200 min-h-screen max-h-max'>
      <div className='max-w-7xl mx-auto'>
          <NavBar/>
        <div className='flex justify-between'>
          <Friends/>
          <Posts/>
        </div>
      </div>
    </div>
  )
}

export default HomePage