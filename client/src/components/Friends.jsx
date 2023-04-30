import React, { useState } from 'react'
import Friend from './Friend'
import account from "../assets/account.png"

const Friends = () => {

    const [friend, setFriend] = useState([{name:"Annas", dp:account}, {name:"Ali", dp:account}, {name:"Ahsan", dp:account}])

  return (
    <div className='bg-white rounded-xl p-4 ml-2 w-86 h-min'>
        <h1 className='text-center font-semibold text-xl'>Friends</h1>
        {friend.map((f)=><Friend name={f.name} dp={f.dp}/>)}
    </div>
  )
}

export default Friends