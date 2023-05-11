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

    <div className="bg-white rounded-lg shadow-lg p-6 col-span-2 h-min">
      <h2 className="text-lg font-medium mb-2">Friends</h2>
      <ul className="divide-y divide-gray-300">
        {friends.map((friend) => (<Friend key={friend.name} name={friend.name} photo={friend.photo} active={friend.active}/>))}
      </ul>
    </div>
  )
}

export default Friends