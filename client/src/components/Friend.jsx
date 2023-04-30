import React from 'react'

const Friend = ({name, dp}) => {
  return (
    <div className='flex py-1'>
        <img className='h-6 mt-0.5' src={dp}/>
        <h1 className='mb-1 text-lg font-medium ml-2'>{name}</h1>
    </div>
  )
}

export default Friend