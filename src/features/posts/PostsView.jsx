import React, { useEffect } from 'react'
import Post from '../../components/post/Post'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPosts } from '../../components/post/postsSlice'

const PostsView = () => {

    const posts = useSelector( state => state.posts.posts )
    const loading = useSelector( state => state.posts.loading )
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts(2))
    }, [])

  return (
    <div className="px-2 col-span-3">
      {loading ? <h2>Loading...</h2> : posts.map((p)=><Post name={p.name} dp={p.dp} content={p.content} contentType={p.contentType} likes={p.likes} comment={p.comment}/>)}
    </div>
  )
}

export default PostsView