import React from 'react'
import { useSelector } from 'react-redux'
import account from '../../assets/account.png'

const CommentPopup = ({name, msg}) => {

  const userPicture = useSelector( state => state.user.pictureUrl )

  return (
    <div className='px-2 pb-3 pt-1 flex rounded-md my-3 border shadow-md'>
        <img className='h-9 w-9 rounded-full mt-1' src={userPicture ? userPicture : account}/>
        <div className='ml-2'>
            <h1 className='font-medium'>{name}</h1>
            <p className='text-xs'>{msg}</p>
        </div>
    </div>
  )
}

export default CommentPopup