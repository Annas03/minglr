import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Post from './Post'
import account from "../../assets/account.png"
import vec_img from "../../assets/vec_img.jpg"
import LoadingPosts from '../Loading/LoadingPosts'
import imageUpload from "../../assets/camera-plus.png"
import videoUpload from "../../assets/video-upload.png"
import { fetchAllPosts } from './postsSlice'

const Posts = ({setNewPost}) => {

  const postList = useSelector( state => state.posts.posts )  
  console.log(postList)

  const dispatch = useDispatch()

  useEffect(() => {dispatch(fetchAllPosts())} , [])

    const [postText, setPostText] = useState('')
    const postlist = [
    {name:"Annas", dp:account, content:"Hello World This is My first Post", contentType:"text", likes:0, comment:0},
    {name:"Ahsan", dp:account, content:vec_img, contentType:"image", likes:4, comment:1}]

  return (
    <div className="px-2 col-span-3">
      <div className="bg-white rounded-lg shadow-md pt-6 px-6 pb-2 mb-6">
        <div className='flex'>
          <img
            src='https://randomuser.me/api/portraits/men/1.jpg'
            className="w-10 h-10 rounded-full mr-2"
          />
          <button className='focus:outline-none bg-gray-100 w-11/12 text-left hover:bg-gray-300 text-gray-400 rounded-3xl py-1 px-3' onClick={() => {setNewPost(true)}}>What is on your mind?</button>
        </div>
        <div className="flex items-center justify-around mt-4 pt-2 border-t border-gray-300">
            <button className="flex items-center">
              <img src={imageUpload} className='w-8 h-8 pb-1' />
              <p className='text-md ml-1.5'>Image upload</p>
            </button>
          <button className='flex items-center'>
          <img src={videoUpload} className='w-8 h-8' />
          <p className='text-md ml-1.5'>Video upload</p>
          </button>
        </div>
      </div>
      {postList ? postList.map((p)=><Post name={p.author.first_name} dp = {p.author.picture_url} created_at={p.created_at} content={p.content} media_url={p.media_url} likes={p.num_likes} comment={p.num_comments}/>) : <LoadingPosts/>}
      
    </div>
  )
}

export default Posts