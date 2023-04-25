import React from 'react'
import NavBar from './NavBar'
import Friends from './Friends'
import Posts from './Posts'
import { Routes ,Route } from 'react-router'
import {useSelector} from 'react-redux'
import UserView from '../features/user/UserView'

const HomePage = () => {

  const userName = useSelector(state => state.user.name)

  return (
    <div className='relative bg-gray-200 min-h-screen max-h-max'>
      <div className='max-w-7xl mx-auto'>
          <NavBar/>
        <div className='flex justify-between'>
          <Friends/>
          <Posts/>
        </div>
        <Routes>
          <Route path={`${userName}`} element={<UserView/>} />
        </Routes>
      </div>
    </div>
  )
}

export default HomePage