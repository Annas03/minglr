import { configureStore,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading:false,
    posts:[],
    error:''
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', () => {
    return axios.get('http://localhost:5000/fetchPosts')
})

const postsSlice = configureStore({
    name:'posts',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
    }
})

export default postsSlice