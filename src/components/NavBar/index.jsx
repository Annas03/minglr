import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import search from "../../assets/search.png"
import account from "../../assets/account.png"
import setting from "../../assets/settings.png"
import message from '../../assets/message.png'
import notification from '../../assets/notifications.png'
import { useSelector } from 'react-redux'

const NavBar = () => {

  const navigate = useNavigate()

  return (
  <div className='bg-white shadow-md'>
        <header className="pb-4 pt-3 2xl:max-w-screen-2xl lg:mx-4 2xl:mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={() => {navigate('/home')}}>
              <h1 className="ml-2 text-2xl font-bold">MingIR</h1>
            </button>
            <div className='relative ml-10 mt-1'>
              <img className='h-5 mt-1.5 ml-2 absolute' src={search}/>
              <input placeholder='Search..' className='bg-gray-200 w-64 rounded-md pl-8 text-md py-1'/>
            </div>
          </div>
          <nav>
            <ul className="flex justify-center mt-2">
            <li className='ml-8'>
             <Link to="Annas">
               <img className='h-6 w-6 rounded-full transition ease-in-out delay-50 hover:scale-125' src='https://randomuser.me/api/portraits/men/1.jpg'/>
             </Link>
           </li>
              <li className="ml-8">
              <button>
                 <img className='h-6 transition ease-in-out delay-50 hover:scale-125' src={message}/>
               </button>
               </li>
               <li className="ml-8">
               <button>
                 <img className='h-6 transition ease-in-out delay-50 hover:scale-125' src={notification}/>
               </button>
               </li>
               <li className="ml-8 hs-dropdown [--trigger:hover]">
                  <button id="hs-dropdown-hover-event" type="button" className="hs-dropdown-toggle">
                    <img className='h-6 hover:animate-spin-slow' src={setting}/>
                  </button>
                  <div class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700 after:h-4 after:absolute after:-bottom-4 after:left-0 after:w-full before:h-4 before:absolute before:-top-4 before:left-0 before:w-full" aria-labelledby="hs-dropdown-hover-event">
                    <a class="flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" href="#">Newsletter</a>
                  </div>
               </li>
            </ul>
          </nav>
        </header>
      </div>
  )
}

export default NavBar