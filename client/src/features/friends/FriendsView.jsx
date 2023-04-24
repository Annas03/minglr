import React, { useEffect } from 'react'
import { useSelector, useDispatch, useSelector } from 'react-redux'
import { fetchFriends } from './friendsSlice'
import Friend from '../../components/Friend'

const FriendsView = () => {

    const friendList = useSelector( state => state.friends.friends )
    const userName = useSelector( state => state.user.name )
    const dispatch = useDispatch()

    useEffect(() => dispatch(fetchFriends(userName)) , [])

  return (
    <div className='bg-gray-100 border border-gray-400 rounded-3xl p-4 mt-20 ml-2 w-80 max-h-96 fixed'>
        <h1 className='text-center font-semibold text-xl'>Friends</h1>
        {friendList.map((friend)=><Friend name={friend.name} dp={friend.dp}/>)}
    </div>
  )
}

export default FriendsView