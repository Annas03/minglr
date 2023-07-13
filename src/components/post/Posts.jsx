import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Post from './Post'
import account from "../../assets/account.png"
import vec_img from "../../assets/vec_img.jpg"
import LoadingPosts from '../Loading/LoadingPosts'
import imageUpload from "../../assets/camera-plus.png"
import videoUpload from "../../assets/video-upload.png"
import { fetchAllPosts, createPost } from './postsSlice'
import { fetchUserPosts, createUserPosts } from './postsUserSlice'


const Posts = ({type}) => {

  const [uploadResourceType, setUploadResourceType] = useState(null)
  const [resourceUrl, setResourceUrl] = useState(null)
  const [postText, setPostText] = useState('')

  const allPostList = useSelector( state => state.posts.posts )
  const userPostList = useSelector( state => state.userPosts.posts)
  const userName = useSelector( state => state.user.name)
  const userPicture = useSelector( state => state.user.pictureUrl)
  const userPostMessage = useSelector(state => state.userPosts.message)
  const postMessage = useSelector(state => state.posts.message)

  const dispatch = useDispatch()

  useEffect(() => {
    if(type == 'allPosts'){
      dispatch(fetchAllPosts())
    }
    else{
      dispatch(fetchUserPosts())
    }
  } , [])

  const createUserPost = () => {
    type == 'allPosts' ? dispatch(createPost({postText, resourceUrl})) : dispatch(createUserPosts({postText, resourceUrl}))
    setPostText('')
    setResourceUrl(null)
    setUploadResourceType(null)
  }

  const handleUpload = (resultEvent) => {
    if (resultEvent.event === 'success') {
      // Access the uploaded video details
      const { info } = resultEvent;
      console.log('Upload result:', info)
      setResourceUrl(info.url)

      // Handle the uploaded video response here
      // You can perform further actions with the uploaded video URL, such as saving it to your database
    } else if (resultEvent.event === 'abort') {
      console.log('Upload aborted');
      setUploadResourceType(null)
    } else if (resultEvent.event === 'close') {
      console.log('Upload widget closed');
      setUploadResourceType(null)
    } else if (resultEvent.event === 'error') {
      console.log('Error uploading video:', resultEvent.info.error.message);
      setUploadResourceType(null)
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
        maxFileSize: 50000000, // Set your desired max file size (in bytes)
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
            src={userPicture ? userPicture : account}
            className="w-10 h-10 rounded-full mr-2"
          />
          <input className='focus:outline-none bg-gray-100 w-11/12 text-left hover:bg-gray-300 text-gray-400 rounded-3xl py-1 px-3' placeholder='What is on your mind?' value={postText} onChange={(e) => setPostText(e.target.value)}/>
        </div>
        <div className="flex items-center justify-around mt-4 pt-2 border-t border-gray-300">
            <button className="flex items-center" disabled={uploadResourceType}  onClick={() => {setUploadResourceType('image');openUploadWidgetImage()}}>
              <img src={imageUpload} className='w-8 h-8 pb-1' />
              <p className='text-md ml-1.5'>Image upload</p>
            </button>
          <button className='flex items-center' disabled={uploadResourceType} onClick={() => {setUploadResourceType('video');openUploadWidgetVideo()}}>
          <img src={videoUpload} className='w-8 h-8'/>
          <p className='text-md ml-1.5'>Video upload</p>
          </button>
        </div>
        {(uploadResourceType == "image" && resourceUrl) && <img src={resourceUrl} className='w-8 h-8'/>}
        {(uploadResourceType == "video" && resourceUrl) && (<video width="400" className='mx-auto my-4' controls>
          <source src={resourceUrl} type="video/mp4"/>
        </video>)}
        <button className='w-11/12 p-1 mt-4 ml-4 rounded-lg bg-black text-white font-semibold' onClick={createUserPost}>Create Post</button>
      </div>
      {(allPostList  && type == 'allPosts' && postMessage) && allPostList.map((p)=><Post name={p.author ? p.author.first_name : userName} dp = {p.author ? p.author.picture_url : userPicture} created_at={p.created_at} content={p.content} media_url={p.media_url} likes={p.num_likes} comment={p.num_comments}/>)}
      {(userPostList  && type == 'specifiPosts' && userPostMessage) && userPostList.map((p)=><Post name={p.author ? p.author.first_name : userName} dp = {p.author ? p.author.picture_url : userPicture} created_at={p.created_at} content={p.content} media_url={p.media_url} likes={p.num_likes} comment={p.num_comments}/>)}
      
    </div>
  )
}

export default Posts