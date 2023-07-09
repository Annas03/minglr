import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading:false,
    posts:[],
    error:''
}

export const fetchAllPosts = createAsyncThunk('posts/fetchPosts', async () => {
    return await axios.get('http://localhost:5000/api/posts/getAllPosts')
    .then(response => response)
    .catch( error => error)
})

// export const fetchUserPosts = createAsyncThunk('posts/fetchPosts', async () => {
//     return axios.get('http://localhost:5000/api/posts/getAllPosts', {
//         data : [localStorage.getItem('jwt-token')]
//     }).then(response => {
//         return response.data.posts
//     }).catch( error => error)
// })

const postsSlice = createSlice({
    name:'posts',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchAllPosts.pending, state => {
            state.loading = true
            state.posts = []
            state.error = ''
        })
        builder.addCase(fetchAllPosts.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload.data.data.posts
            state.error = ''
        })
        builder.addCase(fetchAllPosts.rejected, (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.payload.data.message
        })
    }
})

export default postsSlice.reducer