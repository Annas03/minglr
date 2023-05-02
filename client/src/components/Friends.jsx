import React, { useState } from 'react'
import Friend from './Friend'
import account from "../assets/account.png"

const Friends = () => {

    const [friend, setFriend] = useState([{name:"Annas", dp:account}, {name:"Ali", dp:account}, {name:"Ahsan", dp:account}])
    const friends = [
      {
        name: 'John Doe',
        photo: 'https://randomuser.me/api/portraits/men/1.jpg',
        active: true,
      },
      {
        name: 'Jane Smith',
        photo: 'https://randomuser.me/api/portraits/women/1.jpg',
        active: false,
      },
      {
        name: 'Bob Johnson',
        photo: 'https://randomuser.me/api/portraits/men/2.jpg',
        active: true,
      },
    ];

  return (
    // <div className='bg-white rounded-xl p-4 ml-2 w-86 h-min'>
    //     <h1 className='text-center font-semibold text-xl'>Friends</h1>
    //     {friend.map((f)=><Friend name={f.name} dp={f.dp}/>)}
    // </div>

    <div className="bg-white rounded-lg shadow-lg p-6 col-span-2">
      <h2 className="text-lg font-medium mb-2 text-center">Friends</h2>
      <ul className="divide-y divide-gray-300">
        {friends.map((friend) => (<li key={friend.name} className="flex items-center py-4">
            <img className="h-8 w-8 rounded-full mr-2" src={friend.photo} alt={friend.name} />
            <div>
              <p className="font-medium">{friend.name}</p>
              {friend.active ? (
                <p className="text-green-500">Active</p>
              ) : (
                <p className="text-gray-500">Inactive</p>
              )}
            </div>
            </li>))}
      </ul>
    </div>
  )
}

export default Friends