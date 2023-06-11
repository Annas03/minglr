import React from 'react'
import NavBar from './NavBar'
import Friends from './Friends'
import FriendsView from '../features/friends/FriendsView'
import Posts from './Posts'
import { Routes ,Route } from 'react-router'
import {useSelector} from 'react-redux'
import UserView from '../features/user/UserView'
import search from "../assets/search.png"

const HomePage = () => {

  const friends = [
    {
      name: 'John Doe',
      photo: 'https://randomuser.me/api/portraits/men/1.jpg',
      active: true,
    },
    {
      name: 'Jane Smith',
      photo: 'https://randomuser.me/api/portraits/women/1.jpg',
      active: false,
    },
    {
      name: 'Bob Johnson',
      photo: 'https://randomuser.me/api/portraits/men/2.jpg',
      active: true,
    },
  ];

  // const userName = useSelector(state => state.user.name)

  return (
    // <div className='relative bg-gray-100 min-h-screen max-h-max'>
    //   <div className='w-full bg-white h-14'>
    //       <NavBar/>
    //   </div>
    //   <Routes>
    //     <Route path='/' element={
    //       <div className='max-w-screen-2xl mx-auto'>
    //       <div className='flex justify-between mt-8'>
    //         <Friends/>
    //         <Posts/>
    //         <Friends/>
    //       </div>
    //       </div>}/>
    //     <Route path='Annas' element={<UserView/>}/>
    //   </Routes>
    // </div>
    <div className="bg-gray-100 min-h-screen max-h-max">
      <NavBar/>
      <main className="max-w-screen-2xl mx-auto py-6 sm:px-6">
          <Routes>
            <Route path='/' element = {
              <div className="grid grid-cols-7 gap-4">
                <div className="bg-white rounded-lg shadow-lg p-6 col-span-2 h-min">
                  <h2 className="text-lg font-medium mb-2">About Me</h2>
                  <p>Some information about you goes here.</p>
                </div>
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