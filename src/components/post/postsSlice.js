import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading:false,
    posts:[],
    error:'',
    message:null
}

export const createPost = createAsyncThunk('posts/createPosts', async (data,{dispatch}) => {
    const body = {
        content:data.postText,
        mediaUrl:data.resourceUrl
    }
    const config = {
        headers: {'Authorization': 'Bearer ' + localStorage.getItem('jwt-token')}
    }
    const response = await axios.post('http://localhost:5000/api/posts/createPost', body,config)
    await dispatch(fetchAllPosts())
    return response
})

export const fetchAllPosts = createAsyncThunk('posts/fetchPosts', async () => {
    return await axios.get('http://localhost:5000/api/posts/getAllPosts')
    .then(response => response)
    .catch( error => error)
})

export const likePost = createAsyncThunk('posts/likePost', async (post_id) => {
    return await axios.post('http://localhost:5000/api/posts/likes/'+post_id)
    .then(response => response)
    .catch(error => error)
})

const postsSlice = createSlice({
    name:'posts',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchAllPosts.pending, state => {
            state.loading = true
            state.message = null
        })
        builder.addCase(fetchAllPosts.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload.data.data.posts
            state.error = ''
            state.message = action.payload.data.message
        })
        builder.addCase(fetchAllPosts.rejected, (state, action) => {
            state.loading = false
            state.posts = []
            state.error = action.payload.data.message
        })
        builder.addCase(createPost.pending, state => {
            state.message = null

        })
        builder.addCase(createPost.fulfilled, (state, action) => {
            if (action.payload.data.error){
                state.error = ''
            }
            else{
                state.message = action.payload.data.message
            }
        })
    }
})

export default postsSlice.reducer