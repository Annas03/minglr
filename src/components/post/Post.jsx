import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import like from '../../assets/like.svg'
import commenticon from "../../assets/comment.svg"
import liked from "../../assets/liked.svg"
import CommentPopup from "../comment/CommentPopup"
import account from "../../assets/account.png"

const months = ['Jan', 'Feb', 'Mar' ,'Apr', 'May', 'Jun', 'Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const Post = ({name, content, media_url, created_at, likes, comment, dp}) => {

  const [isLiked, setIsLiked] = useState(false)
  const [comments, setComments] = useState(false)

  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')

  const userPicture = useSelector( state => state.user.pictureUrl )

  function setPostTime(){
    const date = new Date(created_at);

    setDay(date.getUTCDate())
    setMonth(months[date.getUTCMonth()])
    setYear(date.getUTCFullYear())
  }

    const msgs = [{name:"Annas", msg:"Very Nice Pic!!!"}, {name:"Ali", msg:"What is wrong with you???"}]

    useEffect(() => {
      setPostTime()
    }, [])

    const toggleLike = () => {
        setIsLiked(prevState => !prevState)
    }

    const toggleComments = () => {
        setComments(prevState => !prevState)
    }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center">
        <img
          src={!dp ? account : dp}
          alt={name}
          className="w-10 h-10 rounded-full mr-2"
        />
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-sm text-gray-600">{day + ' ' + month + ', ' + year}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-lg">{content}</p>
        {(media_url && (media_url.slice(-3,) == 'png' || media_url.slice(-3,) == 'jpg')) && <img src={media_url} alt="Post" className="w-full mt-4 rounded-lg" />}
        {(media_url && media_url.slice(-3,) == 'mp4') && (<video width="500" className='mx-auto my-4' controls>
          <source src={media_url} type="video/mp4"/>
        </video>)}
      </div>
      <div className="flex items-center justify-between mt-4 pt-2 border-t border-gray-300">
          <button onClick={toggleLike} className="flex items-center">
            {isLiked ? <img className='w-5 h-5 mr-1 mt-0.5' src={liked}/> : <img className='h-5 mr-1 mt-0.5' src={like}/>}
            <p className="text-gray-600">{likes + ' likes'}</p>
          </button>
        <button onClick={toggleComments} className='flex items-center'>
          <img className='h-5 mr-1 mt-0.5' src={commenticon}/>
          <p className="text-gray-600">{comment + ' comments'}</p>
        </button>
      </div>
      {comments && msgs.map((m)=><CommentPopup name={m.name} msg={m.msg}/>)}
      <div className='relative pt-4 mt-2'>
          <img className='absolute w-6 h-6 mt-1.5 ml-2 rounded-full' src={userPicture ? userPicture : account}/>
          <input type="text" placeholder='Add a Comment here..' className='focus:outline-none text-md w-full pl-9 py-1.5 border border-gray-400 rounded-lg' />
      </div>
    </div>
  )
}

export default Post