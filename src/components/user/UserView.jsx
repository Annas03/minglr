import React, { Suspense } from 'react'
import account from '../../assets/account.png'
import Posts from '../post/Posts'
import AboutMe from '../AboutMe/index'
import { useDispatch, useSelector } from 'react-redux'
import { changePicture } from './userSlice'

const userView = ({cld}) => {

  const userPicture = useSelector( state => state.user.pictureUrl )
  const userName = useSelector( state => state.user.name)

  const dispatch = useDispatch()


  const handleUpload = (resultEvent) => {
    if (resultEvent.event === 'success') {
      // Access the uploaded video details
      const { info } = resultEvent;
      dispatch(changePicture({pictureUrl: info.url}))
    }
    else{
      dispatch(changePicture({pictureUrl: null}))
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


  return (
    <div className='max-w-7xl mx-auto'>
      <div className="max-w-6xl flex-col relative mx-auto">
        <div className='flex justify-between items-center border-b border-black px-2 pb-4 pt-0'>
          <div className='flex'>
            <img className='w-28 h-28 rounded-full' src={userPicture ? userPicture : account}/>
            <div className='pt-12 pl-4'>
              <h1 className="text-4xl font-semibold">{userName}</h1>
            </div>
          </div>
          <button className='px-4 py-1 mt-8 border rounded-xl bg-black text-white font-semibold text-xl' onClick={openUploadWidgetImage}>Change Picture</button>
        </div>
      </div>
      <div className='w-11/12 mx-auto mt-8 flex justify-around'>
        <div className='w-2/5'>
          <AboutMe/>
        </div>
        <div className='shrink w-3/5'>
          <Posts type='specifiPosts'/>
        </div>
      </div>
    </div>
  )
}

export default userView