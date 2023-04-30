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
    <div className='relative bg-gray-100 min-h-screen max-h-max'>
      <div className='w-full bg-white h-14'>
          <NavBar/>
      </div>
      <Routes>
        <Route path='/' element={
          <div className='max-w-screen-2xl mx-auto'>
          <div className='flex justify-between mt-8'>
            <Friends/>
            <Posts/>
            <Friends/>
          </div>
          </div>}/>
        <Route path='Annas' element={<UserView/>}/>
      </Routes>
    </div>
  )
}

export default HomePage