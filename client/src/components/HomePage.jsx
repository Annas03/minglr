import React from 'react'
import NavBar from './NavBar'
import Friends from './Friends'
import Posts from './Posts'
import { Routes ,Route } from 'react-router'
import {useSelector} from 'react-redux'
import UserView from '../features/user/UserView'

const HomePage = () => {

  // const userName = useSelector(state => state.user.name)

  return (
    <div className='relative bg-gray-200 min-h-screen max-h-max'>
      <div className='max-w-7xl mx-auto'>
          <NavBar/>
      </div>
      <Routes>
        <Route path='/' element={
          <div className='max-w-7xl mx-auto'>
          <div className='flex justify-between'>
            <Friends/>
            <Posts/>
          </div>
          </div>}/>
        <Route path='Annas' element={<UserView/>}/>
      </Routes>
    </div>
  )
}

export default HomePage