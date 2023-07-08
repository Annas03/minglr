import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from '../user/userSlice'
import Error from '../error'

const Login = ({setTogglePage}) => {

    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const clickedLogIn = async () => {
      const response  = dispatch(fetchUser(userName, userPassword))
      console.log(response)
      !response.error ? navigate('/home') : <Error/>
    }

  return (
    <div className='rounded-lg bg-white px-4 py-6 text-center flex-col'>
        <h1 className='mb-8 font-bold text-2xl'>Login Page</h1>
        <input className='border border-gray-200 p-2 w-11/12 font-medium rounded-md' type={'email'} placeholder='Enter Email...' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
        <input className='border border-gray-200 p-2 w-11/12 mt-4 font-medium rounded-md' type={'password'} placeholder='Enter Password...' value={userPassword} onChange={(e)=>setUserPassword(e.target.value)}/>
        <button className='border border-gray-200 bg-gray-800 p-1.5 w-11/12 rounded-md mt-8 text-lg font-semibold text-white' onClick={clickedLogIn}>Log in</button>
        <div className='mt-6 text-left w-11/12 mx-auto'>
            <span>Don't have an Account?</span>
            <button className='ml-2 font-semibold text-lg' onClick={()=>setTogglePage('signup')}>SignUp</button>
        </div>
    </div>
  )
}

export default Login