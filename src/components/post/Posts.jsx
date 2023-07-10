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
  const [file, setFile] = useState(null)
  const [postText, setPostText] = useState('')

  const dispatch = useDispatch()

  useEffect(() => {dispatch(fetchAllPosts())} , [])

  const handleUpload = (resultEvent) => {
    if (resultEvent.event === 'success') {
      // Access the uploaded video details
      const { info } = resultEvent;
      console.log('Upload result:', info);

      // Handle the uploaded video response here
      // You can perform further actions with the uploaded video URL, such as saving it to your database
    } else if (resultEvent.event === 'abort') {
      console.log('Upload aborted');
    } else if (resultEvent.event === 'close') {
      console.log('Upload widget closed');
    } else if (resultEvent.event === 'error') {
      console.log('Error uploading video:', resultEvent.info.error.message);
    }
  };

  const openUploadWidgetImage = () => {
    // Open the Cloudinary Upload Widget
    window.cloudinary.openUploadWidget(
      {
        cloudName: 'dxl2vlar6',
        uploadPreset: 'qrgtp1zj',
        sources: ['local', 'url', 'camera'],
        multiple: false,
        resourceType: 'image',
        maxFileSize: 1000000, // Set your desired max file size (in bytes)
        cropping: true,
        croppingAspectRatio: 1, // Set the desired aspect ratio for cropping
        croppingDefaultSelectionRatio: 0.8, // Set the default selection ratio for cropping
        croppingShowDimensions: true, // Show dimensions during cropping
        croppingCoordinatesMode: 'custom', // Allow custom cropping coordinates
        croppingValidateDimensions: true, // Validate dimensions during cropping
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          handleUpload(result);
        }
      }
    );
  };

  const openUploadWidgetVideo = () => {
    // Open the Cloudinary Upload Widget
    window.cloudinary.openUploadWidget(
      {
        cloudName: 'dxl2vlar6',
        uploadPreset: 'qrgtp1zj',
        sources: ['local', 'url'],
        multiple: false,
        resourceType: 'video',
        maxFileSize: 500000, // Set your desired max file size (in bytes)
        maxVideoDuration: 120, // Set your desired max video duration (in seconds)
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          handleUpload(result);
        }
      }
    );
  };

  return (
    <div className="px-2 col-span-3">
      <div className="bg-white rounded-lg shadow-md pt-6 px-6 pb-2 mb-6">
        <div className='flex'>
          <img
            src='https://randomuser.me/api/portraits/men/1.jpg'
            className="w-10 h-10 rounded-full mr-2"
          />
          <input className='focus:outline-none bg-gray-100 w-11/12 text-left hover:bg-gray-300 text-gray-400 rounded-3xl py-1 px-3' placeholder='What is on your mind?'/>
        </div>
        <div className="flex items-center justify-around mt-4 pt-2 border-t border-gray-300">
            <button className="flex items-center" onClick={openUploadWidgetImage}>
              <img src={imageUpload} className='w-8 h-8 pb-1' />
              <p className='text-md ml-1.5'>Image upload</p>
            </button>
          <button className='flex items-center' onClick={openUploadWidgetVideo}>
          <img src={videoUpload} className='w-8 h-8'/>
          <p className='text-md ml-1.5'>Video upload</p>
          </button>
        </div>
        <button className='w-11/12 p-1 mt-4 ml-4 rounded-lg bg-black text-white font-semibold'>Create Post</button>
      </div>
      {postList ? postList.map((p)=><Post name={p.author.first_name} dp = {p.author.picture_url} created_at={p.created_at} content={p.content} media_url={p.media_url} likes={p.num_likes} comment={p.num_comments}/>) : <LoadingPosts/>}
      
    </div>
  )
}

export default Posts