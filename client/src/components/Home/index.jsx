import React from 'react'
import NavBar from '../NavBar'
import FriendsView from '../Friends/FriendsView'
import Posts from '../post/Posts'
import { Routes ,Route } from 'react-router'
import {useSelector} from 'react-redux'
import UserView from '../../features/user/UserView'
import AboutMe from '../AboutMe/index'

const HomePage = () => {
  // const userName = useSelector(state => state.user.name)

  return (
    <div className="bg-gray-100 min-h-screen max-h-max">
      <NavBar/>
      <main className="max-w-screen-2xl mx-auto py-6 sm:px-6">
          <Routes>
            <Route path='/' element = {
              <div className="grid grid-cols-7 gap-4">
                <AboutMe/>
                <Posts/>
                <FriendsView/>
              </div>
            }/>
            <Route path='Annas' element={<UserView/>}/>
            </Routes>
      </main>
    </div>
  );
}

export default HomePage