import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import imageUpload from "../../assets/camera-plus.png"
import { signUp} from '../user/userSlice'

const SignUp = ({setTogglePage}) => {

  const [firstName, setfirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [userMail, setUserMail] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const [pictureUrl, setPictureUrl] = useState(null)

    const user = useSelector( state => state.user.name)

    const dispatch = useDispatch()

    useEffect( () => {
      user !== '' && setTogglePage('login')
    }, [user])

    const clickedSignUp = () => {
      dispatch(signUp({firstName, lastName, userMail, userPassword, pictureUrl}))
    }

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

    const handleUpload = (resultEvent) => {
      if (resultEvent.event === 'success') {
        // Access the uploaded video details
        const { info } = resultEvent;
        console.log(info.url)
        setPictureUrl(info.url)
      } 
    };

  return (
    <div className='rounded-lg bg-white px-4 py-6 text-center flex-col'>
        <h1 className='mb-8 font-bold text-2xl'>SignUp Page</h1>
        <input className='border border-gray-200 p-2 w-11/12 font-medium rounded-md' type={'text'} placeholder='Enter firstName...' value={firstName} onChange={(e)=>setfirstName(e.target.value)}/>
        <input className='border border-gray-200 p-2 w-11/12 mt-4 font-medium rounded-md' type={'text'} placeholder='Enter last...' value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
        <input className='border border-gray-200 p-2 w-11/12 mt-4 font-medium rounded-md' type={'email'} placeholder='Enter Email...' value={userMail} onChange={(e)=>setUserMail(e.target.value)}/>
        <input className='border border-gray-200 p-2 w-11/12 mt-4 font-medium rounded-md' type={'password'} placeholder='Enter Password...' value={userPassword} onChange={(e)=>setUserPassword(e.target.value)}/>
        <button className="flex mx-auto mt-4 w-11/12" disabled={pictureUrl}  onClick={() => {openUploadWidgetImage()}}>
              <img src={imageUpload} className='w-6 h-6' />
              <p className='text-md ml-1.5'>Picture Upload</p>
            </button>
        <button className='border border-gray-200 bg-gray-800 p-1.5 w-11/12 rounded-md mt-4 text-lg font-semibold text-white' onClick={clickedSignUp}>Sign Up</button>
        <div className='mt-6 text-left w-11/12 mx-auto'>
            <span>Already have an Account?</span>
            <button className='ml-2 font-semibold text-lg' onClick={()=>setTogglePage('login')}>Login</button>
        </div>
    </div>
  )
}

export default SignUp