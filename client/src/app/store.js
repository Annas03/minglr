import {configureStore} from '@reduxjs/toolkit'
import userSlice from '../features/user/userSlice'
import friendsSlice from '../components/Friends/friendsSlice'
import postsSlice from '../features/posts/postsSlice'

const store = configureStore({
    reducer:{
        user: userSlice,
        posts: postsSlice,
        friends: friendsSlice
    }
})

export default store