import React, { useState } from 'react'
import Post from './Post'
import account from "../../assets/account.png"
import vec_img from "../../assets/vec_img.jpg"
import LoadingPosts from '../Loading/LoadingPosts'

const Posts = () => {

    const[postlist, setPostList] = useState([
    {name:"Annas", dp:account, content:"Hello World This is My first Post", contentType:"text", likes:0, comment:0},
    {name:"Ahsan", dp:account, content:vec_img, contentType:"image", likes:4, comment:1}])

  return (
    <div className="px-2 col-span-3">
      {postlist ? postlist.map((p)=><Post name={p.name} dp={p.dp} content={p.content} contentType={p.contentType} likes={p.likes} comment={p.comment}/>) : <LoadingPosts/>}
      
    </div>
  )
}

export default Posts