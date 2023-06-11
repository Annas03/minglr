import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFriends } from './friendsSlice'
import Friend from '../../components/Friend'

const FriendsView = () => {

    const friendList = useSelector( state => state.friends.friends )
    // const userEmail = useSelector( state => state.user.email )
    const dispatch = useDispatch()

    useEffect(() => dispatch(fetchFriends(2)) , [])

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 col-span-2 h-min">
      <h2 className="text-lg font-medium mb-2">Friends</h2>
      <ul className="divide-y divide-gray-300">
        {friendList.map((friend) => (<Friend key={friend.name} name={friend.name} photo={friend.photo} active={friend.active}/>))}
      </ul>
    </div>
  )
}

export default FriendsView