import React, { useState } from 'react'
import Post from './Post'
import account from "../assets/account.png"
import vec_img from "../assets/vec_img.jpg"

const Posts = () => {

    const[postlist, setPostList] = useState([
    {name:"Annas", dp:account, content:"Hello World This is My first Post", contentType:"text", likes:0, comment:0},
    {name:"Ahsan", dp:account, content:vec_img, contentType:"image", likes:4, comment:1}])

  return (
    // <div className='w-1/2'>
    //     {postlist.map((p)=><Post name={p.name} dp={p.dp} content={p.content} contentType={p.contentType} likes={p.likes} comment={p.comment}/>)}
    // </div>
    <div className="px-2 col-span-3">
      {postlist.map((p)=><Post name={p.name} dp={p.dp} content={p.content} contentType={p.contentType} likes={p.likes} comment={p.comment}/>)}
    </div>
  )
}

export default Posts