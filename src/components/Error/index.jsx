import React from 'react'
import { useSelector } from 'react-redux'

const Error = () => {

  const error = useSelector(state => state.user.error)

  return (
    <div className='absolute top-10 left-1/2 px-1.5 py-1 rounded-lg transform -translate-x-1/2 -translate-y-1/2 border bg-red-500 text-white text-lg font-semibold'>{error}</div>
  )
}

export default Error