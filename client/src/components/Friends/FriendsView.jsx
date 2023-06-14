import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchFriends } from './friendsSlice'
import Friend from './Friend'
import LoadingFriends from '../Loading/LoadingFriends'

const FriendsView = () => {

    const friendList = useSelector( state => state.friends.friends )
    const loading = useSelector( state => state.friends.loading )
    // const userEmail = useSelector( state => state.user.email )
    const dispatch = useDispatch()

    useEffect(() => {dispatch(fetchFriends(2))} , [])

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 col-span-2 h-min">
      <h2 className="text-lg font-medium mb-2">Friends</h2>
      {loading ? <LoadingFriends/> : <ul className="divide-y divide-gray-300">
        {friendList.length != 0 ? friendList.map((friend) => (<Friend key={friend.name} name={friend.name} photo={friend.photo} active={friend.active}/>)) : <p className="text-lg font-medium mb-2">No Friends!</p>}
      </ul>}
    </div>
  )
}

export default FriendsView