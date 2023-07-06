import React, { Suspense } from 'react'
import account from '../../assets/account.png'
import Posts from '../post/Posts'
import AboutMe from '../AboutMe/index'
import bg from '../../assets/bg.jpeg'

const userView = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <div className="max-w-6xl flex-col relative mx-auto">
        <img src={bg} className='w-full max-h-96 rounded-xl'/>
        <div className='flex justify-between absolute inset-x-0 -bottom-28 items-center border-b border-black px-2 pb-4 pt-0'>
          <div className='flex'>
            <img className='h-36 rounded-full' src='https://randomuser.me/api/portraits/men/1.jpg'/>
            <div className='pt-12 pl-4'>
              <h1 className="text-4xl font-semibold">Annas Baig</h1>
              <p className='font-medium text-lg'>120 friends</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-11/12 mx-auto mt-32 flex justify-around'>
        <div className='w-2/5'>
          <AboutMe/>
        </div>
        <div className='shrink w-3/5'>
          <Posts/>
        </div>
      </div>
    </div>
  )
}

export default userView