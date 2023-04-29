import React from 'react'
import account from '../../assets/account.png'

const userView = () => {
  return (
    <div className='max-w-7xl pt-32 mx-auto'>
      <div className='flex justify-between items-center border-b border-black max-w-6xl mx-auto px-2 pb-4 pt-0'>
        <div className='flex'>
          <img className='h-20 rounded-full border border-black' src={account}/>
          <div className='pt-2 pl-2'>
            <h1 className="text-2xl font-semibold">userName</h1>
            <p className='font-medium'>120 friends</p>
          </div>
        </div>
        <button className='border border-black rounded-md h-10 px-2 font-medium text-lg'>create post</button>
      </div>
    </div>
  )
}

export default userView