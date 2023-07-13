import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading:false,
    posts:[],
    error:'',
    message:null,
    currentPage:1
}

export const createUserPosts = createAsyncThunk('Userposts/createPosts', async (data, {dispatch}) => {
    const body = {
        content:data.postText,
        mediaUrl:data.resourceUrl
    }
    const config = {
        headers: {'Authorization': 'Bearer ' + localStorage.getItem('jwt-token')}
    }
    const response = await axios.post('http://localhost:5000/api/posts/createPost', body,config)
    await dispatch(fetchUserPosts())
    return response
})

export const likePost = createAsyncThunk('posts/likePost', async (post_id) => {
    return await axios.post('http://localhost:5000/api/posts/likes/'+post_id)
    .then(response => response)
    .catch(error => error)
})

export const fetchUserPosts = createAsyncThunk('Userposts/fetchUserPosts', async () => {
    const config = {
        headers: {'Authorization': 'Bearer ' + localStorage.getItem('jwt-token')}
    }
    return axios.get('http://localhost:5000/api/posts/getPostsOfSignedInUser',config).then(response => response).catch( error => error)
})

const UserpostsSlice = createSlice({
    name:'postsUser',
    initialState,
    reducers:{
        updateUsersPage (state) {
            state.currentPage += 1
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserPosts.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchUserPosts.fulfilled, (state, action) => {
            state.loading = false
            state.posts = action.payload.data.data.posts
            state.message = action.payload.data.message
        })
        builder.addCase(createUserPosts.pending, state => {
            state.message = null
        })
        builder.addCase(createUserPosts.fulfilled, (state, action) => {
            if (action.payload.data.error){
                state.error = ''
            }
            else{
                state.message = action.payload.data.message
            }
        })
    }
})

export const {updateUsersPage} = UserpostsSlice.actions
export default UserpostsSlice.reducer