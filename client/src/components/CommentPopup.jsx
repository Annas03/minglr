import React from 'react'
import account from "../assets/account.png"

const CommentPopup = ({name, msg}) => {
  return (
    <div className='p-2 flex rounded-xl mx-4'>
        <img className='h-8 mt-1.5' src={account}/>
        <div className='ml-2'>
            <h1 className='font-semibold'>{name}</h1>
            <p className='text-sm'>{msg}</p>
        </div>
    </div>
  )
}

export default CommentPopup