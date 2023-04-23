import React, { useState } from 'react'

const SignUp = ({setTogglePage, setLoggedIn}) => {

    const [userMail, setUserMail] = useState('')
    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')

  return (
    <div className='rounded-lg bg-white px-4 py-6 text-center flex-col'>
        <h1 className='mb-8 font-bold text-2xl'>SignUp Page</h1>
        <input className='border border-gray-200 p-2 w-11/12 font-medium rounded-md' type={'email'} placeholder='Enter Email...' value={userMail} onChange={(e)=>setUserMail(e.target.value)}/>
        <input className='border border-gray-200 p-2 w-11/12 mt-4 font-medium rounded-md' type={'text'} placeholder='Enter Name...' value={userName} onChange={(e)=>setUserName(e.target.value)}/>
        <input className='border border-gray-200 p-2 w-11/12 mt-4 font-medium rounded-md' type={'password'} placeholder='Enter Password...' value={userPassword} onChange={(e)=>setUserPassword(e.target.value)}/>
        <button className='border border-gray-200 bg-gray-800 p-1.5 w-11/12 rounded-md mt-8 text-lg font-semibold text-white' onClick={()=>setLoggedIn('loggedIn')}>Sign Up</button>
        <div className='mt-6 text-left w-11/12 mx-auto'>
            <span>Already have an Account?</span>
            <button className='ml-2 font-semibold text-lg' onClick={()=>setTogglePage('login')}>Login</button>
        </div>
    </div>
  )
}

export default SignUp