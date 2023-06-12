import React from 'react'

const CommentPopup = ({name, msg}) => {
  return (
    <div className='px-2 pb-3 pt-1 flex rounded-md my-3 border shadow-md'>
        <img className='h-9 w-9 rounded-full mt-1' src='https://randomuser.me/api/portraits/men/1.jpg'/>
        <div className='ml-2'>
            <h1 className='font-medium'>{name}</h1>
            <p className='text-xs'>{msg}</p>
        </div>
    </div>
  )
}

export default CommentPopup