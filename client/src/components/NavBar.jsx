import React from 'react'
import minglr from "../assets/medium.svg"
import search from "../assets/search.png"
import account from "../assets/account.png"
import setting from "../assets/settings.png"

const NavBar = () => {
  return (
    <div className="z-10 backdrop-blur p-2 border-b border-gray-400 flex justify-between fixed">
        <div className='flex lg:ml-4'>
          <img src={minglr} className='h-10'/>
          <h1 className='text-2xl pt-0.5 ml-2 font-bold'>MinglR</h1>
        </div>
        <div className='relative mr-96 ml-56'>
          <img className='h-6 mt-1.5 ml-1 absolute' src={search}/>
          <input placeholder='Search..' className='bg-white w-96 rounded-md pl-8 text-lg py-1'/>
        </div>
        <ul className='flex'>
          <li className='mr-2'>
            <button className='hover:border-b-2 border-b-blue-500'>
              <img className='h-9' src={account}/>
            </button>
          </li>
          <li>
          <button className='hover:border-b-2 border-b-blue-500'>
            <img className='h-9' src={setting}/>
          </button>
          </li>
        </ul>
      </div>
  )
}

export default NavBar