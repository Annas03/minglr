import React, { useState } from 'react'
import like from '../assets/like.svg'
import commenticon from "../assets/comment.svg"
import account from "../assets/account.png"
import liked from "../assets/liked.svg"
import CommentPopup from "../components/CommentPopup"

const Post = ({name, dp, content, contentType, likes, comment}) => {

    const [isLiked, setIsLiked] = useState(false)
    const [comments, setComments] = useState(false)

    const msgs = [{name:"Annas", msg:"Very Nice Pic!!!"}, {name:"Ali", msg:"What is wrong with you???"}]

    const toggleLike = () => {
        setIsLiked(prevState => !prevState)
    }

    const toggleComments = () => {
        setComments(prevState => !prevState)
    }

  return (
    // <div className='bg-white rounded-xl mb-6'>
    //     <div className='flex py-3 px-4'>
    //         <img className='h-6 mt-0.5' src={dp}/>
    //         <h1 className='ml-2 font-medium text-xl'>{name}</h1>
    //     </div>
    //     <div id="content" className='rounded-lg overflow-hidden'>
    //         {contentType == 'text' ? <h1 className='font-bold text-xl py-2 px-4'>{content}</h1> : <img src={content}/>}
    //     </div>
    //     <div className='flex pt-4 pb-0 px-4'>
    //         <div className='flex pb-1'>
    //             <h1 className='font-semibold text-xl pt-0.5 mr-1'>{likes}</h1>
    //             <button onClick={toggleLike}>
    //                 {isLiked ? <img className='h-6 ml-0.5' src={liked}/> : <img className='h-7' src={like}/>}
    //             </button>
    //         </div>
    //         <div className='ml-3 flex'>
    //             <h1 className='font-semibold text-xl mr-1'>{comment}</h1>
    //             <button onClick={toggleComments}>
    //                 <img className='h-8' src={commenticon}/>
    //             </button>
    //         </div>
    //     </div>
    //     {comments && msgs.map((m)=><CommentPopup name={m.name} msg={m.msg}/>)}
    //     <div className='relative pt-2 pb-4 px-4'>
    //         <img className='absolute h-6 mt-1.5 ml-2' src={account}/>
    //         <input type="text" placeholder='Add a Comment here..' className='text-lg w-full pl-9 py-1 pr-2 border border-gray-400 rounded-lg' />
    //     </div>
    // </div>
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <div className="flex items-center">
        <img
          src={dp}
          alt={name}
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-sm text-gray-600">10 June, 2018</p>
        </div>
      </div>
      <div className="mt-4">
        {contentType !== 'text' ? <img src={content} alt="Post" className="mt-4 rounded-lg" /> : <p className="text-lg">{content}</p>}
      </div>
      <div className="flex items-center justify-between mt-4">
          <button onClick={toggleLike} className="flex items-center">
            {isLiked ? <img className='w-5 h-5 mr-1 mt-0.5' src={liked}/> : <img className='h-5 mr-1 mt-0.5' src={like}/>}
            <p className="text-gray-600">3 Likes</p>
          </button>
        <button onClick={toggleComments} className='flex items-center'>
          <img className='h-5 mr-1 mt-0.5' src={commenticon}/>
          <p className="text-gray-600">4 Comments</p>
        </button>
      </div>
      {comments && msgs.map((m)=><CommentPopup name={m.name} msg={m.msg}/>)}
      <div className='relative pt-4'>
          <img className='absolute h-5 mt-2 ml-2' src={account}/>
          <input type="text" placeholder='Add a Comment here..' className='text-md w-full pl-9 py-1 border border-gray-400 rounded-lg' />
      </div>
    </div>
  )
}

export default Post