import React from 'react'

const Friend = ({name, photo, active}) => {

  return (
    <li key={name} className="flex items-center py-4">
      <img className="h-8 w-8 rounded-full mr-2" src={photo} alt={name} />
      <div>
        <p className="font-medium">{name}</p>
        {active ? (
          <p className="text-green-500">Active</p>
        ) : (
          <p className="text-gray-500">Inactive</p>
        )}
      </div>
    </li>
  )
}

export default Friend