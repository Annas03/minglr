import React, { useEffect } from 'react'
import Post from '../../components/Post'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from './postsSlice'

const PostsView = () => {

    const posts = useSelector( state => state.posts.posts )
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    }, [])

  return (
    <div className='mt-20 w-1/2 ml-86'>
        {postlist.map((p)=><Post name={p.name} dp={p.dp} content={p.content} contentType={p.contentType} likes={p.likes} comment={p.comment}/>)}
    </div>
  )
}

export default PostsView