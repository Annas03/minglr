import {configureStore} from '@reduxjs/toolkit'
import userSlice from '../components/user/userSlice'
import friendsSlice from '../components/Friends/friendsSlice'
import postsSlice from '../components/post/postsSlice'
import UserpostsSlice from '../components/post/postsUserSlice'

const store = configureStore({
    reducer:{
        user: userSlice,
        posts: postsSlice,
        friends: friendsSlice,
        userPosts: UserpostsSlice
    }
})

export default store