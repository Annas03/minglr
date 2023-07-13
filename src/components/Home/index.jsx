import React, {useEffect, useState} from 'react'
import NavBar from '../NavBar'
import FriendsView from '../Friends/FriendsView'
import Posts from '../post/Posts'
import { Routes ,Route } from 'react-router'
import {useDispatch, useSelector} from 'react-redux'
import UserView from '../user/UserView'
import AboutMe from '../AboutMe/index'
import NewPost from '../NewPost'
import { setUser } from '../user/userSlice'

const HomePage = () => {

  const [newpost, setNewPost] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setUser())
  }, [])

  return (
    <div className="bg-gray-100 min-h-screen max-h-max">
      <NavBar/>
      <main className="max-w-screen-2xl mx-auto py-6 sm:px-6">
          <Routes>
            <Route path='/' element = {
              <div className="grid grid-cols-7 gap-4 z-0">
                <AboutMe/>
                <Posts type ='allPosts'/>
                <FriendsView/>
                {newpost && <div className='bg-gray-600 object-fill w-screen h-screen z-10' onClick={() => {setNewPost(false)}}><NewPost/></div>}
              </div>
            }/>
            <Route path='Annas' element={<UserView/>}/>
            </Routes>
      </main>
    </div>
  );
}

export default HomePage