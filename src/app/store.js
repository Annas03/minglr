import {configureStore} from '@reduxjs/toolkit'
import userSlice from '../components/user/userSlice'
import friendsSlice from '../components/Friends/friendsSlice'
import postsSlice from '../components/post/postsSlice'

const store = configureStore({
    reducer:{
        user: userSlice,
        posts: postsSlice,
        friends: friendsSlice
    }
})

export default store