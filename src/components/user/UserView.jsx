import React, { Suspense } from 'react'
import account from '../../assets/account.png'
import Posts from '../post/Posts'
import AboutMe from '../AboutMe/index'
import bg from '../../assets/bg.jpeg'
import { useSelector } from 'react-redux'

const userView = ({cld}) => {

  const userPicture = useSelector( state => state.user.pictureUrl )
  const userName = useSelector( state => state.user.name)

  return (
    <div className='max-w-7xl mx-auto'>
      <div className="max-w-6xl flex-col relative mx-auto">
        <img src={bg} className='w-full max-h-96 rounded-xl'/>
        <div className='flex justify-between absolute inset-x-0 -bottom-24 items-center border-b border-black px-2 pb-4 pt-0'>
          <div className='flex'>
            <img className='w-28 h-28 rounded-full' src={userPicture ? userPicture : account}/>
            <div className='pt-12 pl-4'>
              <h1 className="text-4xl font-semibold">{userName}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='w-11/12 mx-auto mt-32 flex justify-around'>
        <div className='w-2/5'>
          <AboutMe/>
        </div>
        <div className='shrink w-3/5'>
          <Posts type='specifiPosts'/>
        </div>
      </div>
    </div>
  )
}

export default userView