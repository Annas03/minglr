import React from 'react'

const LoadingPosts = () => {
  return (
    <div>
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center">
                <div className="bg-gray-400 w-12 h-12 rounded-full mr-2 animate-pulse"></div>
                <div>
                <p className="p-1.5 bg-gray-400 rounded-2xl w-14 animate-pulse"></p>
                <p className="p-1.5 mt-1 bg-gray-400 rounded-2xl w-10 animate-pulse"></p>
                </div>
            </div>
            <div className="mt-4 p-1.5 w-11/12 bg-gray-400 rounded-lg animate-pulse"></div>
            <div className="mt-4 p-1.5 w-2/4 bg-gray-400 rounded-lg animate-pulse"></div>
            <div className="flex items-center justify-between mt-4 pt-2 border-t border-gray-300">
                <div className="flex items-center">
                <p className='w-16 h-4 mr-1 mt-0.5 bg-gray-400 rounded-xl animate-pulse'></p>
                </div>
                <div className="flex items-center">
                <p className='w-16 h-4 mr-1 mt-0.5 bg-gray-400 rounded-xl animate-pulse'></p>
                </div>
            </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center">
                <div className="bg-gray-400 w-12 h-12 rounded-full mr-2 animate-pulse"></div>
                <div>
                <p className="p-1.5 bg-gray-400 rounded-2xl w-14 animate-pulse"></p>
                <p className="p-1.5 mt-1 bg-gray-400 rounded-2xl w-10 animate-pulse"></p>
                </div>
            </div>
            <div className="mt-4 p-1.5 w-11/12 bg-gray-400 rounded-lg animate-pulse"></div>
            <div className="mt-4 p-1.5 w-full h-64 bg-gray-300 rounded-lg animate-pulse"></div>
            <div className="flex items-center justify-between mt-4 pt-2 border-t border-gray-300">
                <div className="flex items-center">
                <p className='w-16 h-4 mr-1 mt-0.5 bg-gray-400 rounded-xl animate-pulse'></p>
                </div>
                <div className="flex items-center">
                <p className='w-16 h-4 mr-1 mt-0.5 bg-gray-400 rounded-xl animate-pulse'></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoadingPosts