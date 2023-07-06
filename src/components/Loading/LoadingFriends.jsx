import React from 'react'

const LoadingFriends = () => {
  return (
    <div>
        <ul className="divide-y divide-gray-300">
            <li className="flex items-center py-4">
                <div className="h-10 w-10 rounded-full mr-2 bg-gray-400 animate-pulse"></div>
                <div>
                    <p className="font-medium h-3 rounded-xl bg-gray-400 w-16 animate-pulse"></p>
                    <p className="rounded-xl h-3 mt-1.5 bg-gray-400 w-10 animate-pulse"></p>
                </div>
            </li>
            <li className="flex items-center py-4">
                <div className="h-10 w-10 rounded-full mr-2 bg-gray-400 animate-pulse"></div>
                <div>
                    <p className="font-medium h-3 rounded-xl bg-gray-400 w-16 animate-pulse"></p>
                    <p className="rounded-xl h-3 mt-1.5 bg-gray-400 w-10 animate-pulse"></p>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default LoadingFriends